"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    // Auto-tag sections for scroll animations (React style)
    if (typeof window !== "undefined") {
      document.querySelectorAll('.section-title').forEach(el => el.setAttribute('data-aos', 'fade-up'));
      document.querySelectorAll('.section-subtitle').forEach(el => { 
        el.setAttribute('data-aos', 'fade-up'); 
        el.setAttribute('data-aos-delay', '100'); 
      });
      document.querySelectorAll('.card').forEach((el, index) => { 
        el.setAttribute('data-aos', 'fade-up'); 
        el.setAttribute('data-aos-delay', String((index % 3) * 150)); 
      });
      document.querySelectorAll('.trust-item').forEach((el, index) => { 
        el.setAttribute('data-aos', 'zoom-in'); 
        el.setAttribute('data-aos-delay', String((index % 5) * 50)); 
      });

      // Ambient torch logic
      const torch = document.getElementById('ambient-torch');
      document.addEventListener('mousemove', (e) => {
        if(torch) {
            torch.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        }
      });
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return null;
};
