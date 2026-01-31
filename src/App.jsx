import { useState, useEffect } from 'react'
import { Upload, FileText, Send, Clock, Shield, DollarSign, ChevronDown, CheckCircle2 } from 'lucide-react'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script')
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const faqs = [
    {
      question: "How long does it take to set up?",
      answer: "5 minutes. Connect your invoicing tool, set your preferences, and you're done. NudgePaid handles the rest."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use bank-level encryption and never access your financials. Your invoice data is encrypted in transit and at rest."
    },
    {
      question: "Does it integrate with my invoicing tool?",
      answer: "Yes. We integrate with Wave, QuickBooks, Bonsai, and other popular tools. More integrations coming soon."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "30-day money-back guarantee. If NudgePaid doesn't save you time and improve your cash flow, we'll refund you—no questions asked."
    }
  ]

  const features = [
    "Unlimited AI-drafted follow-ups",
    "Invoice tracking & reminders",
    "Professional email templates",
    "Smart send timing recommendations",
    "Integration with Wave, QuickBooks, Bonsai",
    "Priority email support"
  ]

  const problems = [
    {
      title: "Hours wasted every week",
      description: "Checking invoices, drafting emails, following up manually. Time you could spend on billable work.",
      icon: Clock
    },
    {
      title: "Cash flow stress",
      description: "Late payments mean you can't predict income, pay your own bills, or invest in growth.",
      icon: DollarSign
    },
    {
      title: "Relationship anxiety",
      description: "You worry that asking for payment will make you seem pushy or damage client relationships.",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl" style={{ color: '#0F172A' }}>
              NudgePaid
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">
                FAQ
              </a>
              <a
                href="#pricing"
                className="px-6 py-2 rounded-lg font-medium text-white transition"
                style={{ backgroundColor: '#2563EB' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563EB'}
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden">
              <a
                href="#pricing"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                style={{ backgroundColor: '#2563EB' }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#0F172A' }}>
                Get paid faster—without the awkward emails.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                AI writes professional follow-ups. You approve. Clients pay on time.
              </p>
              <div className="bg-gray-50 border-l-4 p-6 mb-8" style={{ borderColor: '#2563EB' }}>
                <p className="text-gray-700 leading-relaxed">
                  You're a fractional executive/consultant. You invoice high-value clients. Then you spend hours chasing payments.
                  Invoices sit at Net 30, Net 60, sometimes Net 90+. You fear asking for money will damage relationships.
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold text-white transition"
                style={{ backgroundColor: '#2563EB' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563EB'}
              >
                Try NudgePaid Free
              </a>
            </div>

            {/* Right Side - Hero Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop"
                alt="Professional consultant working confidently"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg mb-2">
            Trusted by fractional executives, consultants, and business owners
          </p>
          <p className="font-semibold text-xl" style={{ color: '#2563EB' }}>
            Join 50+ early users
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#0F172A' }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#EFF6FF' }}>
                <Upload className="w-8 h-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#0F172A' }}>
                1. Upload Invoice
              </h3>
              <p className="text-gray-600">
                30 seconds to connect your invoicing tool or upload manually.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#EFF6FF' }}>
                <FileText className="w-8 h-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#0F172A' }}>
                2. AI Drafts Follow-Up
              </h3>
              <p className="text-gray-600">
                Our AI writes a professional, relationship-aware follow-up email.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#EFF6FF' }}>
                <Send className="w-8 h-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#0F172A' }}>
                3. You Approve & Send
              </h3>
              <p className="text-gray-600">
                Review, edit if needed, and send. Or let NudgePaid send automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#0F172A' }}>
            The payment chase is costing you time and money
          </h2>
          <div className="space-y-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 mt-1" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#0F172A' }}>
                      {problem.title}
                    </h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0F172A' }}>
              Early Access Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Lock in lifetime pricing for being an early supporter
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2" style={{ borderColor: '#2563EB' }}>
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Lifetime 50% discount
              </div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#0F172A' }}>
                $25<span className="text-2xl text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Limited to 50 users</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <a
                href="#form"
                className="block w-full py-4 rounded-lg text-center text-lg font-semibold text-white transition mb-8"
                style={{ backgroundColor: '#2563EB' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563EB'}
              >
                Get Started Now
              </a>
            </div>
          </div>

          {/* Tally Form Embed */}
          <div className="mt-12" id="form">
            <iframe
              data-tally-src="https://tally.so/embed/J9zzMz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1246"
              title="Join NudgePaid Early Access"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#0F172A' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold pr-4" style={{ color: '#0F172A' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to stop chasing invoices?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join early users who are getting paid faster and reducing payment stress.
          </p>
          <a
            href="https://calendly.com/hello-nudgepaid/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            style={{ color: '#2563EB' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
          >
            Schedule a call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-bold text-xl text-white mb-4">
                NudgePaid
              </div>
              <p className="text-sm text-gray-400">
                Professional payment follow-ups powered by AI.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://calendly.com/hello-nudgepaid/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-sm text-center text-gray-400" style={{ borderColor: '#1e293b' }}>
            <p>&copy; 2026 NudgePaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
