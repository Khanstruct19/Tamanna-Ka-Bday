"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic({ start }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (start && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [start]);

  return (
    <audio ref={audioRef} loop>
      <source
        src="/music/Diamond Ni Jigar Saraiya 320 Kbps.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}
