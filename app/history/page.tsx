import Navbar from "@/components/Navbar";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-20">

        <h1 className="text-5xl font-black">
          Audit History
        </h1>

        <p className="text-slate-400 mt-3">
          Previous contract scans and reports.
        </p>

      </div>

    </main>
  );
}