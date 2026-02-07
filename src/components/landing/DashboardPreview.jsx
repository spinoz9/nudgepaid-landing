import { LayoutDashboard } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Your Multi-Client AR Command Center
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          See every client, every invoice, every follow-up — all in one executive-grade dashboard.
        </p>

        <div className="bg-navy rounded-xl border border-neutral-700/30 aspect-[16/9] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard size={32} className="text-emerald" />
            </div>
            <p className="text-neutral-200 font-mono text-sm">Dashboard Preview Coming Soon</p>
            <p className="text-neutral-200/60 text-xs mt-2">Multi-client AR visibility at a glance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
