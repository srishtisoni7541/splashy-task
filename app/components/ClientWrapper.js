"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      id="smooth-scroll-container"
      data-scroll-container
      ref={scrollRef}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}
