import { useState, useMemo } from 'react';

const sliderConfig = [
  {
    key: 'clientEngagements',
    label: 'Active Client Engagements',
    min: 1,
    max: 30,
    step: 1,
    format: (v) => v,
  },
  {
    key: 'monthlyBillings',
    label: 'Monthly Billings',
    min: 5000,
    max: 200000,
    step: 5000,
    format: (v) => `$${v.toLocaleString()}`,
  },
  {
    key: 'currentDSO',
    label: 'Current DSO (Days)',
    min: 15,
    max: 90,
    step: 1,
    format: (v) => `${v} days`,
  },
  {
    key: 'hourlyRate',
    label: 'Hourly Rate',
    min: 100,
    max: 1000,
    step: 25,
    format: (v) => `$${v}/hr`,
  },
];

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    clientEngagements: 8,
    monthlyBillings: 25000,
    currentDSO: 45,
    hourlyRate: 300,
  });

  const outputs = useMemo(() => {
    const { clientEngagements, monthlyBillings, currentDSO, hourlyRate } = inputs;

    const dsoReduction = Math.min(20, Math.max(7, Math.round(currentDSO * 0.25)));
    const dailyBillings = monthlyBillings / 30;
    const cashFlowAccelerated = Math.round(dailyBillings * dsoReduction);

    const weeklyHoursSaved = Math.round((2 + Math.max(0, clientEngagements - 3) * 0.25) * 10) / 10;
    const monthlyRevenueRecovered = Math.round(weeklyHoursSaved * hourlyRate * 4.33);

    const annualRevenueRecovered = monthlyRevenueRecovered * 12;
    const annualCost = 50 * 12;
    const roi = Math.round(((annualRevenueRecovered - annualCost) / annualCost) * 100);

    return {
      dsoReduction,
      cashFlowAccelerated,
      weeklyHoursSaved,
      monthlyRevenueRecovered,
      roi,
    };
  }, [inputs]);

  const handleChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: Number(value) }));
  };

  return (
    <section id="roi-calculator" className="py-24 px-6 bg-neutral-100 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Calculate Your ROI
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          See how NudgePaid impacts your practice based on your actual numbers.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sliders */}
          <div className="space-y-8">
            {sliderConfig.map((slider) => (
              <div key={slider.key}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-neutral-900 tracking-[-0.015em]">
                    {slider.label}
                  </label>
                  <span className="font-mono text-sm text-emerald font-semibold">
                    {slider.format(inputs[slider.key])}
                  </span>
                </div>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={inputs[slider.key]}
                  onChange={(e) => handleChange(slider.key, e.target.value)}
                  className="w-full roi-slider"
                />
                <div className="flex justify-between text-xs text-neutral-700/60 mt-1 font-mono">
                  <span>{slider.format(slider.min)}</span>
                  <span>{slider.format(slider.max)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="bg-navy rounded-xl p-8">
            <h3 className="text-neutral-200/60 text-xs font-mono uppercase tracking-widest mb-6">
              Your Projected Impact
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald font-mono">
                  {outputs.dsoReduction}
                </div>
                <div className="text-sm text-neutral-200 mt-1">Days DSO Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">
                  ${outputs.cashFlowAccelerated.toLocaleString()}
                </div>
                <div className="text-sm text-neutral-200 mt-1">Cash Flow Accelerated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">
                  {outputs.weeklyHoursSaved}
                </div>
                <div className="text-sm text-neutral-200 mt-1">Hours Saved / Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald font-mono">
                  ${outputs.monthlyRevenueRecovered.toLocaleString()}
                </div>
                <div className="text-sm text-neutral-200 mt-1">Monthly Revenue Recovered</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-700/30">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-neutral-200/60 font-mono uppercase">Annual ROI</div>
                  <div className="text-4xl font-bold text-emerald font-mono">
                    {outputs.roi.toLocaleString()}%
                  </div>
                </div>
                <a
                  href="#signup"
                  className="px-6 py-3 bg-emerald text-white rounded-lg font-semibold hover:bg-emerald-warm transition text-sm"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
