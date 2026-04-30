import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] mix-blend-soft-light"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
      }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-[#C89B3C]/20 blur-[120px]" />
    </div>
  );
}