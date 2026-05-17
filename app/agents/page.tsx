import Navbar from "@/components/Navbar";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-20">

        <h1 className="text-5xl font-black">
          Multi-Agent Terminal
        </h1>

        <p className="text-slate-400 mt-3">
          Live adversarial AI agent orchestration.
        </p>

      </div>

    </main>
  );
}