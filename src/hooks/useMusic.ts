"use client";

import { useRef, useState, useCallback } from "react";

export function useMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.55;
    }
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [src]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    playing ? pause() : play();
  }, [playing, play, pause]);

  return { playing, play, pause, toggle, audioRef };
}
