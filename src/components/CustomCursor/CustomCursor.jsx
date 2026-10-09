
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;

    if (!dot || !follower) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let followerX = targetX;
    let followerY = targetY;
    let visible = false;

    const showCursor = () => {
      if (visible) return;
      visible = true;
      dot.classList.add("cursor-visible");
      follower.classList.add("cursor-visible");
    };

    const hideCursor = () => {
      visible = false;
      dot.classList.remove("cursor-visible");
      follower.classList.remove("cursor-visible");
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;

      showCursor();
    };

    const animateFollower = () => {
      followerX += (targetX - followerX) * 0.18;
      followerY += (targetY - followerY) * 0.18;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      animationFrameRef.current =
        requestAnimationFrame(animateFollower);
    };

    const handlePointerLeave = () => {
      hideCursor();
    };

    const handlePointerEnter = (event) => {
      if (event.pointerType === "mouse") {
        showCursor();
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      if (!touch) return;

      targetX = touch.clientX;
      targetY = touch.clientY;
      followerX = targetX;
      followerY = targetY;

      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      showCursor();
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;

      targetX = touch.clientX;
      targetY = touch.clientY;

      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;

      showCursor();
    };

    const handleTouchEnd = () => {
      hideCursor();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerenter", handlePointerEnter);
    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    );
    window.addEventListener("blur", handlePointerLeave);

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    window.addEventListener("touchcancel", handleTouchEnd, {
      passive: true,
    });

    animationFrameRef.current =
      requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
      window.removeEventListener("blur", handlePointerLeave);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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