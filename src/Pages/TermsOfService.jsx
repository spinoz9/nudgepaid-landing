import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy border-b border-neutral-200/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <img src="/images/logo.svg" alt="NudgePaid" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-neutral-200 hover:text-white text-sm transition">Home</Link>
            <a
              href="https://app.nudgepaid.com/sign-up"
              className="px-5 py-2.5 bg-emerald text-white rounded-lg text-sm font-semibold hover:bg-emerald-warm transition tracking-[-0.015em]"
            >
              Start 7-Day Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-12">Effective Date: February 7, 2026 &middot; Last Updated: February 3, 2026 &middot; Version 3.0</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            {/* Important Legal Notice */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Important Legal Notice</h2>
              <p className="mb-3 text-sm">
                Please read these Terms carefully before using NudgePaid. These Terms of Service ("Terms") constitute a legally binding agreement between you and Amplify Humans LLC, a Wyoming limited liability company ("NudgePaid," "we," "us," or "our"), governing your access to and use of the NudgePaid service.
              </p>
              <p className="text-sm mb-3">
                By clicking "I Agree," creating an account, accessing, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not access or use the Service.
              </p>
              <p className="text-sm font-medium text-gray-900">These Terms contain:</p>
              <ul className="text-sm list-disc list-inside mt-1 space-y-1">
                <li>A binding arbitration clause (Section 15)</li>
                <li>A class action waiver (Section 15.3)</li>
                <li>Limitations on our liability (Section 13)</li>
                <li>Your indemnification obligations (Section 14)</li>
              </ul>
              <p className="text-sm mt-3">You have the right to opt out of arbitration within 30 days of account creation (see Section 15.5).</p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Definitions</h2>
              <ul className="space-y-2 text-sm">
                <li><strong>"Service"</strong> means the NudgePaid AI-powered invoice follow-up assistant platform, including all software, features, functionality, APIs, websites (nudgepaid.com), mobile applications, and related documentation.</li>
                <li><strong>"User," "you," or "your"</strong> means the individual or business entity that registers for and uses the Service.</li>
                <li><strong>"Account"</strong> means your registered NudgePaid account used to access the Service.</li>
                <li><strong>"User Data"</strong> means all data, content, and information you upload, submit, or provide to the Service, including invoice data, client information, email addresses, and custom instructions.</li>
                <li><strong>"AI-Generated Content"</strong> means email drafts, follow-up suggestions, and response recommendations created by our artificial intelligence system based on your input.</li>
                <li><strong>"Subscription Term"</strong> means the period during which you have paid access to the Service (monthly or annual).</li>
                <li><strong>"Fees"</strong> means the subscription charges for your chosen plan tier as published on our pricing page.</li>
                <li><strong>"Free Trial Period"</strong> means the promotional period from service launch through February 28, 2026, during which the Service is provided at no charge.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Acceptance and Eligibility</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">2.1 Binding Agreement</h3>
              <p className="text-sm mb-4">By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to all terms, you must not access or use the Service.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">2.2 Eligibility Requirements</h3>
              <p className="text-sm mb-2">To use the Service, you must:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>Be at least 18 years of age</li>
                <li>Have legal capacity to enter into a binding contract</li>
                <li>Have authority to bind yourself (or your organization) to these Terms</li>
                <li>Be a human user (not a bot or automated system)</li>
                <li>Not be located in any country subject to U.S. economic sanctions</li>
                <li>Not appear on any U.S. government restricted parties list</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">2.3 Business Use</h3>
              <p className="text-sm mb-4">If you register using a business email domain, you acknowledge that your employer may have visibility into or rights to control your account.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">2.4 Modification of Terms</h3>
              <p className="text-sm">We reserve the right to modify these Terms at any time. Material changes will be communicated via email at least 30 days before taking effect. Continued use after changes become effective constitutes your acceptance of modified Terms. If you do not agree, your sole remedy is to terminate your account.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">3.1 What the Service Does</h3>
              <p className="text-sm mb-2">NudgePaid is an AI-powered invoice follow-up assistant designed to help you:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>Create draft reminder emails for overdue invoices</li>
                <li>Store invoice and client information</li>
                <li>Analyze client replies to your reminder emails using AI</li>
                <li>Provide suggestions for follow-up communications</li>
                <li>Track follow-up history and payment status</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">3.2 What the Service Does NOT Do</h3>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>Send emails on your behalf without your review and explicit approval</li>
                <li>Collect payments or integrate with payment processing systems</li>
                <li>Currently integrate with accounting software (Wave, QuickBooks, Bonsai, etc.)</li>
                <li>Manage your invoices (you upload and maintain your data)</li>
                <li>Provide legal, financial, or collection advice</li>
                <li>Guarantee that clients will pay overdue invoices</li>
                <li>Act as a debt collection agency</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">3.3 MVP Status</h3>
              <p className="text-sm mb-2">You acknowledge that:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>The Service is currently in MVP (Minimum Viable Product) stage</li>
                <li>Features may be added, modified, or removed without advance notice</li>
                <li>The Service may contain bugs, errors, or incomplete features</li>
                <li>Certain features may be designated "beta," "alpha," or "experimental" and provided "as is"</li>
                <li>Beta features may be discontinued at any time without liability</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">3.4 No Professional Advice</h3>
              <p className="text-sm">The Service provides general assistance tools and does NOT constitute legal, financial, accounting, tax, or professional advice. Consult appropriate professionals for advice specific to your situation.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Account Registration and Security</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">4.1 Account Creation</h3>
              <p className="text-sm mb-2">To use the Service, you must create an account by providing a valid email address, your full name, a secure password, and any additional information requested during registration. You represent and warrant that all information you provide is accurate and complete.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">4.2 Account Responsibility</h3>
              <p className="text-sm mb-2">You are responsible for maintaining the confidentiality of your password, all activities that occur under your account, ensuring all information you provide is accurate, and notifying us immediately of any unauthorized access. We are NOT responsible for unauthorized access due to shared passwords, phishing attacks, or password compromise.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">4.3 Account Suspension</h3>
              <p className="text-sm">We may suspend your account immediately and without notice if we believe you violate these Terms, are using the Service for illegal purposes, are violating any laws or regulations, or pose a threat to our systems or other users.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Subscription Plans and Fees</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">5.1 Free Trial Period</h3>
              <p className="text-sm mb-4">From February 7 through February 28, 2026, the Service is provided free to all users. After February 28, 2026, continued access requires a paid subscription.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.2 Paid Subscription Plans</h3>
              <p className="text-sm mb-2">Starting March 1, 2026, we offer the following plans:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li><strong>Founder Tier:</strong> $25/month (for MVP early adopters, lifetime 50% discount)</li>
                <li><strong>Standard Tier:</strong> $50/month</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.3 Billing</h3>
              <p className="text-sm mb-4">Subscriptions are billed monthly via Paddle. Billing occurs automatically on the same day each month. Receipts are sent to your registered email. You are responsible for payment of applicable taxes.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.4 Subscription Renewal</h3>
              <p className="text-sm mb-4">Subscriptions automatically renew unless you cancel in your account settings. You must cancel before your renewal date to avoid the next charge.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">5.5 Price Changes</h3>
              <p className="text-sm">We may change subscription prices with 30 days' notice. Price increases apply to renewals, not current subscriptions.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Refund Policy</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">6.1 Consumer Right to Cancel (14-Day Cancellation Period)</h3>
              <p className="text-sm mb-2">If you are a Consumer (purchasing wholly or mainly for personal use), you have the right to cancel this Agreement and receive a refund within <strong>14 days</strong> without giving any reason. The cancellation period expires <strong>14 days from the day after completion of the Transaction</strong> (when your subscription begins).</p>
              <p className="text-sm mb-2">To meet the cancellation deadline, you must send us your cancellation request before the 14-day period expires.</p>
              <p className="text-sm mb-4"><strong>How to Cancel:</strong> Email support@nudgepaid.com with your account email address and request to cancel. You may also manage your subscription through your account settings.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.2 Effect of Cancellation</h3>
              <p className="text-sm mb-2">If you cancel within the 14-day period, we will reimburse all payments you have made.</p>
              <p className="text-sm font-medium text-gray-900 mb-1">Reimbursement Details:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>Made without undue delay and not later than 14 days after we receive your cancellation request</li>
                <li>Using the same means of payment as your original transaction</li>
                <li>You will not incur any fees as a result of the reimbursement</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.3 Exception to the Right to Cancel</h3>
              <p className="text-sm mb-4">Your right to cancel does NOT apply to digital content that you have already downloaded or accessed (once use of the Service has begun).</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.4 Refund Policy After 14-Day Period</h3>
              <p className="text-sm mb-2">After the 14-day cancellation period expires, refunds are provided at the sole discretion of NudgePaid on a case-by-case basis and may be refused. NudgePaid may refuse a refund request if we find evidence of fraud, refund abuse, or other manipulative behavior that entitles NudgePaid to counterclaim the refund.</p>
              <p className="text-sm mb-4">This does not affect your rights as a Consumer in relation to Services which are not as described, faulty, or not fit for purpose.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.5 Cancellation of Subscriptions</h3>
              <p className="text-sm mb-2">You may cancel your subscription anytime by contacting support@nudgepaid.com or managing your subscription through your account settings.</p>
              <p className="text-sm mb-4">For automatic renewal subscriptions, you must cancel at least 48 hours before the end of your current billing period for the cancellation to take effect at the next payment date. There are no refunds for unused subscription periods after cancellation.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.6 Subscription Billing and Price Changes</h3>
              <p className="text-sm mb-4">Paid Subscriptions automatically renew unless cancelled. If we increase the price of your subscription, we will notify you in advance and seek your consent if required by law. You will be charged on your renewal date. If you don't consent to a price increase, you may cancel before the new price takes effect.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">6.7 Payment Failures</h3>
              <p className="text-sm">If we cannot charge your payment method for any reason (expiration, insufficient funds, etc.) and you have not cancelled your subscription, you remain responsible for any uncollected amounts. We reserve the right to cancel your subscription if we are unable to successfully charge your payment method after reasonable collection attempts.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. User Obligations and Acceptable Use</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">7.1 Your Responsibilities</h3>
              <p className="text-sm mb-2">You agree to use the Service only for legitimate business purposes, provide accurate information, maintain confidentiality of your password, review all AI-generated emails before sending, comply with all applicable laws, and respect the rights of others.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">7.2 You Are Responsible For</h3>
              <p className="text-sm">Accuracy of data you upload, ensuring you have rights to share client emails and contact information, compliance with data privacy laws in your jurisdiction, reviewing all communications before sending, and your invoicing practices and payment collection methods.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Prohibited Conduct</h2>
              <p className="text-sm mb-2">You agree NOT to use the Service to:</p>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li>Send spam, unsolicited emails, or phishing attempts</li>
                <li>Harass, threaten, or abuse clients or other users</li>
                <li>Violate any local, state, or federal laws</li>
                <li>Reverse-engineer, hack, or attempt unauthorized access to our systems</li>
                <li>Scrape data or automate access without permission</li>
                <li>Upload malware, viruses, or malicious code</li>
                <li>Impersonate others or commit fraud</li>
                <li>Collect payment or financial information through the Service</li>
                <li>Violate intellectual property rights of others</li>
                <li>Violate any law relating to sanctions or export controls</li>
              </ul>
              <p className="text-sm">We reserve the right to suspend or terminate your account immediately without refund if you violate this section.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Intellectual Property Rights</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">9.1 Our IP</h3>
              <p className="text-sm mb-4">NudgePaid owns all rights to the Service platform, code, design, functionality, logos, trademarks, brand elements, documentation, and all improvements. You may not copy, modify, or redistribute any of our proprietary materials.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">9.2 Your Data</h3>
              <p className="text-sm mb-4">You own all data you upload to the Service. You grant us a license to use your data to provide the Service, including storing, processing, and using it for service improvement (anonymized).</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">9.3 AI-Generated Content</h3>
              <p className="text-sm mb-4">Email drafts and suggestions generated by our AI are your property. You have full rights to use, edit, and send these communications.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">9.4 Feedback</h3>
              <p className="text-sm">Any feedback, suggestions, or ideas you provide may be used by NudgePaid without compensation or attribution.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">10.1 Services We Use</h3>
              <ul className="text-sm space-y-3 mb-4">
                <li><strong>Clerk (Authentication)</strong> &mdash; Handles login, sign-up, and password management.</li>
                <li><strong>Claude API (Anthropic)</strong> &mdash; Analyzes client replies and generates email suggestions. Anthropic does NOT train on your data.</li>
                <li><strong>Supabase (Database)</strong> &mdash; Stores all your invoice, client, and user data. Data encrypted at rest and in transit.</li>
                <li><strong>Paddle (Payments)</strong> &mdash; Processes subscription payments securely.</li>
                <li><strong>Vercel (Hosting)</strong> &mdash; Hosts the application.</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">10.2 We Are NOT Liable For</h3>
              <p className="text-sm">Third-party service outages or failures, third-party privacy practices or data handling, or third-party content or actions. You are responsible for reviewing third-party privacy policies before using our Service.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Data Ownership and License</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">11.1 Your Data License to Us</h3>
              <p className="text-sm mb-4">You grant NudgePaid a worldwide, non-exclusive, royalty-free license to store your User Data, process and analyze your data to provide the Service, use anonymized data for service improvement and analytics, and retain data backups for security and disaster recovery.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">11.2 Data Retention and Deletion</h3>
              <ul className="text-sm list-disc list-inside space-y-1 mb-4">
                <li><strong>Active accounts:</strong> Data stored as long as you maintain your account</li>
                <li><strong>Deleted accounts:</strong> Data deleted from active systems within 7 days</li>
                <li><strong>Backups:</strong> Retained for 30 days, then automatically purged</li>
                <li><strong>After 30 days:</strong> Your data is permanently unrecoverable</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-800 mb-2">11.3 No Ownership by Us</h3>
              <p className="text-sm">We never own your data. You retain all ownership rights. We are merely stewards of your information while you use our Service.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Service Modifications and Availability</h2>
              <p className="text-sm mb-4">We reserve the right to add, remove, or modify features, change the Service's appearance or functionality, and discontinue the Service with 30 days' notice. We aim for 99.5% uptime. Scheduled maintenance occurs Sundays 2-4am UTC with 48-hour advance notice for major updates. We are NOT liable for downtime unless it exceeds 48 consecutive hours due to our fault.</p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Term, Termination, and Suspension</h2>
              <p className="text-sm mb-2">This agreement is effective when you accept these Terms and continues until terminated by either party. You may terminate your account anytime in your account settings. We may terminate your account if you violate these Terms, use the Service for illegal purposes, harm our systems or other users, or fail to pay subscription fees (after 30-day notice).</p>
              <p className="text-sm">Upon termination, your access ends immediately, your data is deleted within 30 days, you remain liable for fees incurred before termination, and sections on liability, indemnification, and dispute resolution survive.</p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Warranties and Disclaimers</h2>
              <p className="text-sm mb-4">The Service is provided "AS-IS" without warranties of any kind, express or implied. We do NOT warrant that the Service will meet your requirements, be uninterrupted or error-free, be free of bugs or harmful components, achieve specific results, or guarantee that clients will pay invoices. The Service does not constitute legal, financial, accounting, or professional advice.</p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Limitation of Liability</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">15.1 What We're NOT Liable For</h3>
              <p className="text-sm mb-4">Lost revenue or unpaid invoices, data loss, email delivery failures, third-party service outages, AI quality, client behavior, indirect damages, or consequential damages.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">15.2 Liability Cap</h3>
              <p className="text-sm mb-4">Our total liability to you is limited to the lesser of 12 months of fees you paid us, or $500.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">15.3 Essential Terms</h3>
              <p className="text-sm">You acknowledge that this liability limitation is an essential term of this agreement and that we would not provide the Service without these limitations.</p>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Indemnification</h2>
              <p className="text-sm">You agree to indemnify, defend, and hold harmless NudgePaid, our officers, employees, and agents from any claims, damages, losses, costs, or expenses arising from your use of the Service, your violation of these Terms, your violation of any laws, content you upload or send through the Service, or your relationship with your clients. This indemnification does not apply if the claim arises solely from our gross negligence or willful misconduct.</p>
            </div>

            {/* Section 17 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">17. Dispute Resolution and Arbitration</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">17.1 Informal Resolution</h3>
              <p className="text-sm mb-4">If a dispute arises, both parties agree to attempt informal resolution by sending written notice, attempting to resolve in good faith, and engaging in reasonable negotiation. Notice address: legal@nudgepaid.com</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">17.2 Binding Arbitration</h3>
              <p className="text-sm mb-4">If we cannot resolve the dispute within 30 days, both parties agree to submit the dispute to binding arbitration rather than court litigation.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">17.3 Class Action Waiver</h3>
              <p className="text-sm mb-4 font-medium">You agree to arbitrate disputes on an individual basis only. You may not pursue class action, collective action, or representative action lawsuits.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">17.4 Arbitration Rules</h3>
              <p className="text-sm mb-4">A single neutral arbitrator selected per AAA rules. Location: Wyoming, USA. AAA Commercial Arbitration Rules apply. We pay arbitration filing fees. Proceedings are confidential.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">17.5 Opt-Out Right</h3>
              <p className="text-sm mb-4">You may opt out of arbitration within 30 days of account creation by emailing legal@nudgepaid.com with subject "Arbitration Opt-Out" including your name, email, and account details. If you opt out, disputes will be resolved in court in Wyoming.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">17.6 Small Claims Exception</h3>
              <p className="text-sm">Either party may pursue disputes in small claims court if eligible.</p>
            </div>

            {/* Section 18 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">18. Governing Law</h2>
              <p className="text-sm">These Terms are governed by the laws of the State of Wyoming, without regard to conflict of law principles. The UN Convention on Contracts for the International Sale of Goods is expressly excluded.</p>
            </div>

            {/* Section 19 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">19. General Provisions</h2>
              <h3 className="text-base font-semibold text-gray-800 mb-2">19.1 Entire Agreement</h3>
              <p className="text-sm mb-4">These Terms constitute the entire agreement between you and NudgePaid regarding the Service and supersede all prior negotiations, understandings, and agreements.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.2 Severability</h3>
              <p className="text-sm mb-4">If any provision of these Terms is found invalid or unenforceable, that provision will be removed and the remaining Terms remain in effect.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.3 No Waiver</h3>
              <p className="text-sm mb-4">If we don't enforce a right under these Terms, that doesn't mean we've waived that right. We can still enforce it later.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.4 Assignments</h3>
              <p className="text-sm mb-4">You may not assign these Terms or your rights under them to anyone else without our written consent. We may assign these Terms to a successor company.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.5 Survival</h3>
              <p className="text-sm mb-4">The following sections survive termination of these Terms: Intellectual Property Rights, Limitation of Liability, Indemnification, Dispute Resolution, and Governing Law.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.6 Force Majeure</h3>
              <p className="text-sm mb-4">Neither party is liable for delays or failures caused by events beyond their reasonable control (natural disasters, pandemics, wars, etc.).</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.7 Severability</h3>
              <p className="text-sm mb-4">If any part of these Terms is found invalid, the rest remains in effect.</p>

              <h3 className="text-base font-semibold text-gray-800 mb-2">19.8 Notices</h3>
              <p className="text-sm">Any notice required under these Terms must be in writing sent to the contact information in Section 20.</p>
            </div>

            {/* Section 20 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">20. Contact Information</h2>
              <ul className="text-sm space-y-3">
                <li><strong>Email:</strong> hello@nudgepaid.com</li>
                <li><strong>Website:</strong> nudgepaid.com</li>
                <li><strong>Response Time:</strong> Within 5 business days</li>
              </ul>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Acknowledgment</h2>
              <p className="text-sm mb-2">By using NudgePaid, you acknowledge that you have:</p>
              <ul className="text-sm space-y-1">
                <li>Read and understood these Terms</li>
                <li>Agreed to be bound by them</li>
                <li>Confirmed you are of legal age to enter into contracts</li>
                <li>Understood the limitations of liability and dispute resolution</li>
                <li>Reviewed our <Link to="/privacy" className="text-emerald hover:text-emerald-warm underline">Privacy Policy</Link></li>
              </ul>
            </div>

            <p className="text-xs text-gray-400 text-center">Version 3.0 (Consolidated) &middot; Effective February 7, 2026 &middot; Last Updated February 3, 2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/">
                <img src="/images/logo.svg" alt="NudgePaid" className="h-6 w-auto mb-4" />
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
