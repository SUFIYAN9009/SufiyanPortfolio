
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const pointer = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    // Use the custom cursor only for mouse-like pointers.
    if (!finePointer) return undefined;

    let animationFrame;

    const updatePointer = (x, y) => {
      pointer.current.x = x;
      pointer.current.y = y;

      if (!visible.current) {
        visible.current = true;

        follower.current.x = x;
        follower.current.y = y;

        dotRef.current?.classList.add("cursor-visible");
        followerRef.current?.classList.add("cursor-visible");
      }
    };

    const handleMouseMove = (event) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleMouseLeave = () => {
      visible.current = false;

      dotRef.current?.classList.remove("cursor-visible");
      followerRef.current?.classList.remove("cursor-visible");
    };

    const animate = () => {
      if (visible.current) {
        follower.current.x +=
          (pointer.current.x - follower.current.x) * 0.16;

        follower.current.y +=
          (pointer.current.y - follower.current.y) * 0.16;

        if (dotRef.current) {
          dotRef.current.style.left = `${pointer.current.x}px`;
          dotRef.current.style.top = `${pointer.current.y}px`;
        }

        if (followerRef.current) {
          followerRef.current.style.left = `${follower.current.x}px`;
          followerRef.current.style.top = `${follower.current.y}px`;
        }
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="cursor-follower"
        aria-hidden="true"
      />

      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;

