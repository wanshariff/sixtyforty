import React, { useState } from 'react';
import DiagnosisForm from './DiagnosisForm';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen,
  LayoutGrid, 
  Activity, 
  Users, 
  Zap,
  CheckCircle2,
  ChevronRight,
  Code2,
  LineChart,
  Smartphone,
  Target,
  Award,
  Layers
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-primary-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Logo.svg" alt="sixty/forty logo" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#philosophy" className="hover:text-zinc-50 transition-colors">Philosophy</a>
            <a href="#ecosystem" className="hover:text-zinc-50 transition-colors">Ecosystem</a>
            <a href="#stack" className="hover:text-zinc-50 transition-colors">Stack</a>
            <a href="#leadership" className="hover:text-zinc-50 transition-colors">Leadership</a>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 font-semibold text-sm hover:bg-primary-700 transition-colors rounded-2xl shadow-sm shadow-primary-600/20">
            Book Diagnostic <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} className="relative pt-40 pb-32 px-6 overflow-hidden bg-zinc-950">
        {/* Subtle grid background for the 'Architecture' feel in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Engineering Resonance
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 text-zinc-50">
            Predictable Scaling. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Unignorable</span> Creative.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
            Growth isn't guesswork. We engineer market dominance for ambitious brands using a strict formula: <strong className="text-zinc-50 font-medium">60% data-driven infrastructure</strong> and <strong className="text-zinc-50 font-medium">40% high-impact creative execution</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all rounded-2xl shadow-lg shadow-primary-600/20">
              Schedule Discovery <ArrowRight size={20} />
            </button>
            <a href="#work" className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950 text-zinc-50 px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all rounded-2xl shadow-sm">
              See Our Work
            </a>
          </div>
          
          {/* Logo Band */}
          <div className="mt-20 pt-10 border-t border-zinc-800/50 w-full">
            <p className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-8 text-center">Trusted by ambitious brands</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-2xl font-black tracking-tighter text-zinc-300">AURA<span className="text-primary-500">.</span></div>
              <div className="text-2xl font-bold tracking-widest text-zinc-300">KINETIC</div>
              <div className="text-2xl font-serif italic text-zinc-300">Vanguard</div>
              <div className="text-2xl font-light tracking-widest text-zinc-300">SYNTHESIS</div>
              <div className="text-2xl font-bold text-zinc-300">NEXUS</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="philosophy" className="py-24 px-6 border-t border-zinc-800 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-zinc-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">Our Core Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">Engineering Resonance.</h3>
            </div>
            <p className="text-zinc-400 max-w-md mt-6 md:mt-0 text-sm md:text-base">
              In a saturated digital landscape, attention is your most expensive asset. We build structured systems that guarantee your signal cuts through the static and converts at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* HCD */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-primary-600/50 hover:shadow-lg hover:shadow-primary-600/5 transition-all rounded-2xl">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-2xl border border-zinc-800 mb-6 group-hover:border-primary-600/30 transition-colors">
                <Users className="text-zinc-500 group-hover:text-primary-500 transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Frictionless User Journeys</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                We design digital experiences that feel intuitive. By anticipating user behavior and removing cognitive friction, we turn passive browsers into high-LTV brand advocates.
              </p>
            </div>
            
            {/* Octalysis */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-primary-600/50 hover:shadow-lg hover:shadow-primary-600/5 transition-all rounded-2xl">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-2xl border border-zinc-800 mb-6 group-hover:border-primary-600/30 transition-colors">
                <Activity className="text-zinc-500 group-hover:text-primary-500 transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Conversion Psychology</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                We don't just track clicks; we decode human behavior. Using principles of behavioral economics, we engineer the exact emotional triggers required to drive confident purchasing decisions.
              </p>
            </div>

            {/* Gestalt */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-primary-600/50 hover:shadow-lg hover:shadow-primary-600/5 transition-all rounded-2xl">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-2xl border border-zinc-800 mb-6 group-hover:border-primary-600/30 transition-colors">
                <LayoutGrid className="text-zinc-500 group-hover:text-primary-500 transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Cognitive Brand Authority</h4>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Our aesthetic approach ensures every pixel, font, and grid placement serves a specific purpose: establishing immediate, unquestionable trust with your market.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ecosystem / Pricing Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="ecosystem" className="py-24 px-6 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">The Ecosystem Packages</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-50">Holistic Growth Infrastructure</h3>
            <p className="text-zinc-400 text-lg">
              For brands looking for a holistic, outsourced growth department. We partner with you to build a self-sustaining loop of product excellence, viral influence, and aggressive ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Tier 1 */}
            <div className="flex flex-col p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Tier 1</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-zinc-50">The Foundation</h4>
                <p className="text-zinc-400 text-sm h-10">Early-stage ventures or legacy brands needing a digital reset.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-3xl font-bold tracking-tight mb-1 text-zinc-50">RM 15k - 25k</div>
                <div className="text-zinc-400 text-sm font-medium">One-time Project Fee</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Deep-Dive UX & Friction Audit', 'Conversion-Engineered Brand Identity', 'High-Performance Web Infrastructure', '60-Day Post-Launch Optimization'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-medium">
                    <CheckCircle2 className="text-zinc-700 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-zinc-800 text-zinc-50 hover:bg-zinc-950 transition-all font-semibold text-sm rounded-2xl">
                Discuss Tier 1
              </button>
            </div>

            {/* Tier 2 */}
            <div className="flex flex-col p-8 bg-zinc-900 border-2 border-primary-600 relative transform lg:-translate-y-4 shadow-2xl shadow-primary-600/10 rounded-2xl z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-orange-400"></div>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-2xl">
                Most Popular
              </div>
              <div className="mb-8 mt-2">
                <span className="text-xs font-bold tracking-widest text-primary-500 uppercase">Tier 2</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-zinc-50">The Momentum</h4>
                <p className="text-zinc-400 text-sm h-10">Established brands ready to scale users and optimize conversion.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-3xl font-bold tracking-tight mb-1 text-zinc-50">RM 8k - 15k</div>
                <div className="text-zinc-400 text-sm font-medium">Monthly Retainer</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Continuous Conversion Rate Optimization (CRO)', 'High-Velocity A/B Testing', 'Iterative UX/CX Enhancements', 'Bi-Weekly Strategic Growth Briefings'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <CheckCircle2 className="text-primary-500 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white transition-all font-semibold text-sm rounded-2xl shadow-md shadow-primary-600/20">
                Discuss Tier 2
              </button>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Tier 3</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-zinc-50">The Resonance</h4>
                <p className="text-zinc-400 text-sm h-10">Industry leaders looking to dominate their market category.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="text-3xl font-bold tracking-tight mb-1 text-zinc-50">RM 20k - 35k+</div>
                <div className="text-zinc-400 text-sm font-medium">Monthly + 2-5% Rev Share*</div>
                <div className="text-zinc-500 text-xs mt-1">*Applied strictly to net-new revenue generated directly from our deployed infrastructure.</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Integrated Fractional "Growth Pod"', 'End-to-End Campaign Architecture', 'Continuous Custom Feature Rollouts', 'Advanced Behavioral Analytics'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-medium">
                    <CheckCircle2 className="text-zinc-700 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-zinc-800 text-zinc-50 hover:bg-zinc-950 transition-all font-semibold text-sm rounded-2xl">
                Discuss Tier 3
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Case Studies */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="work" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-zinc-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">Featured Case Studies</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">Selling Transformations.</h3>
            </div>
            <p className="text-zinc-400 max-w-md mt-6 md:mt-0 text-sm md:text-base">
              We don't just build sites; we architect revenue engines. Here are data-backed wins from our recent ambitious partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all">
              <div className="h-64 bg-zinc-950 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary-600/5 group-hover:bg-transparent transition-colors"></div>
                 <div className="text-4xl font-bold text-zinc-800 transition-transform duration-500 group-hover:scale-110">Project Alpha</div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-zinc-50 mb-2">E-Commerce Conversion Overhaul</h4>
                <p className="text-zinc-400 mb-6">A complete breakdown and rebuild of a leaking sales funnel for a mid-market retailer. A frictionless UX design combined with a targeted micro-KOL campaign lowered CAC.</p>
                <div className="flex gap-4">
                  <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800"><div className="text-primary-500 font-bold">+142%</div><div className="text-xs text-zinc-500 uppercase tracking-wider">CVR</div></div>
                  <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800"><div className="text-primary-500 font-bold">-35%</div><div className="text-xs text-zinc-500 uppercase tracking-wider">CAC</div></div>
                </div>
              </div>
            </div>
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-primary-500/50 transition-all">
              <div className="h-64 bg-zinc-950 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary-600/5 group-hover:bg-transparent transition-colors"></div>
                 <div className="text-4xl font-bold text-zinc-800 transition-transform duration-500 group-hover:scale-110">Project Beta</div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-zinc-50 mb-2">SaaS Retention Architecture</h4>
                <p className="text-zinc-400 mb-6">Implementing behavioral gamification loops to drive intrinsic motivation for a SaaS platform.</p>
                <div className="flex gap-4">
                  <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800"><div className="text-primary-500 font-bold">+89%</div><div className="text-xs text-zinc-500 uppercase tracking-wider">LTV</div></div>
                  <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800"><div className="text-primary-500 font-bold">+210%</div><div className="text-xs text-zinc-500 uppercase tracking-wider">Time in App</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The 40% Sprint (Highlight Section) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} className="py-24 px-6 relative z-20">
        
        <div className="max-w-7xl mx-auto bg-primary-400 border border-primary-950 rounded-[2.5rem] p-8 md:p-16 text-primary-950 relative overflow-hidden shadow-2xl shadow-primary-900/10">
          
          {/* Concentric circle pattern from UI Colors image */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'repeating-radial-gradient(circle at 100% 0%, transparent 0, transparent 60px, var(--color-primary-950) 60px, var(--color-primary-950) 62px), repeating-radial-gradient(circle at 0% 100%, transparent 0, transparent 80px, var(--color-primary-950) 80px, var(--color-primary-950) 82px)' }}></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

          <div className="relative z-10 md:flex items-center justify-between gap-12">
            <div className="max-w-2xl mb-10 md:mb-0">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary-950/80 mb-3 flex items-center gap-2">
                <Zap size={16} fill="currentColor" /> The Unfair Advantage
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The 40% Sprint.</h3>
              <p className="text-primary-950/90 text-lg mb-6 leading-relaxed font-medium">
                Need immediate momentum? We deploy our team for a dedicated, high-velocity 14-day sprint to solve isolated growth bottlenecks. This isn't unadulterated risk—it's calculated asymmetry. While the creative execution is bold, every move is strictly governed by our 60% data framework to protect your brand equity.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-950 shrink-0 mt-1" size={18} />
                  <p className="text-primary-950/90 text-sm"><strong className="text-primary-950 font-bold">UX/UI Teardown & Rebuild:</strong> Rapid prototyping to fix a leaking sales funnel.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-950 shrink-0 mt-1" size={18} />
                  <p className="text-primary-950/90 text-sm"><strong className="text-primary-950 font-bold">Ad Creative Injection:</strong> 14 days to script, shoot, and launch a fresh batch of high-converting Meta/TikTok assets.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-950 shrink-0 mt-1" size={18} />
                  <p className="text-primary-950/90 text-sm"><strong className="text-primary-950 font-bold">Brand Identity Refresh:</strong> A rapid realignment of your visual positioning to match premium pricing.</p>
                </div>
              </div>
            </div>
            
            {/* White card overlapping the pattern like in the UI Colors image */}
            <div className="bg-white p-8 border border-zinc-200 shadow-2xl max-w-sm shrink-0 rounded-3xl relative top-0 md:top-4 text-zinc-950">
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-zinc-500">Exclusive Add-on</div>
              <div className="text-3xl font-bold mb-2">RM 5k - 10k</div>
              <div className="text-zinc-500 text-sm mb-6">/ 14-Day Sprint.</div>
              <button className="w-full py-4 bg-primary-600 text-white hover:bg-primary-700 transition-all font-bold text-sm rounded-2xl shadow-lg shadow-primary-600/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Workflow & Stack Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="stack" className="py-24 px-6 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">Our Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-zinc-50">Enterprise-Grade Infrastructure</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We don't rely on templated solutions. We build your growth engine using the same modern tech stack utilized by top-tier tech companies to ensure airtight security, lightning-fast speeds, and seamless scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl">
              <Smartphone className="text-primary-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Product & UX</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-50">Figma:</strong> High-Fidelity Prototyping</li>
                <li><strong className="text-zinc-50">React / Next.js:</strong> Web Architecture</li>
                <li><strong className="text-zinc-50">Shopify Plus:</strong> E-commerce Engines</li>
              </ul>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl">
              <LineChart className="text-primary-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Growth & Data</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-50">GA4 & Mixpanel:</strong> Behavioral Analytics</li>
                <li><strong className="text-zinc-50">HubSpot / Klaviyo:</strong> Retention Funnels</li>
                <li><strong className="text-zinc-50">Meta/Google Ads:</strong> Paid Acquisition</li>
              </ul>
            </div>
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl">
              <Users className="text-primary-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-zinc-50">Influence</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><strong className="text-zinc-50">Modash / HypeAuditor:</strong> KOL Vetting</li>
                <li><strong className="text-zinc-50">Notion:</strong> Campaign Management</li>
                <li><strong className="text-zinc-50">Native APIs:</strong> TikTok/IG Analytics</li>
              </ul>
            </div>
          </div>

          {/* Metrics That Matter */}
          <div className="bg-zinc-950 rounded-2xl text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-10">Metrics That Matter.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Layers className="text-primary-500 mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Product</h5>
                <p className="text-zinc-500 text-sm">Reduction in bounce rate, increase in Time-on-Page, and lowered Customer Effort Score (CES).</p>
              </div>
              <div>
                <Target className="text-primary-500 mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Marketing</h5>
                <p className="text-zinc-500 text-sm">Lowered Cost Per Acquisition (CPA), increased Conversion Rate (CVR), and extended LTV.</p>
              </div>
              <div>
                <Award className="text-primary-500 mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Influence</h5>
                <p className="text-zinc-500 text-sm">Engagement Rate vs. Industry Benchmark, Earned Media Value (EMV), and direct referral conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="leadership" className="py-24 px-6 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">The Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50 mb-4">The Minds Behind the Machine</h3>
            <p className="text-zinc-400 max-w-2xl text-lg">
              When you partner with sixty-forty, you aren't handed off to junior account managers. You get direct, strategic access to our founding partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zayn */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-zinc-500 border border-zinc-800">Z</div>
              <h4 className="text-xl font-bold text-zinc-50 mb-1">Zayn</h4>
              <div className="text-primary-500 text-sm font-bold mb-4 uppercase tracking-wider">Head of Strategic Marketing</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                The analytical engine. Zayn transforms digital environments and cultural moments into scalable, profitable growth loops.
              </p>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-zinc-300 mt-1">Conversion, Data Analytics, Growth Architecture</div>
            </div>

            {/* Wan */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-zinc-500 border border-zinc-800">W</div>
              <h4 className="text-xl font-bold text-zinc-50 mb-1">Wan</h4>
              <div className="text-primary-500 text-sm font-bold mb-4 uppercase tracking-wider">Head of Product & UX</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                The architect. Wan engineers the digital environments and interfaces, applying strict Gestalt principles and HCD logic.
              </p>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-zinc-300 mt-1">Interface Psychology, UI/UX, Structural Harmony</div>
            </div>

            {/* Effy */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-zinc-800 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-zinc-500 border border-zinc-800">E</div>
              <h4 className="text-xl font-bold text-zinc-50 mb-1">Effy</h4>
              <div className="text-primary-500 text-sm font-bold mb-4 uppercase tracking-wider">Head of Influence</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                The cultural bridge. Effy commands authentic voices and cultural moments, turning brand narrative into community resonance.
              </p>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-zinc-300 mt-1">KOL Strategy, Cultural Trends, Earned Media</div>
            </div>
          </div>
        </div>
      </motion.section>

      
      {/* Insights Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }} id="insights" className="py-24 px-6 bg-zinc-950 border-b border-zinc-800 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-zinc-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3 flex items-center gap-2"><BookOpen size={16} /> Thought Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">The Structural Harmony Blog.</h3>
            </div>
            <p className="text-zinc-400 max-w-md mt-6 md:mt-0 text-sm md:text-base">
              The science behind the design. We break down exactly how specific UI choices modify user behavior and drive enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary-500/50 transition-all cursor-pointer">
              <div className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-4">Behavioral Science</div>
              <h4 className="text-2xl font-bold text-zinc-50 mb-4 group-hover:text-primary-500 transition-colors">How Gestalt Principles Directly Increase Checkout Completion Rates</h4>
              <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">Applying the principles of proximity, similarity, and closure to eliminate cognitive friction at the point of sale. See why a unified visual structure transforms hesitant browsers into confident buyers.</p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-50 group-hover:text-primary-500 transition-colors">
                Read Deep-Dive <ArrowRight size={16} />
              </div>
            </div>

            <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary-500/50 transition-all cursor-pointer">
              <div className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-4">Systems Architecture</div>
              <h4 className="text-2xl font-bold text-zinc-50 mb-4 group-hover:text-primary-500 transition-colors">The 60/40 Ratio: Why Data Without Emotional Creative Fails</h4>
              <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">Infrastructure metrics can only take you so far. Explore the analytical necessity of 'wild' creative execution and how to measure the asymmetric ROI of cultural influence.</p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-50 group-hover:text-primary-500 transition-colors">
                Read Deep-Dive <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Diagnostic & Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto mb-24 bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-sm text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary-500 mb-3">The Resonance Discovery Call</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-zinc-50">
            Stop Competing. <br className="hidden md:block"/> Start Resonating.
          </h3>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            We don't pitch. We diagnose. Fill out the brief below to secure a discovery session. We will identify your current friction points, audit your funnel, and map out a custom growth architecture.
          </p>
          
          <DiagnosisForm />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 text-sm text-zinc-400">
          <div className="mb-4 md:mb-0">
            <img src="/Logo.svg" alt="sixty/forty logo" className="h-8 w-auto" />
          </div>
          <div className="flex gap-6 mb-4 md:mb-0 font-medium">
            <a href="mailto:hello@sixty-forty.com" className="hover:text-primary-500 transition-colors">hello@sixty-forty.com</a>
            <a href="#" className="hover:text-primary-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Instagram</a>
          </div>
          <div className="font-medium">© {new Date().getFullYear()} sixty/forty. Engineered for the future.</div>
        </div>
      </footer>
    </div>
  );
}
