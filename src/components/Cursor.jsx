import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = 1;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="cursor" ref={ref} aria-hidden="true" style={{ opacity: 0 }}>
      <span className="emoji">🔐</span>
    </div>
  );
}
