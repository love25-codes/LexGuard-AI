import Navbar from "@/components/Navbar";

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.08),transparent_40%)]" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-20">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-5xl md:text-6xl font-black">
            Contract Scanner
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Upload contracts, policies, quotations, or legal text for adversarial AI analysis.
          </p>

        </div>

        {/* Upload Box */}
        <div className="rounded-3xl border border-emerald-500/20 bg-slate-950/60 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.08)]">

          <div className="border-2 border-dashed border-emerald-500/30 rounded-2xl p-14 text-center hover:border-emerald-400 transition-all duration-300 bg-emerald-500/5">

            <div className="flex flex-col items-center">

              {/* Upload Icon */}
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">

                <span className="text-4xl text-emerald-400">
                  ⬆
                </span>

              </div>

              {/* Text */}
              <h2 className="mt-8 text-2xl font-bold text-white">
                Drop Quasi-Legal Document
              </h2>

              <p className="mt-3 text-slate-400">
                PDF • DOCX • TXT
              </p>

              {/* Upload Button */}
              <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-black px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-[1.02]">

                Upload Document

              </button>

            </div>

          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10">

            <div className="h-px bg-slate-800 flex-1" />

            <span className="text-slate-500 text-sm">
              OR
            </span>

            <div className="h-px bg-slate-800 flex-1" />

          </div>

          {/* Text Area */}
          <div>

            <label className="block text-sm text-slate-400 mb-3">
              Paste Legal / Contract Text
            </label>

            <textarea
              placeholder="Paste contract clauses here..."
              className="w-full h-52 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
            />

          </div>

          {/* Analyze Button */}
          <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-black font-black tracking-wide py-5 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.35)] hover:scale-[1.01]">

            EXECUTE ADVERSARIAL AUDIT

          </button>

        </div>

      </section>

    </main>
  );
}