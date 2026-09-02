import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const pointer = useRef({
    x: 0,
    y: 0,
  });

  const follower = useRef({
    x: 0,
    y: 0,
  });

  const visible = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    const updatePointer = (x, y) => {
      pointer.current.x = x;
      pointer.current.y = y;

      if (!visible.current) {
        visible.current = true;

        if (dotRef.current) {
          dotRef.current.classList.add("cursor-visible");
        }

        if (followerRef.current) {
          followerRef.current.classList.add("cursor-visible");
        }

        follower.current.x = x;
        follower.current.y = y;
      }
    };

    /* =====================================================
       DESKTOP — MOUSE
    ===================================================== */

    const handleMouseMove = (e) => {
      updatePointer(e.clientX, e.clientY);
    };

    /* =====================================================
       MOBILE — TOUCH
    ===================================================== */

    const handleTouchStart = (e) => {
      const touch = e.touches[0];

      if (!touch) return;

      updatePointer(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];

      if (!touch) return;

      updatePointer(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      visible.current = false;

      if (dotRef.current) {
        dotRef.current.classList.remove("cursor-visible");
      }

      if (followerRef.current) {
        followerRef.current.classList.remove("cursor-visible");
      }
    };

    /* =====================================================
       ANIMATION
    ===================================================== */

    let animationFrame;

    const animate = () => {
      if (visible.current) {
        follower.current.x +=
          (pointer.current.x - follower.current.x) * 0.16;

        follower.current.y +=
          (pointer.current.y - follower.current.y) * 0.16;

        if (dotRef.current) {
          dotRef.current.style.left =
            `${pointer.current.x}px`;

          dotRef.current.style.top =
            `${pointer.current.y}px`;
        }

        if (followerRef.current) {
          followerRef.current.style.left =
            `${follower.current.x}px`;

          followerRef.current.style.top =
            `${follower.current.y}px`;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    /* =====================================================
       EVENT LISTENERS
    ===================================================== */

    if (finePointer) {
      window.addEventListener(
        "mousemove",
        handleMouseMove
      );
    } else {
      window.addEventListener(
        "touchstart",
        handleTouchStart,
        { passive: true }
      );

      window.addEventListener(
        "touchmove",
        handleTouchMove,
        { passive: true }
      );

      window.addEventListener(
        "touchend",
        handleTouchEnd,
        { passive: true }
      );
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="cursor-follower"
      />

      <div
        ref={dotRef}
        className="cursor-dot"
      />
    </>
  );
}

export default CustomCursor;

