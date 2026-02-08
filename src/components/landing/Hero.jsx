import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-navy">
      <div className="max-w-7xl mx-auto text-center">
        {/* Trust badge — hidden until first client, uncomment to show */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/50 border border-neutral-700/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
          <span className="text-neutral-200 text-sm font-mono tracking-[-0.015em]">
            Trusted by fractional executives billing $200-$500/hr
          </span>
        </div> */}

        {/* Headline */}
        <h1 className="text-[3rem] md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-[-0.025em] max-w-4xl mx-auto mb-6">
          Automate receivables management without sacrificing client relationships
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-neutral-200 max-w-2xl mx-auto mb-10 leading-relaxed tracking-[-0.015em]">
          AI-powered invoice follow-ups that preserve the professional relationships
          you've built — while recovering 10+ days of cash flow.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://app.nudgepaid.com/sign-up"
            className="px-8 py-4 bg-emerald text-white rounded-lg font-semibold text-lg hover:bg-emerald-warm transition inline-flex items-center gap-2 tracking-[-0.015em]"
          >
            Start 7-Day Free Trial
            <ArrowRight size={20} />
          </a>
          <a
            href="https://tally.so/r/J9zzMz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-neutral-200/20 text-neutral-200 rounded-lg font-semibold text-lg hover:bg-neutral-200/10 transition tracking-[-0.015em]"
          >
            Request Executive Demo
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-neutral-200/60 text-sm font-mono">
          <span>No credit card required</span>
          <span className="hidden sm:inline">|</span>
          <span>Setup in under 5 minutes</span>
          <span className="hidden sm:inline">|</span>
          <span>SOC 2 compliant</span>
        </div>
      </div>
    </section>
  );
}
