import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-14 w-auto", showText = true, light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "#1e2259";
  const textColor = light ? "#FFFFFF" : "#1e2259";
  const subTextColor = light ? "#94A3B8" : "#5a6080";

  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Graduation Cap */}
        <path
          d="M80 15 L125 35 L80 55 L35 35 Z"
          fill={primaryColor}
        />
        <path
          d="M58 45 V56 C58 64, 102 64, 102 56 V45"
          fill={primaryColor}
        />
        <path
          d="M110 38 L118 52 V64"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="118" cy="65" r="2.5" fill={primaryColor} />

        {/* Concentric Arcs */}
        <path
          d="M32 94 C32 60, 128 60, 128 94"
          stroke={primaryColor}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M44 94 C44 71, 116 71, 116 94"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Letter "S" (Sky Blue — from logo) */}
        <path
          d="M62 90 C56 90, 52 94, 52 99 C52 106, 68 104, 68 111 C68 116, 62 120, 56 120 C50 120, 48 116, 48 114"
          stroke="#009edb"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Letter "G" (Green — from logo) */}
        <path
          d="M98 100 C98 94, 92 90, 84 90 C76 90, 72 96, 72 105 C72 114, 76 120, 84 120 C92 120, 96 114, 96 108 H84"
          stroke="#108b4b"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Divider bar (Green) */}
        <line
          x1="30"
          y1="130"
          x2="130"
          y2="130"
          stroke="#108b4b"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className="font-serif font-black tracking-tight text-[22px] leading-none uppercase"
            style={{ color: textColor }}
          >
            SUMMIT GLOBAL
          </span>
          <span
            className="text-[10px] tracking-[0.5px] uppercase font-bold mt-1"
            style={{ color: subTextColor }}
          >
            Trusted Partner for India & Abroad
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
