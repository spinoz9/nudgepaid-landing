import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most people are up and running in under five minutes. Create your profile, add your clients and invoices, review the reminder schedule, and choose to approve each message or let it send on its own.',
  },
  {
    question: 'Will my clients know I\'m using automation?',
    answer: 'No. Your clients just see a normal email that sounds like you wrote it. You review and approve every message before it goes out. Emails are sent from invoice@invoice.nudgepaid.com, and you can choose to be copied.',
  },
  {
    question: 'What accounting platforms do you integrate with?',
    answer: 'We\'re building integrations with Wave, QuickBooks, Bonsai, Stripe, and Xero (coming Q2 2026). You can also upload a CSV from any platform.',
  },
  {
    question: 'What security standards does NudgePaid meet?',
    answer: 'Your data is stored on Supabase infrastructure, which is SOC 2 Type II certified, and encrypted at rest using AES-256. Your client data stays private and secure.',
  },
  {
    question: 'How does the AI maintain my professional tone?',
    answer: 'During setup, you tell us your tone and any special rules. The AI uses those to write reminders that sound like you. Future updates will let you fine-tune the tone for each client and situation.',
  },
  {
    question: 'What happens after the free trial?',
    answer: 'You can keep going at $50/month or save with the annual plan at $500/year. All your data and settings stay in place. Nothing gets interrupted.',
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
