interface RidgeIconProps {
  size?: number;
  variant?: "default" | "light";
  className?: string;
}

export default function RidgeIcon({ size = 44, variant = "default", className = "" }: RidgeIconProps) {
  const isLight = variant === "light";

  // default = white/light bg (navy border + teal mountains)
  // light   = dark bg (white border + bright teal mountains)
  const hexBorder = isLight ? "rgba(255,255,255,0.80)" : "#284454";
  const backMtn   = isLight ? "#78cad8" : "#5c9aaa";
  const sideMtn   = isLight ? "#54a8b8" : "#3d7a8a";
  const valley    = isLight ? "rgba(5,15,28,0.55)"    : "#284454";

  // Flat-top hexagon (matches actual logo: flat edges top/bottom, vertices left/right)
  // viewBox 116×100, hex center (58,50), circumradius 48
  // Points: top-right, right, bottom-right, bottom-left, left, top-left
  const hex = "83,7 106,50 83,93 33,93 10,50 33,7";

  // Mountains fitted to interior (base at y=87, within hex span 31–85 at that y)
  return (
    <svg
      width={size}
      height={Math.round(size * 100 / 116)}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Back center mountain — tallest, lightest teal */}
      <polygon points="58,17 85,87 31,87" fill={backMtn} />
      {/* Left mountain */}
      <polygon points="36,51 64,87 31,87" fill={sideMtn} />
      {/* Right mountain */}
      <polygon points="79,51 85,87 51,87" fill={sideMtn} />
      {/* Dark valley — front center wedge */}
      <polygon points="58,64 72,87 44,87" fill={valley} />
      {/* Hexagon border */}
      <polygon
        points={hex}
        stroke={hexBorder}
        strokeWidth="7"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
