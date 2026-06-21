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
    // Test the token
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${encodedToken}`
    );
    
    const data = await res.json();
    
    // Obfuscate token for safety if we need to return it
    const safeToken = cleanToken.substring(0, 5) + '...' + cleanToken.substring(cleanToken.length - 5);

    if (data.error) {
      return NextResponse.json({
        success: false,
        message: 'The token is present but Meta rejected it. See the raw Meta error below.',
        meta_error: data.error,
        token_preview: safeToken,
        token_length: cleanToken.length
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Successfully fetched ${data.data?.length || 0} posts!`,
      posts: data.data,
      token_preview: safeToken,
      token_length: cleanToken.length
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ success: false, error: 'Network or Fetch error', details: err.message }, { status: 500 });
  }
}
