import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            At GrowVest, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our micro-investment platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Date of birth and government ID</li>
              <li>Financial information and bank details</li>
              <li>Social Security number or tax ID</li>
              <li>Investment preferences and goals</li>
              <li>Device information and usage data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To process your investments and transactions</li>
            <li>To provide personalized investment recommendations</li>
            <li>To maintain and improve our platform</li>
            <li>To communicate with you about your account</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To detect and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="text-muted-foreground mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Financial service providers and partners</li>
            <li>Regulatory authorities and law enforcement</li>
            <li>Third-party service providers</li>
            <li>Other users (only information you choose to share)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal 
            information, including encryption, access controls, and regular security assessments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground">
            We use cookies and similar tracking technologies to improve your experience, understand 
            platform usage, and personalize content. You can control cookie settings through your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our services are not intended for individuals under 18. We do not knowingly collect or 
            maintain information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy periodically. We will notify you of any material changes 
            through our platform or via email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy or your personal information, please contact 
            our Privacy Team at privacy@growvest.com
          </p>
        </section>

        <div className="text-sm text-muted-foreground pt-8">
          <p>Last updated: March 20, 2024</p>
          <p className="mt-2">
            Note: GrowVest is a fictional micro-investment platform created for demonstration purposes. 
            This privacy policy is for demonstration only.
          </p>
        </div>
      </div>
    </div>
  );
}