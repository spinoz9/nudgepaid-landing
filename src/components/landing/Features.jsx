import { Clock, Brain, Briefcase, LayoutDashboard, TrendingUp, LineChart } from 'lucide-react';

const features = [
  {
    badge: 'DSO Reduction',
    icon: Clock,
    title: 'Reduce DSO by 10+ Days',
    description: 'Automated, intelligently timed reminders accelerate payment cycles across your entire client portfolio.',
    outcome: 'Average across early adopters',
    coming: false,
  },
  {
    badge: 'Relationship Intelligence',
    icon: Brain,
    title: 'Preserve Client Relationships',
    description: 'AI-generated emails mirror your communication style and tone. No client ever feels "auto-nudged."',
    outcome: 'Tone-matched to your voice',
    coming: false,
  },
  {
    badge: 'Time Recovery',
    icon: Briefcase,
    title: 'Reclaim 3+ Hours Weekly',
    description: 'Eliminate manual invoice tracking, follow-up drafting, and payment status checking across clients.',
    outcome: '$450-$900/wk at executive rates',
    coming: false,
  },
  {
    badge: 'Multi-Client Visibility',
    icon: LayoutDashboard,
    title: 'Unified AR Dashboard',
    description: 'See payment status, aging, and follow-up history for every client engagement in one view.',
    outcome: 'DSO, AR aging, and payment performance at a glance',
    coming: false,
  },
  {
    badge: 'Adaptive Escalation',
    icon: TrendingUp,
    title: 'Smart Escalation Sequences',
    description: 'Progressively adjust tone and frequency based on how overdue an invoice is and your relationship depth.',
    outcome: 'Escalation protocol coming in Q2 2026',
    coming: true,
  },
  {
    badge: 'Revenue Analytics',
    icon: LineChart,
    title: 'Cash Flow Forecasting',
    description: 'Predict when payments will arrive based on historical patterns and current follow-up engagement.',
    outcome: 'Coming Q3 2026',
    coming: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-neutral-100 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Business Outcomes, Not Features
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          Every capability translates directly to recovered revenue and recaptured time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-emerald/30 hover:shadow-md transition-all"
              >
                <span
                  className={`inline-block px-3 py-1 text-xs font-mono font-medium rounded-full mb-4 ${
                    feature.coming
                      ? 'bg-neutral-100 text-neutral-700'
                      : 'bg-emerald/10 text-emerald'
                  }`}
                >
                  {feature.badge}
                </span>
                <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-emerald" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-[-0.015em]">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="text-xs text-neutral-700/60 font-mono">
                  {feature.outcome}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
