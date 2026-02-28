import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/">
              <img src="/images/logo.svg" alt="NudgePaid" className="h-6 w-auto mb-4" />
            </Link>
            <p className="text-neutral-200/60 text-sm">
              Automated payment follow-up for independent professionals and fractional executives.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#how-it-works" className="text-neutral-200/60 hover:text-white transition">How It Works</a></li>
              <li><a href="#features" className="text-neutral-200/60 hover:text-white transition">Features</a></li>
              <li><a href="#roi-calculator" className="text-neutral-200/60 hover:text-white transition">ROI Calculator</a></li>
              <li><a href="#faq" className="text-neutral-200/60 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terms" className="text-neutral-200/60 hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-neutral-200/60 hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-neutral-200/60 text-sm">hello@nudgepaid.com</p>
          </div>
        </div>

        <div className="border-t border-neutral-200/10 pt-8 text-center">
          <p className="text-neutral-200/40 text-sm">&copy; 2026 NudgePaid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
