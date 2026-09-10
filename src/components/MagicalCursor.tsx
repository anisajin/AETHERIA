"use client";

import React, { useEffect, useState, useRef } from "react";

export default function MagicalCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse actual target position
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing ring smoothed position
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on devices with a mouse/fine pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering over clickable or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, select, textarea, [role='button'], [role='tab'], .glass-panel"
        );
        setIsHovering(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop for the trailing ring
    let animId: number;
    const update = () => {
      // Linear interpolation for smooth trailing
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Central Starpoint Spark Cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          borderRadius: "50%",
          backgroundColor: isHovering ? "#00f5d4" : "#ffdf8d",
          boxShadow: isHovering
            ? "0 0 12px #00f5d4, 0 0 20px rgba(0, 245, 212, 0.8)"
            : "0 0 10px #f6c564, 0 0 18px rgba(246, 197, 100, 0.7)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "background-color 0.2s ease, width 0.2s ease, height 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Trailing Arcane Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isClicking ? "26px" : isHovering ? "52px" : "36px",
          height: isClicking ? "26px" : isHovering ? "52px" : "36px",
          borderRadius: "50%",
          border: isHovering
            ? "1.5px solid rgba(0, 245, 212, 0.75)"
            : "1.2px solid rgba(246, 197, 100, 0.5)",
          boxShadow: isHovering
            ? "0 0 20px rgba(0, 245, 212, 0.4), inset 0 0 10px rgba(0, 245, 212, 0.2)"
            : "0 0 14px rgba(246, 197, 100, 0.25), inset 0 0 8px rgba(157, 78, 221, 0.15)",
          background: isHovering
            ? "radial-gradient(circle, rgba(0, 245, 212, 0.08) 0%, transparent 70%)"
            : isClicking
            ? "radial-gradient(circle, rgba(246, 197, 100, 0.25) 0%, transparent 80%)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
          willChange: "transform",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Subtle Arcane Cardinal Points */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "spinSlow 14s linear infinite",
          }}
        >
          {/* Top Pip */}
          <span
            style={{
              position: "absolute",
              top: "-3px",
              width: "2px",
              height: "4px",
              backgroundColor: isHovering ? "#00f5d4" : "#f6c564",
              borderRadius: "1px",
              opacity: 0.8,
            }}
          />
          {/* Bottom Pip */}
          <span
            style={{
              position: "absolute",
              bottom: "-3px",
              width: "2px",
              height: "4px",
              backgroundColor: isHovering ? "#00f5d4" : "#f6c564",
              borderRadius: "1px",
              opacity: 0.8,
            }}
          />
          {/* Left Pip */}
          <span
            style={{
              position: "absolute",
              left: "-3px",
              width: "4px",
              height: "2px",
              backgroundColor: isHovering ? "#00f5d4" : "#f6c564",
              borderRadius: "1px",
              opacity: 0.8,
            }}
          />
          {/* Right Pip */}
          <span
            style={{
              position: "absolute",
              right: "-3px",
              width: "4px",
              height: "2px",
              backgroundColor: isHovering ? "#00f5d4" : "#f6c564",
              borderRadius: "1px",
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    </>
  );
}
