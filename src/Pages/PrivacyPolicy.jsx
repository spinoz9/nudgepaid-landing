import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy border-b border-neutral-200/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src="/images/logo.svg" alt="NudgePaid" className="h-20 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-neutral-200 hover:text-white text-sm transition">Home</Link>
            <a
              href="#signup"
              className="px-5 py-2.5 bg-emerald text-white rounded-lg text-sm font-semibold hover:bg-emerald-warm transition tracking-[-0.015em]"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-12">Effective Date: February 7, 2026 &middot; Last Updated: February 3, 2026 &middot; Version 2.0</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            {/* Overview */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
              <p className="text-sm">
                This Privacy Policy explains how NudgePaid (Amplify Humans LLC) collects, uses, discloses, and safeguards your information when using our Service. By using NudgePaid, you consent to our privacy practices as described here.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">1.1 Information You Provide</h3>
              <p className="text-sm font-medium text-gray-800 mb-1">Account Information:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                <li>Email address (required to create account)</li>
                <li>Full name (required)</li>
                <li>Password (hashed and encrypted, never stored as plain text)</li>
                <li>Timezone and reminder preferences (optional)</li>
                <li>Communication style preferences (optional)</li>
                <li>Custom instructions for AI email generation (optional)</li>
              </ul>

              <p className="text-sm font-medium text-gray-800 mb-1">User Data You Upload:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                <li>Invoice data (numbers, amounts, due dates, client names)</li>
                <li>Client email addresses and contact information</li>
                <li>Client replies to your emails (when you provide them for analysis)</li>
                <li>Custom notes and follow-up instructions</li>
                <li>Payment status information</li>
              </ul>

              <p className="text-sm font-medium text-gray-800 mb-1">Communication Data:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                <li>Support emails and messages</li>
                <li>Feedback and feature requests</li>
                <li>Survey responses and user research participation</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">1.2 Information Collected Automatically</h3>
              <p className="text-sm font-medium text-gray-800 mb-1">Usage Data:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-3">
                <li>Pages visited and time spent on each</li>
                <li>Features used and frequency</li>
                <li>Browser type, operating system, IP address</li>
                <li>Referral source (how you found us)</li>
                <li>Device type and manufacturer</li>
              </ul>

              <p className="text-sm font-medium text-gray-800 mb-1">Service Data:</p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Login timestamps and activity</li>
                <li>AI analysis requests and results</li>
                <li>Email draft generation requests</li>
                <li>Account creation and modification dates</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Provide the Service</h3>
              <p className="text-sm mb-4">Create and manage your account, generate AI email drafts and suggestions, store and process your invoice and client data, analyze client replies, track follow-up history, and send confirmations and notifications.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Improve the Service</h3>
              <p className="text-sm mb-4">Analyze usage patterns, test new features, understand which features users value, fix bugs and improve performance, and optimize user experience.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Communicate with You</h3>
              <p className="text-sm mb-4">Send transactional emails (receipts, password resets), notify you of changes, respond to support inquiries, and send product updates and announcements.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Comply with Laws</h3>
              <p className="text-sm mb-4">Enforce our Terms of Service, detect and prevent fraud or abuse, comply with legal obligations, protect our rights and user rights, and maintain service security.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Research and Analytics</h3>
              <p className="text-sm mb-4">Understand user demographics and behavior (anonymized), conduct research on payment follow-up effectiveness, and improve AI models using aggregated, anonymized data.</p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">We do NOT:</p>
                <ul className="text-sm space-y-1">
                  <li>Sell your data to third parties</li>
                  <li>Create detailed marketing profiles about you</li>
                  <li>Serve targeted advertisements to you</li>
                  <li>Track you across websites</li>
                  <li>Train AI models on your specific data (with Anthropic's commitment)</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Storage and Security</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">3.1 Where Your Data Lives</h3>
              <ul className="text-sm space-y-2 mb-4">
                <li><strong>Primary Storage:</strong> Supabase PostgreSQL database (AWS, us-east-1 region) with daily automated backups for 30 days, encrypted access via Clerk authentication, and role-based access control.</li>
                <li><strong>Encryption:</strong> HTTPS/TLS 1.2+ for all data in transit, AES-256 encryption for data at rest, and secure password hashing (bcrypt).</li>
                <li><strong>Access Restrictions:</strong> Only your account can access your data. No employee can access without approval. All access is logged and audited.</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">3.2 Security Practices</h3>
              <p className="text-sm mb-2">We implement:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>HTTPS encryption for all connections</li>
                <li>Password hashing and secure authentication</li>
                <li>SQL injection protection</li>
                <li>CSRF protection</li>
                <li>Rate limiting and abuse detection</li>
                <li>Regular security audits</li>
                <li>Intrusion detection systems</li>
              </ul>

              <p className="text-sm text-gray-500">We do not currently have SOC 2 Type II certification (coming as we scale), ISO 27001 certification (future goal), or formal penetration testing (planned before Series A).</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p className="text-sm mb-4">We share your data only as necessary with these services to provide NudgePaid:</p>

              <ul className="text-sm space-y-3 mb-4">
                <li><strong>Clerk (Authentication)</strong> &mdash; Data: Name, email, login activity. Purpose: Account management and login.</li>
                <li><strong>Supabase (Database)</strong> &mdash; Data: All data you upload. Purpose: Secure storage and retrieval.</li>
                <li><strong>Claude API (Anthropic)</strong> &mdash; Data: Invoice details, emails, client replies. Purpose: AI analysis and email generation. Anthropic does NOT train on your data.</li>
                <li><strong>Paddle (Payments)</strong> &mdash; Data: Email, billing address (not full card number). Purpose: Secure payment processing. PCI-DSS compliant.</li>
                <li><strong>Resend (Email Delivery)</strong> &mdash; Data: Email addresses, email content. Purpose: Delivering reminder emails you authorize.</li>
                <li><strong>Vercel (Hosting)</strong> &mdash; Data: Application logs, error tracking. Purpose: Application hosting and monitoring.</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">We do NOT share data with:</p>
                <ul className="text-sm space-y-1">
                  <li>Marketing or advertising networks</li>
                  <li>Data brokers or aggregators</li>
                  <li>Social media platforms</li>
                  <li>Analytics services that track across sites</li>
                </ul>
              </div>

              <h3 className="text-base font-semibold text-gray-800 mb-2">Legal Requirements</h3>
              <p className="text-sm">We may disclose your data if required by valid court order or subpoena, requested by government (with proper legal process), needed to enforce our Terms or protect rights, or required by law enforcement. We provide notice when legally possible.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention and Deletion</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.1 How Long We Keep Data</h3>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li><strong>Active Accounts:</strong> We retain all data while you maintain your account. Data is never automatically deleted.</li>
                <li><strong>Deleted Accounts:</strong> Active data deleted within 7 days. Backups retained for 30 days, then permanently deleted. After 30 days, data is completely unrecoverable.</li>
                <li><strong>Legal Holds:</strong> We may retain data longer if required by law. We will notify you of legal retention requirements.</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.2 Data Export</h3>
              <p className="text-sm">You have the right to download your data anytime, export in standard formats (CSV, JSON), request data portability, and receive your data in machine-readable form. Request via privacy@nudgepaid.com with "Data Export Request."</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Privacy Rights</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.1 Universal Rights (All Users)</h3>
              <ul className="text-sm space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of your data. Email privacy@nudgepaid.com with "Data Access Request." Response time: 30 days.</li>
                <li><strong>Correct:</strong> Update inaccurate information via account settings or email privacy@nudgepaid.com.</li>
                <li><strong>Delete:</strong> Delete your account in account settings. Data deleted within 7 days; backups within 30 days.</li>
                <li><strong>Portability:</strong> Export your data via account settings or email privacy@nudgepaid.com with "Data Export Request."</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails via unsubscribe link or email privacy@nudgepaid.com with "Unsubscribe."</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.2 GDPR Rights (EU Residents)</h3>
              <p className="text-sm mb-4">If you are in the European Union, you also have the right to restrict processing, right to object to certain processing, and right to lodge a complaint with your Data Protection Authority.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.3 CCPA Rights (California Residents)</h3>
              <p className="text-sm">If you are in California, you also have the right to know what information we collect, right to delete your data, right to opt-out of data "sale" (we don't sell data), and right to non-discrimination for exercising your rights. Request via privacy@nudgepaid.com with "CCPA Request."</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>

              <h3 className="text-base font-semibold text-gray-800 mb-2">7.1 Cookies We Use</h3>
              <ul className="text-sm space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> Keep you logged in during your session. Deleted when you log out. Essential for Service functionality.</li>
                <li><strong>Authentication Cookies:</strong> Maintain your login status. Managed by Clerk. Required to use the Service.</li>
                <li><strong>Analytics (Minimal):</strong> Understand user behavior. Improve Service performance. Non-tracking by default.</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">7.2 Do Not Track (DNT)</h3>
              <p className="text-sm mb-4">If your browser supports DNT, we respect your preference.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">7.3 Disabling Cookies</h3>
              <p className="text-sm">You can disable cookies in your browser, but this may prevent the Service from working properly.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Data Breaches</h2>
              <p className="text-sm mb-4">If we discover a breach, we will notify you via email without unreasonable delay, notify within 30 days of discovery, explain what data was affected, describe steps we're taking, and recommend actions you can take.</p>
              <p className="text-sm">If you discover a security vulnerability, email security@nudgepaid.com. Do NOT post it publicly. Include vulnerability description and reproduction steps.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-sm">NudgePaid is not for users under 13. We do not knowingly collect data from children under 13. If we discover this, we delete the data immediately. Parents with concerns: Email privacy@nudgepaid.com.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. International Transfers</h2>
              <p className="text-sm">NudgePaid operates in the United States (Wyoming). Your data is stored in the US (AWS Virginia). For international users: your data may be transferred to and processed in the US. Using NudgePaid means you consent to this transfer. We implement safeguards for international transfers.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-sm">We may update this Privacy Policy anytime. For major changes, we provide 30-day email notice before material changes take effect. Continued use after changes equals acceptance. Minor changes may update this page without notice. Check back regularly for updates.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <ul className="text-sm space-y-2">
                <li><strong>Email:</strong> hello@nudgepaid.com</li>
                <li><strong>Website:</strong> nudgepaid.com</li>
                <li><strong>Response Time:</strong> Within 5 business days</li>
              </ul>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Acknowledgment</h2>
              <p className="text-sm mb-2">By using NudgePaid, you acknowledge that:</p>
              <ul className="text-sm space-y-1">
                <li>You have read and understood this Privacy Policy</li>
                <li>You consent to collection and use of your information</li>
                <li>You understand how your data is stored and shared</li>
                <li>You understand your privacy rights</li>
              </ul>
            </div>

            <p className="text-xs text-gray-400 text-center">Version 2.0 (Optimized for MVP) &middot; Effective February 7, 2026 &middot; Last Updated February 3, 2026</p>
            <p className="text-xs text-gray-400 text-center">Amplify Humans LLC (doing business as NudgePaid) &middot; Wyoming, USA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/">
                <img src="/images/logo.svg" alt="NudgePaid" className="h-10 w-auto mb-4" />
              </Link>
              <p className="text-neutral-200/60 text-sm">
                AI-powered receivables management for fractional executives.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/" className="text-neutral-200/60 hover:text-white transition">Home</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/terms" className="text-neutral-200/60 hover:text-white transition">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-neutral-200/60 hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200/10 pt-8 text-center">
            <p className="text-neutral-200/40 text-sm">&copy; 2026 NudgePaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
