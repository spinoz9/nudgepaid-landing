import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'How quickly can I get started?',
    answer: 'Setup takes under five minutes. Create your profile, import your client and invoice data, review the generated follow-up schedule, and choose between manual approval or automated delivery for each client.',
  },
  {
    question: 'Will my clients know I\'m using automation?',
    answer: 'No. Each message is generated to reflect your communication style, and you review and approve it before delivery. Emails are sent from invoice@invoice.nudgepaid.com, with an optional copy to your address.',
  },
  {
    question: 'What accounting platforms do you integrate with?',
    answer: 'Native integrations with Wave, QuickBooks, Bonsai, Stripe, and Xero are scheduled for Q2 2026. In the meantime, CSV import is supported for any accounting platform.',
  },
  {
    question: 'What security standards does NudgePaid meet?',
    answer: 'Your data is stored on Supabase infrastructure, which is SOC 2 Type II certified, and encrypted at rest using AES-256. Your client data stays private and secure.',
  },
  {
    question: 'How does the AI maintain my professional tone?',
    answer: 'During onboarding, you define your preferred tone, communication style, and any client-specific guidelines. NudgePaid uses those parameters to generate reminders that reflect your professional voice. Future releases will support per-client tone profiles and escalation-stage customization.',
  },
  {
    question: 'What happens after the free trial?',
    answer: 'After the trial, your subscription continues at $50/month, or $500/year with annual billing. All account data, client profiles, and active follow-up sequences carry over without interruption.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-neutral-900 mb-12 tracking-[-0.025em]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-neutral-200 rounded-xl bg-white">
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 flex justify-between items-center hover:bg-neutral-100 transition rounded-xl"
              >
                <h3 className="text-lg font-medium text-neutral-900 text-left">
                  {item.question}
                </h3>
                {expandedIndex === index ? (
                  <ChevronUp size={20} className="text-neutral-700/60 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={20} className="text-neutral-700/60 flex-shrink-0 ml-4" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
