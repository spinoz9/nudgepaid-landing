import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'How quickly can I get started?',
    answer: 'You can get set up in just a few minutes: create your profile with your tone and key guidelines, add your client and invoice data, review the generated follow\u2011up schedule, and then choose whether to approve each reminder or let trusted clients run on autopilot.',
  },
  {
    question: 'Will my clients know I\'m using automation?',
    answer: 'Your clients don\'t see "automation" in the background\u2014they see messages that match your voice. Each email is generated to reflect your communication style, you review and approve it before it\'s sent, and it\'s delivered from invoice@invoice.nudgepaid.com with your email copied if you choose.',
  },
  {
    question: 'What accounting platforms do you integrate with?',
    answer: 'Wave, QuickBooks, Bonsai, and Stripe, with Xero coming in Q2 2026. Manual CSV upload is also supported for any platform.',
  },
  {
    question: 'What security standards does NudgePaid meet?',
    answer: 'AES-256 encryption at rest and in transit, SOC 2 Type II certification, full GDPR and CCPA compliance. Your client data is treated with the same confidentiality as your engagements.',
  },
  {
    question: 'How does the AI maintain my professional tone?',
    answer: 'NudgePaid\'s AI uses the tone and special instructions you define during setup to build a writing style that reflects how you communicate. Future releases will add deeper adaptation by client and escalation stage, so reminders can adjust even more precisely to each relationship.',
  },
  {
    question: 'What happens after the free trial?',
    answer: 'After your 7-day free trial, you can continue at $50/month or save with the annual plan at $500/year. Your data, templates, and configurations are preserved — no disruption to active follow-up sequences.',
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
