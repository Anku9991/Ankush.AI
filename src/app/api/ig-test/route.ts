import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Always run on request

export async function GET() {
  const token = process.env.IG_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'No IG_ACCESS_TOKEN found in Vercel Environment Variables.' }, { status: 400 });
  }

  // Clean the token (remove accidental quotes or spaces)
  const cleanToken = token.trim().replace(/^["']|["']$/g, '');
  const encodedToken = encodeURIComponent(cleanToken);

  try {
    const isFBToken = cleanToken.startsWith('EAA');
    const safeToken = cleanToken.substring(0, 5) + '...' + cleanToken.substring(cleanToken.length - 5);

    if (!isFBToken) {
      // Test Instagram Basic Token
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${encodedToken}`
      );
      const data = await res.json();

      if (data.error) {
        return NextResponse.json({
          success: false,
          message: 'Basic Display API: Token present but Meta rejected it.',
          meta_error: data.error,
          token_preview: safeToken,
          token_length: cleanToken.length
        }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        message: `Basic Display API: Successfully fetched ${data.data?.length || 0} posts!`,
        posts: data.data,
        token_preview: safeToken,
        token_length: cleanToken.length
      }, { status: 200 });
    } else {
      // Test Facebook Graph Token
      const fbPagesRes = await fetch(`https://graph.facebook.com/v19.0/me/accounts?access_token=${encodedToken}`);
      const fbPagesData = await fbPagesRes.json();

      if (fbPagesData.error) {
         return NextResponse.json({
          success: false,
          message: 'Graph API: Failed to fetch Facebook Pages. Invalid token or missing permissions.',
          meta_error: fbPagesData.error,
          token_preview: safeToken,
          token_length: cleanToken.length
        }, { status: 400 });
      }

      if (fbPagesData.data && fbPagesData.data.length > 0) {
        const pageId = fbPagesData.data[0].id;
        const igAccountRes = await fetch(`https://graph.facebook.com/v19.0/${pageId}?fields=instagram_business_account&access_token=${encodedToken}`);
        const igAccountData = await igAccountRes.json();

        if (igAccountData.instagram_business_account) {
          const igUserId = igAccountData.instagram_business_account.id;
          const mediaRes = await fetch(
            `https://graph.facebook.com/v19.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${encodedToken}`
          );
          const mediaData = await mediaRes.json();

          if (mediaData.error) {
            return NextResponse.json({
              success: false,
              message: 'Graph API: Failed to fetch media from linked IG account.',
              meta_error: mediaData.error,
              token_preview: safeToken,
              token_length: cleanToken.length
            }, { status: 400 });
          }

          return NextResponse.json({
            success: true,
            message: `Graph API: Successfully fetched ${mediaData.data?.length || 0} posts!`,
            posts: mediaData.data,
            token_preview: safeToken,
            token_length: cleanToken.length
          }, { status: 200 });
        } else {
          return NextResponse.json({
            success: false,
            message: `Graph API: Facebook Page (ID: ${pageId}) is NOT linked to an Instagram Business account. Please link them in Facebook Page Settings.`,
            token_preview: safeToken,
            token_length: cleanToken.length
          }, { status: 400 });
        }
      } else {
        return NextResponse.json({
            success: false,
            message: `Graph API: No Facebook Pages found for this user. Ensure you created a Page and gave the app 'pages_show_list' permissions.`,
            token_preview: safeToken,
            token_length: cleanToken.length
        }, { status: 400 });
      }
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, error: 'Network or Fetch error', details: err.message }, { status: 500 });
  }
}
