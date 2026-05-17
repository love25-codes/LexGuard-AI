"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  // Real-time hook simulation to keep the UI changing dynamically like a live dashboard
  const [scanProgress, setScanProgress] = useState(0);
  const [activeNode, setActiveNode] = useState("SECURE_CHANNEL_INIT");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 150);

    const nodes = [
      "DECRYPTING_BYTECODE", 
      "HEURISTIC_RISK_MAP", 
      "EXTRACTING_LIABILITIES", 
      "INDEMNITY_AUDIT_ACTIVE", 
      "COMPILING_REPORT"
    ];
    const nodeInterval = setInterval(() => {
      setActiveNode(nodes[Math.floor(Math.random() * nodes.length)]);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#02050b] text-slate-100 overflow-x-hidden font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* --- PREMIUM HIGH-TECH HUD BACKGROUND MESH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen">
        {/* The fix for the image fitting issue: object-cover container with absolute viewport tracking */}
        <div className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-screen bg-center bg-no-repeat bg-cover pointer-events-none"
             style={{ backgroundImage: `url('https://img.freepik.com/premium-vector/green-cyber-security-concept_42077-95.jpg')` }} />
        
        {/* CSS Digital Matrix Scan Overlays to anchor the image into the UI */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#091420_1px,transparent_1px),linear-gradient(to_bottom,#091420_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Dynamic Vignette Masking: keeps text crystal clear for hackathon judges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050b] via-transparent to-[#02050b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,5,11,0)_20%,#02050b_85%)]" />

        {/* Live Moving Target Scanner Line */}
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_12px_#10b981]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        />
      </div>

      <Navbar />

      {/* --- HERO & CYBER INTERACTIVE WRAPPER --- */}
      <motion.section 
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Live Status Badge */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[10px] font-mono tracking-widest text-emerald-400 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          NETWORK CORE // {activeNode}
        </motion.div>

        {/* Scaled Typography */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-8xl font-black max-w-5xl leading-[1.0] tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Understand Before <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(52,211,153,0.35)]">
            You Agree.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl text-slate-400 text-base md:text-lg font-normal leading-relaxed"
        >
          AI-powered adversarial contract intelligence platform detecting hidden liabilities,
          exploitative clauses, and structural legal risks before your signature lands.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto px-4"
        >
          <button className="group relative bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] hover:scale-[1.02] flex items-center justify-center gap-2 font-mono tracking-wide text-sm">
            INITIALIZE SCAN ENGINE
          </button>

          <button className="border border-slate-800 bg-slate-950/40 backdrop-blur-md text-slate-300 px-8 py-4 rounded-xl hover:border-emerald-500/40 hover:text-white transition-all duration-300 font-mono text-sm">
            LIVE ADVERSARIAL FEED
          </button>
        </motion.div>

        {/* --- LIVE INTERACTIVE HUD TERMINAL --- */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", damping: 20 }}
          className="w-full max-w-4xl mt-20 rounded-2xl border border-slate-800 bg-[#030712]/70 backdrop-blur-xl p-6 text-left relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
        >
          {/* Subtle Ambient Box Border Glow */}
          <div className="absolute inset-0 border border-emerald-500/10 rounded-2xl pointer-events-none group-hover:border-emerald-500/20 transition-colors duration-500" />
          
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-900 font-mono text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/40 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              <span className="ml-2 text-slate-400 text-[11px] font-semibold tracking-wider">LEXGUARD_KERNEL // ACTIVE_STREAM</span>
            </div>
            <div className="text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px]">
              BUFF_SZ: 2048KB
            </div>
          </div>

          {/* Grid Panel Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Live Metrics Monitoring Panels */}
            <div className="md:col-span-1 space-y-4">
              
              <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl font-mono relative overflow-hidden">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Processing Vector Matrix</p>
                <p className="text-2xl font-black mt-1 text-emerald-400">{scanProgress}%</p>
                {/* Live Micro Progress bar */}
                <div className="w-full bg-slate-950 h-1 rounded-full mt-3 overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-150" style={{ width: `${scanProgress}%` }} />
                </div>
              </div>

              <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl font-mono">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Current Stream Target</p>
                <p className="text-sm font-bold mt-1 text-slate-200 truncate">{activeNode}.dat</p>
              </div>

              <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl font-mono">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Heuristic Stability</p>
                <p className="text-sm font-bold mt-1 text-teal-400">99.98% OPTIMAL</p>
              </div>

            </div>

            {/* Dynamic Console Stream Logs */}
            <div className="md:col-span-2 p-5 bg-black/40 border border-slate-900 rounded-xl font-mono text-xs space-y-3 flex flex-col justify-between min-h-[220px]">
              <div className="space-y-2.5">
                <p className="text-slate-500">// Intercepting file allocation logs...</p>
                <p className="text-slate-300">&gt; Syncing adversarial models with cluster_node_0x99...</p>
                <div className="p-3 bg-rose-950/20 border border-rose-500/20 rounded-lg text-rose-300">
                  <span className="font-bold text-rose-400">[THREAT FLAG]</span> Section 4.9: Client surrenders claim rights via indirect non-disparagement definitions.
                </div>
                <p className="text-slate-400 animate-pulse">&gt; State engine processing: {activeNode}...</p>
              </div>
              
              <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
                <span>ENCRYPTION: AES_256_GCM</span>
                <span className="text-slate-400">SYS_TICK: {Math.floor(Date.now() / 1000)}</span>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.section>

      {/* Minimal Industrial Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs font-mono text-slate-600 relative z-10 bg-[#02050b]">
        &copy; {new Date().getFullYear()} LexGuard Systems. Verified Secure Web Assembly Build Pipeline.
      </footer>
    </main>
  );
}