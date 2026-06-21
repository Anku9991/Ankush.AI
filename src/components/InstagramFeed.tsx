import React from 'react';

// Define the shape of Instagram Media objects
interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export default async function InstagramFeed() {
  const rawToken = process.env.IG_ACCESS_TOKEN;
  const token = rawToken ? encodeURIComponent(rawToken.trim().replace(/^["']|["']$/g, '')) : undefined;

  // If no token is provided, we can show a placeholder or nothing
  if (!token) {
    return (
      <section id="instagram-feed" style={{ padding: '4rem 0', background: 'rgba(15,23,42,0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" data-aos="fade-up">Instagram Sync</div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
              Latest From <span className="gradient-text">PihNexa</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Connect your Instagram account in Vercel to see live updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  let posts: InstagramMedia[] = [];

  try {
    // Attempt 1: Instagram Basic Display API (Personal/Creator accounts)
    const basicRes = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    const basicData = await basicRes.json();

    if (basicData.data && !basicData.error) {
      posts = basicData.data.slice(0, 8);
    } else {
      // Attempt 2: Facebook Graph API (Professional Business Accounts linked to FB Pages)
      console.log("Instagram Basic Display API failed. Attempting Facebook Graph API route...");
      
      // Step A: Get FB Pages the token has access to
      const fbPagesRes = await fetch(`https://graph.facebook.com/v19.0/me/accounts?access_token=${token}`);
      const fbPagesData = await fbPagesRes.json();

      if (fbPagesData.data && fbPagesData.data.length > 0) {
        // Assume the first page is the correct one for simplicity
        const pageId = fbPagesData.data[0].id;
        
        // Step B: Get the linked Instagram Business Account ID
        const igAccountRes = await fetch(`https://graph.facebook.com/v19.0/${pageId}?fields=instagram_business_account&access_token=${token}`);
        const igAccountData = await igAccountRes.json();

        if (igAccountData.instagram_business_account) {
          const igUserId = igAccountData.instagram_business_account.id;
          
          // Step C: Fetch Media using the IG User ID
          const mediaRes = await fetch(
            `https://graph.facebook.com/v19.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`,
            { next: { revalidate: 3600 } }
          );
          const mediaData = await mediaRes.json();
          
          if (mediaData.data) {
            posts = mediaData.data.slice(0, 8);
          } else {
             console.error("Facebook Graph API failed to fetch media:", mediaData.error);
          }
        } else {
          console.error("No Instagram Business Account linked to this Facebook Page.");
        }
      } else {
        console.error("Facebook Graph API: Token invalid or no Facebook Pages found. Basic Data Error:", basicData.error);
      }
    }
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
  }

  if (posts.length === 0) {
    return (
      <section id="instagram-feed" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge" data-aos="fade-up">Social Wall</div>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
              Latest From <span className="gradient-text">PihNexa</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Follow us on Instagram for the latest reels, tips, and company updates.
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px dashed rgba(255,255,255,0.1)' }}>
            <i className="fa-brands fa-instagram" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
            <p style={{ color: 'var(--text-muted)' }}>No posts found or Instagram token is invalid/expired.</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Please verify your IG_ACCESS_TOKEN in Vercel settings.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram-feed" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge" data-aos="fade-up">Social Wall</div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            Latest From <span className="gradient-text">PihNexa</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            Follow us on Instagram for the latest reels, tips, and company updates.
          </p>
        </div>

        <div className="ig-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {posts.map((post) => {
            const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url;
            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-post glass"
                data-aos="zoom-in"
                style={{
                  display: 'block',
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <img
                  src={imageUrl}
                  alt={post.caption || 'Instagram Post'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                />
                <div
                  className="ig-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    color: '#fff'
                  }}
                >
                  {post.media_type === 'VIDEO' && (
                    <i className="fa-solid fa-play" style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem' }}></i>
                  )}
                  {post.media_type === 'CAROUSEL_ALBUM' && (
                    <i className="fa-solid fa-images" style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem' }}></i>
                  )}
                  <p style={{ fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.caption}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', marginTop: '0.5rem' }}>
                    {new Date(post.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .ig-post:hover img { transform: scale(1.05); }
        .ig-post:hover .ig-overlay { opacity: 1 !important; }
      `}} />
    </section>
  );
}
