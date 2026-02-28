import { Clock, Brain, Briefcase, LayoutDashboard, TrendingUp, LineChart } from 'lucide-react';

const features = [
  {
    badge: 'Days Sales Outstanding Reduction',
    icon: Clock,
    title: 'Recover 10+ Days of Cash Flow',
    description: 'Smart reminders go out at the right time so clients pay faster across all your accounts.',
    outcome: 'Average across early adopters',
    coming: false,
  },
  {
    badge: 'Communications Control',
    icon: Brain,
    title: 'Keep Client Relationships Strong',
    description: 'Every reminder sounds like you wrote it, and can adapt can adapt in tone according to your preferences.',
    outcome: 'Tone-matched to your voice',
    coming: false,
  },
  {
    badge: 'Time Saved',
    icon: Briefcase,
    title: 'Save 3+ Hours Every Week',
    description: 'Stop chasing payments by hand. No more tracking invoices, writing follow-ups, or checking who paid.',
    outcome: '$450-$900/wk at executive rates',
    coming: false,
  },
  {
    badge: 'Multi-Client Visibility',
    icon: LayoutDashboard,
    title: 'Consolidated AR Management Across Your Client Portfolio',
    description: 'See who owes you, how long it\'s been, and what reminders have gone out for every client.',
    outcome: 'Payment status and history at a glance',
    coming: false,
  },
  {
    badge: 'Intelligent Reminder Scheduling',
    icon: TrendingUp,
    title: 'Reminders That Get Firmer Over Time',
    description: 'The longer an invoice is overdue, the more direct the reminders become. You stay in control of the tone.',
    outcome: 'Coming Q2 2026',
    coming: true,
  },
  {
    badge: 'Cash Flow',
    icon: LineChart,
    title: 'Know When You\'ll Get Paid',
    description: 'See when payments are likely to come in based on past patterns and how clients respond to reminders.',
    outcome: 'Coming Q3 2026',
    coming: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-neutral-100 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Measurable Business Outcomes
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          Every feature saves you time and helps you collect more money.
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
