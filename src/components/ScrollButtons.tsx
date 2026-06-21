"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowTop(scrollY > 300);
      setShowBottom(scrollY + windowHeight < documentHeight - 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'fixed', right: '1.5rem', bottom: '6rem', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {showTop && (
        <button
          onClick={scrollToTop}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)',
            color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Scroll to Top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
      {showBottom && (
        <button
          onClick={scrollToBottom}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(30, 41, 59, 0.8)',
            color: '#fff', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', backdropFilter: 'blur(10px)', transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Scroll to Bottom"
        >
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      )}
    </div>
  );
}
