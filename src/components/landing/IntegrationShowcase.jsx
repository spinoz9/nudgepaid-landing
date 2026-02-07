const integrations = ['QuickBooks', 'Wave', 'Bonsai', 'Stripe', 'Xero'];

export default function IntegrationShowcase() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-mono text-neutral-700/60 uppercase tracking-widest mb-8">
          Integration with your existing workflows coming in Q2 2026
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {integrations.map((name) => (
            <div
              key={name}
              className="px-6 py-3 bg-neutral-100 rounded-lg border border-neutral-200 text-neutral-700 font-semibold text-sm"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-700/60 mt-6">Manual CSV upload also supported</p>
      </div>
    </section>
  );
}
