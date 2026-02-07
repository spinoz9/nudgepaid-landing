import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const features = [
  'AI-powered follow-up generation',
  'Tone-matched to your voice',
  'Multi-client AR dashboard',
  'DSO & aging analytics',
  'Unlimited clients & invoices',
  'Email delivery & tracking',
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-neutral-700 mb-10">
          One plan. Everything included. Start free for 7 days — no credit card required.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className={`text-sm font-medium ${!annual ? 'text-neutral-900' : 'text-neutral-700/60'}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-12 h-6 rounded-full transition-colors ${annual ? 'bg-emerald' : 'bg-neutral-200'}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${annual ? 'translate-x-6' : ''}`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-neutral-900' : 'text-neutral-700/60'}`}>
            Annual
          </span>
          {annual && (
            <span className="text-xs font-mono font-medium text-emerald bg-emerald/10 px-2 py-1 rounded-full">
              Save $100
            </span>
          )}
        </div>

        {/* Pricing Card */}
        <div className="bg-neutral-100 border border-neutral-200 rounded-2xl p-10 text-center max-w-md mx-auto">
          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-neutral-900 font-mono tracking-[-0.025em]">
                ${annual ? '500' : '50'}
              </span>
              <span className="text-neutral-700/60 text-sm">
                /{annual ? 'year' : 'month'}
              </span>
            </div>
            {annual && (
              <p className="text-xs text-neutral-700/60 mt-2 font-mono">
                $41.67/mo — billed annually
              </p>
            )}
          </div>

          <div className="border-t border-neutral-200 pt-6 mb-8">
            <ul className="space-y-3 text-left">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                  <Check size={16} className="text-emerald mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#signup"
            className="block w-full px-8 py-4 bg-emerald text-white rounded-lg font-semibold text-lg hover:bg-emerald-warm transition inline-flex items-center gap-2 justify-center"
          >
            Start 7-Day Free Trial
            <ArrowRight size={20} />
          </a>
          <p className="text-xs text-neutral-700/60 mt-4 font-mono">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
