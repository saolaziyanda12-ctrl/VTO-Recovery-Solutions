export default function LoginForm() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(214,97,24,0.08),_transparent_28%),linear-gradient(135deg,_#f7f9fc_0%,_#eef3f8_100%)] px-6 py-10 sm:px-8 lg:px-10">
      <div className="w-full max-w-2xl rounded-[30px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-20px_rgba(11,42,67,0.35)] backdrop-blur sm:p-10 lg:p-12">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1E4F7A]/10 text-[#1E4F7A]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.2-2.7 7.9-7 9-4.3-1.1-7-4.8-7-9V7l7-4z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1E4F7A]">
              Secure access
            </p>
            <p className="text-sm text-slate-500">
              Welcome back to your collections workspace
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Welcome back
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Sign in to continue managing accounts, calls, and payments with confidence.
        </p>

        <form className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Username
            </label>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition duration-200 focus-within:border-[#1E4F7A] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM5 20a7 7 0 0114 0" />
              </svg>
              <input
                type="text"
                placeholder="Enter username"
                className="ml-3 h-12 w-full border-none bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                Password
              </label>
              <button
                type="button"
                className="text-sm font-semibold text-[#1E4F7A] transition hover:text-[#173f63] hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition duration-200 focus-within:border-[#1E4F7A] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path strokeLinecap="round" d="M8 10V8a4 4 0 118 0v2" />
              </svg>
              <input
                type="password"
                placeholder="Enter password"
                className="ml-3 h-12 w-full border-none bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <label className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <input type="checkbox" className="h-5 w-5 rounded border-slate-300 accent-[#1E4F7A]" />
              Remember me on this device
            </label>
            <span className="text-sm text-slate-400">Secure session</span>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-2xl bg-[#1E4F7A] text-lg font-semibold text-white shadow-lg shadow-[#1E4F7A]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#173f63]"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-slate-500">
            Trouble signing in? Contact your administrator or{" "}
            <button type="button" className="font-semibold text-[#1E4F7A] transition hover:underline">
              skip to demo
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}
