import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to GrowVest. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>&quot;Platform&quot; refers to GrowVest&apos;s website, mobile applications, and services.</li>
              <li>&quot;User&quot; refers to any individual or entity that accesses or uses the Platform.</li>
              <li>&quot;Content&quot; refers to any information, text, graphics, or other materials uploaded, downloaded, or appearing on the Platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="mb-4">
              To use certain features of the Platform, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Investment Services</h2>
            <p className="mb-4">
              GrowVest provides micro-investment services subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Investment decisions are made at your own risk</li>
              <li>Past performance is not indicative of future results</li>
              <li>We do not provide personalized investment advice</li>
              <li>You should consult with financial advisors for professional guidance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
            <p className="mb-4">
              Users agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate other users or entities</li>
              <li>Distribute spam or malicious content</li>
              <li>Attempt to gain unauthorized access to other accounts</li>
              <li>Engage in market manipulation or fraudulent activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Content and Intellectual Property</h2>
            <p className="mb-4">
              All content on the Platform, unless otherwise specified, is the property of GrowVest. Users retain ownership of their content but grant GrowVest a license to use, modify, and distribute it on the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
            <p className="mb-4">
              Our collection and use of personal information is governed by our Privacy Policy. By using the Platform, you consent to our data practices as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              GrowVest is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform or any investments made through it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued use of the Platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-4">
              Email: legal@growvest.com<br />
              Address: 123 Investment Street, Financial District<br />
              City, State 12345
            </p>
          </section>

          <div className="text-sm text-muted-foreground mt-12">
            <p>Last updated: March 20, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}