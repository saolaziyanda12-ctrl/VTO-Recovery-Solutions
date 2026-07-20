export default function BrandPanel() {
  return (
    <section className="hidden lg:flex min-h-screen flex-col justify-between overflow-hidden rounded-r-[30px] bg-[radial-gradient(circle_at_top_left,_rgba(214,97,24,0.22),_transparent_24%),linear-gradient(135deg,_#0b2a43_0%,_#123a5a_45%,_#0d2740_100%)] px-8 py-8 text-white lg:px-10 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_20%),radial-gradient(circle_at_20%_80%,_rgba(214,97,24,0.16),_transparent_22%)]" />

      <div className="relative z-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D66118] text-lg font-bold shadow-lg shadow-[#D66118]/20">
          V
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            VTO Recovery Solutions
          </h2>
          <p className="mt-1 text-sm text-slate-200">
            Loan Collection Management
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-lg">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-100">
          Modern collections platform
        </div>
        <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Recover more,
          <br />
          faster with clarity
          <br />
          on every account.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-200">
          A modern collections workspace built for the team handling overdue personal loans with precision and confidence.
        </p>
      </div>

      <div className="relative z-10 rounded-[20px] border border-white/15 bg-white/10 p-4 shadow-[0_10px_35px_-16px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <p className="text-sm font-medium text-slate-100">
          Trusted by teams who need visibility, accountability, and speed.
        </p>
        <p className="mt-2 text-sm text-slate-300">
          © 2026 VTO Recovery Solutions
        </p>
      </div>
    </section>
  );
}