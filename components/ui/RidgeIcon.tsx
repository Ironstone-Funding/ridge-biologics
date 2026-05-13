interface RidgeIconProps {
  size?: number;
  variant?: "default" | "light";
  className?: string;
}

export default function RidgeIcon({ size = 44, variant = "default", className = "" }: RidgeIconProps) {
  const isLight = variant === "light";

  const hexBorder  = isLight ? "rgba(255,255,255,0.75)" : "#284454";
  const backMtn    = isLight ? "#72c0d0" : "#5c9aaa";
  const sideMtn    = isLight ? "#50a0b0" : "#3d7a8a";
  const valley     = isLight ? "rgba(10,30,46,0.40)"   : "#284454";

  return (
    <svg
      width={size}
      height={Math.round(size * 1.15)}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Back center mountain — tallest, lightest teal */}
      <polygon points="50,16 84,80 16,80" fill={backMtn} />
      {/* Left mountain */}
      <polygon points="27,48 57,80 7,80"  fill={sideMtn} />
      {/* Right mountain */}
      <polygon points="73,48 93,80 43,80" fill={sideMtn} />
      {/* Dark valley — front center wedge */}
      <polygon points="50,61 68,80 32,80" fill={valley}  />
      {/* Hexagon border */}
      <polygon
        points="50,7 93,32 93,81 50,105 7,81 7,32"
        stroke={hexBorder}
        strokeWidth="7.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
