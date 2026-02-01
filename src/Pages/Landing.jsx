import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Upload, Sparkles, CheckCircle, Clock, DollarSign, Shield } from 'lucide-react';

export default function NudgePaidLanding() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is the implementation timeline?",
      answer: "Implementation completes in under 5 minutes. Connect your accounting system, configure reminder intervals, and activate. Your first automated follow-ups deploy immediately upon activation."
    },
    {
      question: "What security and compliance standards does NudgePaid meet?",
      answer: "NudgePaid maintains enterprise-grade security: AES-256 encryption at rest and in transit, SOC 2 Type II certification, and full GDPR compliance. Financial data remains isolated within our secure infrastructure with no third-party data sharing."
    },
    {
      question: "Which invoicing platforms integrate with NudgePaid?",
      answer: "Current integrations include Wave, QuickBooks, Bonsai, and Stripe. Manual invoice entry is also supported. Integration roadmap expands monthly based on founding member requirements."
    },
    {
      question: "What is your refund policy?",
      answer: "30-day unconditional money-back guarantee. If NudgePaid doesn't meet your requirements, we process refunds within 24 hours and permanently delete all associated data from our systems."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-0 flex justify-between items-center">
          <img src="/images/logo.svg" alt="NudgePaid" className="h-26 w-auto" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</a>
            <a
              href="https://tally.so/r/J9zzMz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition inline-block"
            >
              Join Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Recover 10+ Days of Cash Flow. Reduce Chasing by 3+ Hours Weekly.
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                AI-powered invoice follow-ups that maintain client relationships and accelerate payment cycles.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Managing accounts receivable across multiple client engagements creates operational friction. Late payments extend your cash conversion cycle, reduce forecasting accuracy, and consume hours typically allocated to billable work. The manual follow-up process—while necessary—introduces relationship risk and operational inefficiency.
              </p>

              <a
                href="https://tally.so/r/J9zzMz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition flex items-center gap-2 inline-flex"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </a>

              <p className="text-gray-600 mt-4">No credit card. Activate in under 2 minutes.</p>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block">
              <img
                src="/images/hero-consultant.jpg"
                alt="Professional consultant working with documents and laptop, happy and relaxed"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-700 font-medium mb-4">
            Trusted by Fractional Executives, Consultants, and Growth-Stage Service Leaders
          </p>
          <p className="text-gray-600 text-lg">
            Join 50+ founding members reducing DSO and reclaiming operational bandwidth.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Three Steps to Optimize Your Payment Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Connect Your Invoicing System</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate Wave, QuickBooks, or Bonsai. Or input invoices manually. Setup completes in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. AI Generates Contextual Follow-Ups</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI analyzes your communication patterns and generates professional follow-ups that reflect your voice. Each email is customized by client relationship stage and payment history.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Review, Refine, or Automate</h3>
              <p className="text-gray-600 leading-relaxed">
                Approve each follow-up before sending, edit as needed, or configure our system to send automatically on your schedule. Full control remains yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            The Cost of Manual Payment Follow-Ups: Quantified
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Problems */}
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Inefficiency</h4>
                    <p className="text-gray-600">Manual follow-ups consume 3-6 hours weekly per professional. This represents $450-$900/week in opportunity cost at billable rates. Direct impact: reduced profitability per engagement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <DollarSign className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Cash Flow Forecasting Gaps</h4>
                    <p className="text-gray-600">Late payments reduce cash conversion cycle visibility. DSO variance of 15-30 days creates budget planning uncertainty. Impacts payroll, vendor management, and growth investments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Relationship Management Complexity</h4>
                    <p className="text-gray-600">Follow-ups must balance firmness with professionalism. Inconsistent communication tone across clients creates perception risk. Each late payment requires custom communication strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Solution */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Reduce DSO by 10+ Days While Maintaining Client Trust
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With NudgePaid: Automated reminders at strategic intervals (Day 7, 14, 21) reduce payment delays. AI-generated follow-ups maintain professional tone across all clients. Payment tracking provides real-time DSO visibility for forecasting. Reclaim 3+ hours weekly previously spent on manual follow-ups.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">Strategic automated reminders at Day 7, 14, 21</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">AI-generated emails matching your professional voice</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">Real-time payment tracking and DSO visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Founding Member Access
          </h2>

          <div className="bg-white border-2 border-blue-600 rounded-xl p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$50/month</h3>
              <p className="text-blue-600 font-bold text-lg mb-2">Lifetime 50% Discount</p>
              <p className="text-red-600 font-bold text-lg">Limited to 50 founding members.</p>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-4">What You Get:</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Early access to NudgePaid platform (production-ready)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">15-30 min strategic workflow audit with founder</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Custom invoice setup and template configuration (first 5 invoices)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Direct access for optimization questions (first 30 days)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Beta access to new features + direct product roadmap input</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <span className="text-gray-700">Founding member designation in community</span>
              </div>
            </div>

            <a
              href="https://tally.so/r/J9zzMz"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition text-center"
            >
              Join as Founding Member
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">
                    {item.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp size={24} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-600" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Payment Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Schedule a 15-minute consultation with our founder. We'll review your current payment process, identify optimization opportunities, and discuss whether NudgePaid is the right fit for your practice.
          </p>

          <a
            href="https://tally.so/r/J9zzMz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Schedule Your Consultation
          </a>

          <p className="text-blue-100 mt-8">
            No commitment required. 15-minute strategic review.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo.svg" alt="NudgePaid" className="h-16 w-auto mb-4" />
              <p className="text-sm">Professional payment follow-ups powered by AI.</p>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold mb-4">Support</h4>
              <p className="text-sm">hello@nudgepaid.com</p>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center text-sm">
            <p>© 2026 NudgePaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}