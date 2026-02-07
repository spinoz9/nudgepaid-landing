import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-navy border-b border-neutral-200/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/images/logo.svg" alt="NudgePaid" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-neutral-200 hover:text-white text-sm transition">
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/J9zzMz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-200/20 text-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-200/10 transition"
          >
            Request Demo
          </a>
          <a
            href="#signup"
            className="px-5 py-2.5 bg-emerald text-white rounded-lg text-sm font-semibold hover:bg-emerald-warm transition tracking-[-0.015em]"
          >
            Start 7-Day Free Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-neutral-200/10 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-neutral-200 hover:text-white text-sm py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 bg-emerald text-white rounded-lg text-sm font-semibold hover:bg-emerald-warm transition"
          >
            Start 7-Day Free Trial
          </a>
          <a
            href="https://tally.so/r/J9zzMz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-3 border border-neutral-200/20 text-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-200/10 transition"
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
