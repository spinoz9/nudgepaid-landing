import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-navy">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-6 tracking-[-0.025em]">
          Ready to Reclaim Your Billable Hours?
        </h2>
        <p className="text-lg text-neutral-200 mb-10 leading-relaxed">
          Join fractional executives who've automated their receivables management.
          Schedule a 15-minute strategy session.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.nudgepaid.com/sign-up"
            className="px-8 py-4 bg-emerald text-white rounded-lg font-semibold text-lg hover:bg-emerald-warm transition inline-flex items-center gap-2 justify-center"
          >
            Start 7-Day Free Trial
            <ArrowRight size={20} />
          </a>
          <a
            href="https://tally.so/r/J9zzMz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-neutral-200/20 text-neutral-200 rounded-lg font-semibold text-lg hover:bg-neutral-200/10 transition"
          >
            Schedule Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}
