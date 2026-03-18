import React, { useState } from 'react';
import { 
  ArrowRight, 
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#FF6A00] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-1">
            sixty<span className="text-slate-300">/</span>forty
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#philosophy" className="hover:text-slate-900 transition-colors">Philosophy</a>
            <a href="#ecosystem" className="hover:text-slate-900 transition-colors">Ecosystem</a>
            <a href="#stack" className="hover:text-slate-900 transition-colors">Stack</a>
            <a href="#leadership" className="hover:text-slate-900 transition-colors">Leadership</a>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-[#FF6A00] text-white px-5 py-2.5 font-semibold text-sm hover:bg-[#E55F00] transition-colors rounded-sm shadow-sm shadow-[#FF6A00]/20">
            Book Diagnostic <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
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
      <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-slate-50">
        {/* Subtle grid background for the 'Architecture' feel in light mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium tracking-widest uppercase text-slate-500 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse"></span>
            Engineering Resonance
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 text-slate-900">
            The Intersection of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">Logic, Emotion,</span> and Growth.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
            We are a multidisciplinary agency built on a powerful ratio: <strong className="text-slate-900 font-medium">60% data-driven strategy</strong> and product architecture, <strong className="text-slate-900 font-medium">40% bold creative execution</strong> and human connection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#FF6A00] hover:bg-[#E55F00] text-white px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all rounded-sm shadow-lg shadow-[#FF6A00]/20">
              Schedule Discovery <ArrowRight size={20} />
            </button>
            <button className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all rounded-sm shadow-sm">
              View Our Stack
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 border-t border-slate-200 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-slate-100 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6A00] mb-3">Our Core Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Engineering Resonance.</h3>
            </div>
            <p className="text-slate-500 max-w-md mt-6 md:mt-0 text-sm md:text-base">
              Every digital touchpoint is a calculated intersection of structural harmony and psychological motivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* HCD */}
            <div className="group p-8 bg-slate-50 border border-slate-200 hover:border-[#FF6A00]/50 hover:shadow-lg hover:shadow-[#FF6A00]/5 transition-all rounded-sm">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm border border-slate-200 mb-6 group-hover:border-[#FF6A00]/30 transition-colors">
                <Users className="text-slate-400 group-hover:text-[#FF6A00] transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Human-Centered Design</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                We build with deep empathy. Every digital touchpoint is designed around the user's actual pain points, motivations, and psychological needs, ensuring the product feels inherently valuable.
              </p>
            </div>
            
            {/* Octalysis */}
            <div className="group p-8 bg-slate-50 border border-slate-200 hover:border-[#FF6A00]/50 hover:shadow-lg hover:shadow-[#FF6A00]/5 transition-all rounded-sm">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm border border-slate-200 mb-6 group-hover:border-[#FF6A00]/30 transition-colors">
                <Activity className="text-slate-400 group-hover:text-[#FF6A00] transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Behavioral Gamification</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                We map user journeys using the 8 Core Drives of human motivation. This turns passive scrolling into active engagement, loyalty, and intrinsic drive.
              </p>
            </div>

            {/* Gestalt */}
            <div className="group p-8 bg-slate-50 border border-slate-200 hover:border-[#FF6A00]/50 hover:shadow-lg hover:shadow-[#FF6A00]/5 transition-all rounded-sm">
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm border border-slate-200 mb-6 group-hover:border-[#FF6A00]/30 transition-colors">
                <LayoutGrid className="text-slate-400 group-hover:text-[#FF6A00] transition-colors" size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">Gestalt Principles</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Visuals dictate trust. We apply strict laws of visual hierarchy, cognitive load reduction, and structural harmony to ensure your brand commands absolute authority instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem / Pricing Section */}
      <section id="ecosystem" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6A00] mb-3">The Ecosystem Packages</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">Holistic Growth Infrastructure</h3>
            <p className="text-slate-600 text-lg">
              For brands looking for a holistic, outsourced growth department. We partner with you to build a self-sustaining loop of product excellence, viral influence, and aggressive ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Tier 1 */}
            <div className="flex flex-col p-8 bg-white border border-slate-200 rounded-sm shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Tier 1</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-slate-900">The Foundation</h4>
                <p className="text-slate-500 text-sm h-10">Early-stage ventures or legacy brands needing a digital reset.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-slate-100">
                <div className="text-3xl font-bold tracking-tight mb-1 text-slate-900">RM 15k - 25k</div>
                <div className="text-slate-500 text-sm font-medium">One-time Project Fee</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Complete MVP UI/UX', 'Web Architecture Build', 'Foundational Marketing Funnel', '3-5 Niche Micro-KOL activations'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-semibold text-sm rounded-sm">
                Discuss Tier 1
              </button>
            </div>

            {/* Tier 2 */}
            <div className="flex flex-col p-8 bg-white border-2 border-[#FF6A00] relative transform lg:-translate-y-4 shadow-2xl shadow-[#FF6A00]/10 rounded-sm z-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6A00] to-orange-400"></div>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6A00] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                Most Popular
              </div>
              <div className="mb-8 mt-2">
                <span className="text-xs font-bold tracking-widest text-[#FF6A00] uppercase">Tier 2</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-slate-900">The Momentum</h4>
                <p className="text-slate-500 text-sm h-10">Established brands ready to scale users and optimize conversion.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-slate-100">
                <div className="text-3xl font-bold tracking-tight mb-1 text-slate-900">RM 8k - 15k</div>
                <div className="text-slate-500 text-sm font-medium">Monthly Retainer</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Ongoing CRO/UI testing', 'Active Ads Management', 'Gamified Journey Optimization', 'Mid-Tier KOL UGC streams', 'Data Dashboarding'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="text-[#FF6A00] shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#FF6A00] hover:bg-[#E55F00] text-white transition-all font-semibold text-sm rounded-sm shadow-md shadow-[#FF6A00]/20">
                Discuss Tier 2
              </button>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col p-8 bg-white border border-slate-200 rounded-sm shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Tier 3</span>
                <h4 className="text-2xl font-bold mt-2 mb-2 text-slate-900">The Resonance</h4>
                <p className="text-slate-500 text-sm h-10">Industry leaders looking to dominate their market category.</p>
              </div>
              <div className="mb-8 pb-8 border-b border-slate-100">
                <div className="text-3xl font-bold tracking-tight mb-1 text-slate-900">RM 20k - 35k+</div>
                <div className="text-slate-500 text-sm font-medium">Monthly + 2-5% Rev Share</div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Enterprise Product Design iteration', 'Omnichannel Dominance', 'Macro-KOL/Celebrity Partnerships', 'Custom Feature Development'].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="text-slate-300 shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-semibold text-sm rounded-sm">
                Discuss Tier 3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 40% Sprint (Highlight Section) */}
      <section className="py-24 px-6 bg-[#FF6A00] text-white relative overflow-hidden">
        {/* Abstract shape for the "40% bold creative" feel */}
        <div className="absolute -right-20 -top-40 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute -left-20 -bottom-40 w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 md:flex items-center justify-between gap-12">
          <div className="max-w-2xl mb-10 md:mb-0">
            <h2 className="text-sm font-bold tracking-widest uppercase text-white/80 mb-3 flex items-center gap-2">
              <Zap size={16} fill="currentColor" /> The Unfair Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The 40% Sprint.</h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Once a quarter, we dedicate a 2-week sprint entirely to wild-card, high-upside experimentation. A guerilla marketing stunt, a radical web feature, or a viral challenge.
            </p>
            <p className="text-white font-semibold">
              Pure, unadulterated creative risk designed to break the mold.
            </p>
          </div>
          <div className="bg-white/10 p-8 border border-white/20 backdrop-blur-md max-w-sm shrink-0 rounded-sm">
            <div className="text-xs font-bold tracking-widest uppercase mb-4 text-white/80">Exclusive Add-on</div>
            <div className="text-3xl font-bold mb-2">RM 5k - 10k</div>
            <div className="text-white/80 text-sm mb-6">per sprint, billed only upon pitch approval.</div>
            <button className="w-full py-3 bg-white text-[#FF6A00] hover:bg-slate-50 transition-all font-bold text-sm rounded-sm shadow-lg shadow-black/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Workflow & Stack Section */}
      <section id="stack" className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6A00] mb-3">Our Infrastructure</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">The Technology of Resonance</h3>
            <p className="text-slate-600">
              We don't guess. We utilize an elite stack to ensure your digital product is fast, your data is accurate, and your campaigns are scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-sm">
              <Smartphone className="text-[#FF6A00] mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Product & UX</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong className="text-slate-900">Figma:</strong> High-Fidelity Prototyping</li>
                <li><strong className="text-slate-900">React / Next.js:</strong> Web Architecture</li>
                <li><strong className="text-slate-900">Shopify Plus:</strong> E-commerce Engines</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-sm">
              <LineChart className="text-[#FF6A00] mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Growth & Data</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong className="text-slate-900">GA4 & Mixpanel:</strong> Behavioral Analytics</li>
                <li><strong className="text-slate-900">HubSpot / Klaviyo:</strong> Retention Funnels</li>
                <li><strong className="text-slate-900">Meta/Google Ads:</strong> Paid Acquisition</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-sm">
              <Users className="text-[#FF6A00] mb-4" size={32} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Influence</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><strong className="text-slate-900">Modash / HypeAuditor:</strong> KOL Vetting</li>
                <li><strong className="text-slate-900">Notion:</strong> Campaign Management</li>
                <li><strong className="text-slate-900">Native APIs:</strong> TikTok/IG Analytics</li>
              </ul>
            </div>
          </div>

          {/* Metrics That Matter */}
          <div className="bg-slate-900 rounded-sm text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-10">Metrics That Matter.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Layers className="text-[#FF6A00] mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Product</h5>
                <p className="text-slate-400 text-sm">Reduction in bounce rate, increase in Time-on-Page, and lowered Customer Effort Score (CES).</p>
              </div>
              <div>
                <Target className="text-[#FF6A00] mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Marketing</h5>
                <p className="text-slate-400 text-sm">Lowered Cost Per Acquisition (CPA), increased Conversion Rate (CVR), and extended LTV.</p>
              </div>
              <div>
                <Award className="text-[#FF6A00] mb-3" size={24} />
                <h5 className="font-bold text-lg mb-2">For Influence</h5>
                <p className="text-slate-400 text-sm">Engagement Rate vs. Industry Benchmark, Earned Media Value (EMV), and direct referral conversions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6A00] mb-3">The Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Minds Behind the Machine</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zayn */}
            <div className="bg-white border border-slate-200 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-slate-400 border border-slate-200">Z</div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Zayn</h4>
              <div className="text-[#FF6A00] text-sm font-bold mb-4 uppercase tracking-wider">Head of Strategic Marketing</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The analytical engine. Zayn transforms digital environments and cultural moments into scalable, profitable growth loops.
              </p>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-slate-700 mt-1">Conversion, Data Analytics, Growth Architecture</div>
            </div>

            {/* Wan */}
            <div className="bg-white border border-slate-200 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-slate-400 border border-slate-200">W</div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Wan</h4>
              <div className="text-[#FF6A00] text-sm font-bold mb-4 uppercase tracking-wider">Head of Product & UX</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The architect. Wan engineers the digital environments and interfaces, applying strict Gestalt principles and HCD logic.
              </p>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-slate-700 mt-1">Interface Psychology, UI/UX, Structural Harmony</div>
            </div>

            {/* Effy */}
            <div className="bg-white border border-slate-200 p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full mb-6 flex items-center justify-center text-xl font-bold text-slate-400 border border-slate-200">E</div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Effy</h4>
              <div className="text-[#FF6A00] text-sm font-bold mb-4 uppercase tracking-wider">Head of Influence</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The cultural bridge. Effy commands authentic voices and cultural moments, turning brand narrative into community resonance.
              </p>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Expertise:</div>
              <div className="text-sm text-slate-700 mt-1">KOL Strategy, Cultural Trends, Earned Media</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic & Footer */}
      <footer className="bg-white border-t border-slate-200 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto mb-24 bg-slate-50 border border-slate-200 rounded-sm p-8 md:p-12 shadow-sm text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#FF6A00] mb-3">The Resonance Discovery Call</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-slate-900">
            Stop Competing. <br className="hidden md:block"/> Start Resonating.
          </h3>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            We don't pitch; we diagnose. In this 45-minute strategic deep dive, we will identify your UX friction points, audit your marketing loops, and map the cultural whitespace your brand should be owning.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Work Email</label>
              <input 
                type="email" 
                placeholder="hello@yourcompany.com" 
                className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-sm focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Biggest Friction Point</label>
              <select className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3 rounded-sm focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all appearance-none">
                <option>Low Conversion Rates</option>
                <option>High Customer Acquisition Cost</option>
                <option>Weak Brand / Cultural Relevance</option>
                <option>Need a Complete Digital Reset</option>
              </select>
            </div>
            <button type="button" className="w-full bg-[#FF6A00] hover:bg-[#E55F00] text-white px-8 py-4 mt-2 font-bold text-lg flex items-center justify-center gap-2 transition-all rounded-sm shadow-md shadow-[#FF6A00]/20">
              Schedule Deep Dive <ChevronRight size={20} />
            </button>
          </form>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-sm text-slate-500">
          <div className="font-bold tracking-tighter mb-4 md:mb-0 text-slate-900 text-lg">
            sixty<span className="text-slate-300">/</span>forty
          </div>
          <div className="flex gap-6 mb-4 md:mb-0 font-medium">
            <a href="mailto:hello@sixty-forty.com" className="hover:text-[#FF6A00] transition-colors">hello@sixty-forty.com</a>
            <a href="#" className="hover:text-[#FF6A00] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#FF6A00] transition-colors">Instagram</a>
          </div>
          <div className="font-medium">© {new Date().getFullYear()} sixty/forty. Engineered for the future.</div>
        </div>
      </footer>
    </div>
  );
}
