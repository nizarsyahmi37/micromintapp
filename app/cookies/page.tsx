import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences, 
            analyzing how you use our platform, and helping with security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, account authentication, and remembering your preferences. 
              You cannot opt out of these cookies.
            </p>

            <h3 className="text-xl font-medium">Performance Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our platform.
            </p>

            <h3 className="text-xl font-medium">Functionality Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering 
              your investment preferences and settings.
            </p>

            <h3 className="text-xl font-medium">Marketing Cookies</h3>
            <p className="text-muted-foreground">
              These cookies track your online activity to help advertisers deliver more relevant 
              advertising or to limit how many times you see an ad.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookie Categories We Use</h2>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Session Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Temporary cookies that expire when you close your browser. They help analyze user 
                behavior and improve our platform.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Persistent Cookies</h3>
              <p className="text-muted-foreground text-sm">
                These remain on your device until they expire or you delete them. They help remember 
                your preferences for future visits.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Third-Party Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Set by third-party services we use, such as analytics or advertising networks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            Most web browsers allow you to control cookies through their settings preferences. 
            However, limiting cookies may impact your experience using our website.
          </p>
          <div className="space-y-2">
            <p className="text-muted-foreground">To manage cookies in your browser:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies and website data</li>
              <li>Edge: Settings → Cookies and site permissions → Cookies and data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time. Any changes will be posted on this 
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have questions about our use of cookies, please contact our Privacy Team at 
            privacy@growvest.com
          </p>
        </section>

        <div className="text-sm text-muted-foreground pt-8">
          <p>Last updated: March 20, 2024</p>
          <p className="mt-2">
            Note: GrowVest is a fictional micro-investment platform created for demonstration purposes. 
            This cookie policy is for demonstration only.
          </p>
        </div>
      </div>
    </div>
  );
}