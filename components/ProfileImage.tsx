export function ProfileImage() {
  return (
    // Fixed aspect-ratio container per spec — swap src later, no layout shift
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
      {/* Placeholder gradient using brand colors — replaced when real photo is added */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1E4A7A] to-[#10192E]" />

      {/* Subtle pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, #1E9BE0 0%, transparent 50%), radial-gradient(circle at 70% 70%, #7C5CFC 0%, transparent 50%)",
        }}
      />

      {/* Initials placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-3xl font-bold text-white backdrop-blur-sm">
          GK
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-white">Gopal Kamath</div>
          <div className="mt-1 text-xs text-slate-300">Photo coming soon</div>
        </div>
      </div>
    </div>
  );
}
