import React, { useState } from 'react';
import { ChevronRight, ArrowRight, TrendingDown, Zap } from 'lucide-react';

export default function DiagnosisForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    traffic: '',
    conversionRate: '',
    frictionPoint: 'UX/Product friction'
  });

  const [lostRevenue, setLostRevenue] = useState(0);

  const handleNext = () => {
    if (step === 2) {
      calculateLostRevenue();
    }
    setStep(step + 1);
  };

  const calculateLostRevenue = () => {
    const traffic = Number(formData.traffic) || 0;
    const cvr = Number(formData.conversionRate) || 0;
    // Assuming $100 Average Order Value for calculation
    const currentRevenue = traffic * (cvr / 100) * 100;
    // Assume industry benchmark is 3%
    const optimalRevenue = traffic * (0.03) * 100;
    const lost = Math.max(0, optimalRevenue - currentRevenue);
    setLostRevenue(lost);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-700 p-6 md:p-8 rounded-3xl text-left shadow-2xl relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
        <div 
          className="h-full bg-primary-600 transition-all duration-500" 
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      {step === 1 && (
        <div className="space-y-4 mt-2">
          <div className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Phase 01: Identification</div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Jane Doe" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Work Email</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="jane@company.com" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Company Website</label>
            <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://company.com" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all" />
          </div>
          <button type="button" onClick={handleNext} className="w-full bg-zinc-50 hover:bg-zinc-200 text-zinc-950 px-8 py-3 mt-4 font-bold flex items-center justify-center gap-2 rounded-2xl transition-all">
            Next Step <ArrowRight size={18} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 mt-2">
          <div className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Phase 02: Baseline Metrics</div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Avg. Monthly Traffic</label>
            <input name="traffic" value={formData.traffic} onChange={handleChange} type="number" placeholder="50000" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Current Conversion Rate (%)</label>
            <input name="conversionRate" value={formData.conversionRate} onChange={handleChange} type="number" step="0.1" placeholder="1.2" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Primary Bottleneck</label>
            <select name="frictionPoint" value={formData.frictionPoint} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-800 text-zinc-50 px-4 py-3 rounded-2xl focus:outline-none focus:border-primary-600 transition-all appearance-none">
              <option>UX/Product friction</option>
              <option>High CAC/Creative fatigue</option>
              <option>Complete brand/tech overhaul</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button type="button" onClick={() => setStep(1)} className="px-4 py-3 bg-zinc-800 text-zinc-300 font-bold rounded-2xl transition-all">Back</button>
            <button type="button" onClick={handleNext} className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 font-bold flex items-center justify-center gap-2 rounded-2xl shadow-md shadow-primary-600/20 transition-all">
              Calculate Friction <Zap size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 mt-2 text-center">
          <div className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-2">Phase 03: The Diagnosis</div>
          
          <div className="bg-zinc-950 border border-red-900/30 p-6 rounded-2xl">
            <TrendingDown className="text-red-500 mx-auto mb-3" size={32} />
            <div className="text-sm text-zinc-400 mb-1">Estimated Monthly Lost Revenue</div>
            <div className="text-3xl font-black text-white">
              {lostRevenue > 0 ? `$${lostRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : 'Analyzing...'}
            </div>
            <div className="text-xs text-zinc-500 mt-2">*Based on optimizing your {formData.conversionRate}% CVR to industry standard 3.0% at $100 AOV.</div>
          </div>

          <p className="text-sm text-zinc-300 text-left">
            Your current conversion friction is burning through your acquisition budget. Let's fix the architecture.
          </p>

          <button type="button" className="w-full bg-zinc-50 hover:bg-zinc-200 text-zinc-950 px-8 py-4 font-bold text-lg flex items-center justify-center gap-2 rounded-2xl transition-all">
            Secure Discovery Session <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
