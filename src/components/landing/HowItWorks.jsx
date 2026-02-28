import { UserCog, ClipboardList, Sparkles, Settings } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserCog,
    title: 'Create Your Profile',
    description: 'Configure your communication style, tone preferences, and client-specific guidelines so every message reflects your professional voice.',
    metric: 'Personalized tone',
  },
  {
    number: 2,
    icon: ClipboardList,
    title: 'Input Your Client & Invoice Data',
    description: 'Add your clients and invoices in minutes. Integrations with Wave, QuickBooks, Bonsai, and Stripe coming Q2 2026.',
    metric: 'Integrations Q2 2026',
  },
  {
    number: 3,
    icon: Sparkles,
    title: 'Smart Reminders Created',
    description: 'NudgePaid generates a follow-up schedule based on invoice due dates and client history. Adjust timing and messaging to fit each engagement.',
    metric: '3x faster than manual',
  },
  {
    number: 4,
    icon: Settings,
    title: 'Approve, Refine, or Automate',
    description: 'Review and approve each message before delivery, or configure trusted clients to run on fully automated follow-up sequences.',
    metric: 'Full control always',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          How It Works
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-16">
          Four steps from onboarding to collection — with full visibility and control at every stage.
        </p>

        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-neutral-200" />
                )}

                {/* Number badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald text-white flex items-center justify-center font-mono font-semibold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <Icon size={20} className="text-emerald" />
                    <h3 className="text-lg font-semibold text-neutral-900 tracking-[-0.015em]">
                      {step.title}
                    </h3>
                    <span className="inline-flex px-3 py-1 bg-emerald/10 text-emerald text-xs font-mono font-medium rounded-full">
                      {step.metric}
                    </span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
