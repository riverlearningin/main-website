import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* Logo mark — sailboat/wave icon using brand colors */}
      <div
        className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl ${
          light
            ? "bg-white/15 backdrop-blur-sm"
            : "bg-gradient-to-br from-[#1E9BE0] to-[#7C5CFC]"
        }`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Sail */}
          <path d="M11 2L4 15h7V2z" fill="white" opacity="0.9" />
          {/* Second sail */}
          <path d="M11 5l6 10h-6V5z" fill="white" opacity="0.6" />
          {/* Wave / hull */}
          <path
            d="M2 17c2.5 2 5 2.5 9 2 4-.5 6.5-1 9-2"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-space text-[15px] font-700 tracking-tight ${
            light ? "text-white" : "text-[#1B2A4A]"
          }`}
          style={{ fontWeight: 700 }}
        >
          RIVER
        </span>
        <span
          className={`font-space text-[15px] font-700 tracking-tight ${
            light ? "text-[#1E9BE0]" : "text-[#1E9BE0]"
          }`}
          style={{ fontWeight: 700 }}
        >
          LEARNING
        </span>
      </div>
    </div>
  );
}
