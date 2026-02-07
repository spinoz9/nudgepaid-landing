import { ShieldCheck, Lock, Eye } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'AES-256 Encryption',
    description: 'Data encrypted at rest and in transit. Bank-level security for every byte.',
  },
  {
    icon: Lock,
    title: 'SOC 2 Type II',
    description: 'Independently audited security controls. Compliance documentation available on request.',
  },
  {
    icon: Eye,
    title: 'GDPR & CCPA Compliant',
    description: 'Full data portability, right to deletion, and transparent data practices.',
  },
];

export default function SecurityCompliance() {
  return (
    <section className="py-24 px-6 bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Enterprise-Grade Security
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          Your client data deserves the same standard of care you bring to your engagements.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-8 rounded-xl border border-neutral-200 text-center">
                <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={24} className="text-emerald" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 border border-navy/20 rounded-full">
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
            <span className="text-neutral-900 text-sm font-mono tracking-[-0.015em]">
              Designed for Fractional Executives
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
