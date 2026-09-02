
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const follower = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (!finePointer) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }

      follower.current.x +=
        (mouse.current.x - follower.current.x) * 0.16;

      follower.current.y +=
        (mouse.current.y - follower.current.y) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.left =
          `${follower.current.x}px`;

        followerRef.current.style.top =
          `${follower.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    const animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
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

