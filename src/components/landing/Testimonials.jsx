import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Testimonial placeholder — real quotes from early adopters will be added here.',
    name: 'Executive Name',
    title: 'Fractional CFO',
  },
  {
    quote: 'Testimonial placeholder — real quotes from early adopters will be added here.',
    name: 'Executive Name',
    title: 'Fractional COO',
  },
  {
    quote: 'Testimonial placeholder — real quotes from early adopters will be added here.',
    name: 'Executive Name',
    title: 'Fractional CMO',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-neutral-900 tracking-[-0.025em] text-center mb-12">
          Trusted by Fractional Executives
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-neutral-100 rounded-xl p-8 border border-neutral-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-emerald fill-emerald" />
                ))}
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200" />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{item.name}</div>
                  <div className="text-xs text-neutral-700/60">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
