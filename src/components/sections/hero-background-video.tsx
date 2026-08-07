"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Only one of these background videos should decode at a time — playing
    // several simultaneously (one per section) can starve the browser's
    // media pipeline and stall unrelated image loads elsewhere on the page.
    // Pausing instances outside the viewport keeps at most ~1 active.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/institutional/tj-automacao-banner-tecnologia.png"
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src="/videos/tj-automacao-hero-background.mp4" type="video/mp4" />
    </video>
  );
}
