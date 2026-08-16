import React from "react";

interface WonderscoreLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export function WonderscoreLogo({ size = 32, color = "#15463b", className = "" }: WonderscoreLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1 C12.6 6.7 17.3 11.4 23 12 C17.3 12.6 12.6 17.3 12 23 C11.4 17.3 6.7 12.6 1 12 C6.7 11.4 11.4 6.7 12 1 Z" />
    </svg>
  );
}
