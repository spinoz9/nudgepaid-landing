export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-4">
          Unified Dashboard for Managing Receivables Across All Clients
        </h2>
        <p className="text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          Track every client, invoice, and reminder in one clean view.
        </p>

        <div className="rounded-xl border border-neutral-200 shadow-lg overflow-hidden">
          <img
            src="/images/dashboard-preview-optimized.jpg"
            alt="NudgePaid dashboard showing client invoices, DSO metrics, and follow-up status"
            width={1200}
            height={653}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
