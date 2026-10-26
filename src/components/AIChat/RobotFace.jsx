import { useEffect, useRef, useState } from "react";

// Animated robot face. Eyes blink and follow the mouse.
// mood: "idle" | "thinking" | "talking" | "happy"
export default function RobotFace({ mood = "idle", size = 44, className = "" }) {
  const ref = useRef(null);
  const [look, setLook] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const clamp = (v) => Math.max(-3, Math.min(3, v / 40));
      setLook({ x: clamp(dx), y: clamp(dy) });
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const lookStyle = { transform: `translate(${look.x}px, ${look.y}px)` };

  const eye = (cx) =>
    mood === "happy" ? (
      <path
        d={`M${cx - 6} 50 Q${cx} 41 ${cx + 6} 50`}
        fill="none"
        stroke="#7ef0ff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    ) : (
      <g className="robot-eye">
        <ellipse cx={cx} cy="50" rx="6" ry="8" fill="#7ef0ff" />
        <circle cx={cx + 2} cy="46" r="2" fill="#ffffff" />
      </g>
    );

  return (
    <svg
      ref={ref}
      className={`robot-face robot-${mood} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="robot-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9be4ff" />
          <stop offset="55%" stopColor="#3478d4" />
          <stop offset="100%" stopColor="#7c5cff" />
        </linearGradient>
        <radialGradient id="robot-screen" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#1a3d68" />
          <stop offset="100%" stopColor="#060f1f" />
        </radialGradient>
      </defs>

      {/* Antenna */}
      <line
        x1="50"
        y1="12"
        x2="50"
        y2="5"
        stroke="#69c9d0"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle className="robot-antenna-light" cx="50" cy="4" r="4" fill="#7ef0ff" />

      {/* Round head */}
      <circle cx="50" cy="54" r="42" fill="url(#robot-shell)" />
      <circle cx="50" cy="54" r="34" fill="url(#robot-screen)" />
      <circle cx="50" cy="54" r="34" fill="none" stroke="#7ef0ff" strokeOpacity="0.35" strokeWidth="1" />

      {/* Cheeks */}
      <ellipse className="robot-cheek" cx="28" cy="66" rx="5" ry="3" fill="#ff8fb1" />
      <ellipse className="robot-cheek" cx="72" cy="66" rx="5" ry="3" fill="#ff8fb1" />

      {/* Eyes: mood shift, then mouse tracking */}
      <g className="robot-eyes-mood">
        <g style={lookStyle}>
          {eye(38)}
          {eye(62)}
        </g>
      </g>

      {/* Mouth changes with mood */}
      {mood === "talking" ? (
        <ellipse className="robot-mouth-talk" cx="50" cy="71" rx="6" ry="4" fill="#7ef0ff" />
      ) : mood === "thinking" ? (
        <g className="robot-think-dots" fill="#7ef0ff">
          <circle cx="43" cy="71" r="2" />
          <circle cx="50" cy="71" r="2" />
          <circle cx="57" cy="71" r="2" />
        </g>
      ) : (
        <path
          d="M42 68 Q50 75 58 68"
          fill="none"
          stroke="#7ef0ff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}