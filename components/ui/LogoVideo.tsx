"use client";

import { useEffect, useRef } from "react";

interface LogoVideoProps {
  size?: number;
  style?: React.CSSProperties;
}

export default function LogoVideo({ size = 80, style }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const draw = () => {
      if (video.readyState >= 2) {
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(video, 0, 0, size, size);

        const imageData = ctx.getImageData(0, 0, size, size);
        const d = imageData.data;

        for (let i = 0; i < d.length; i += 4) {
          // Make near-white pixels transparent
          if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) {
            d[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      void video.play();
      draw();
    };

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start, { once: true });
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [size]);

  return (
    <div style={{ width: size, height: size, ...style }}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        style={{ display: "none" }}
      >
        <source src="/videos/logo-animation.webm" type="video/webm" />
        <source src="/videos/logo-animation.mp4" type="video/mp4" />
      </video>
      <canvas ref={canvasRef} width={size} height={size} style={{ width: size, height: size }} />
    </div>
  );
}
