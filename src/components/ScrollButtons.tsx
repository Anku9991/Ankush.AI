"use client";

import React, { useState, useEffect, useCallback } from 'react';

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowTop(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-buttons-container"
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--gradient-primary)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        transition: 'transform 0.2s, box-shadow 0.2s',
        touchAction: 'manipulation',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
      }}
      title="Back to Top"
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
