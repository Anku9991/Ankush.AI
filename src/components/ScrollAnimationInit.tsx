"use client";

import { useEffect } from "react";

export default function ScrollAnimationInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const animatedEls = document.querySelectorAll(
      ".fade-up, .fade-in, .slide-left, .slide-right, .scale-in"
    );
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
