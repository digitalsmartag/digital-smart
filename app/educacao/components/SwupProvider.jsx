"use client";

import { useEffect, useRef } from "react";

export default function SwupProvider({ children }) {
  const swupRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const initSwup = async () => {
      const Swup = (await import("swup")).default;
      const SwupScrollPlugin = (await import("@swup/scroll-plugin")).default;
      const SwupPreloadPlugin = (await import("@swup/preload-plugin")).default;
      const SwupProgressPlugin = (await import("@swup/progress-plugin")).default;

      if (swupRef.current) return;

      swupRef.current = new Swup({
        containers: ["#swup-main"],
        animationSelector: '[class*="transition-"]',
        cache: true,
        plugins: [
          new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: {
              betweenPages: true,
              samePageWithHash: true,
              samePage: true,
            },
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
          }),
          new SwupPreloadPlugin({
            preloadVisibleLinks: true,
          }),
          new SwupProgressPlugin({
            className: "swup-progress-bar",
            delay: 300,
          }),
        ],
      });

      swupRef.current.hooks.on("content:replace", () => {
        initScrollAnimations();
      });

      swupRef.current.hooks.on("page:view", () => {
        initScrollAnimations();
      });
    };

    const initScrollAnimations = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const animatedElements = document.querySelectorAll(
        "[data-animate], [data-animate-stagger]"
      );

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      animatedElements.forEach((el) => {
        observerRef.current.observe(el);
      });
    };

    initSwup();
    initScrollAnimations();

    return () => {
      if (swupRef.current) {
        swupRef.current.destroy();
        swupRef.current = null;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
}
