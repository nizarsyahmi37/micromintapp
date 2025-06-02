import React from 'react';

export default function DisclosuresPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Disclosures</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Investment Risks</h2>
          <p className="text-muted-foreground mb-4">
            Investing involves risk, including the possible loss of principal. Past performance does not 
            guarantee future results. Any historical returns, expected returns, or probability projections 
            may not reflect actual future performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Platform Disclosures</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Educational Purpose</h3>
              <p className="text-muted-foreground">
                GrowVest provides financial information for educational purposes only. We do not provide 
                personalized investment advice or recommendations. Always conduct your own research and 
                consult with qualified financial advisors before making investment decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Not a Financial Advisor</h3>
              <p className="text-muted-foreground">
                GrowVest is not a registered investment advisor, broker-dealer, or financial institution. 
                We do not provide tax, legal, or investment advice.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Investment Products</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Investment products are not FDIC insured
            </li>
            <li>
              Investment products are not bank guaranteed
            </li>
            <li>
              Investment products may lose value
            </li>
            <li>
              Cryptocurrency investments are highly speculative and volatile
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Content</h2>
          <p className="text-muted-foreground">
            GrowVest may display content from third-party sources. This content is provided for 
            informational purposes only. We do not guarantee the accuracy, completeness, or usefulness 
            of this information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Market Data</h2>
          <p className="text-muted-foreground">
            Market data is provided by third-party sources that we believe to be reliable, but we make 
            no representations or warranties regarding the accuracy of such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Fees and Charges</h2>
          <p className="text-muted-foreground mb-4">
            All fees and charges are clearly disclosed in our pricing section. Additional fees may apply 
            for certain services or transactions.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Transaction fees may apply to certain investments</li>
            <li>Premium features require a paid subscription</li>
            <li>Third-party fees may apply for certain services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conflict of Interest</h2>
          <p className="text-muted-foreground">
            GrowVest may receive compensation from third parties for featuring certain investment 
            products or services. This compensation may influence the information and products we display 
            on our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Regulatory Information</h2>
          <p className="text-muted-foreground">
            GrowVest complies with applicable financial regulations and maintains appropriate licenses 
            where required. Our services are available only in jurisdictions where permitted by law.
          </p>
        </section>

        <div className="text-sm text-muted-foreground pt-8">
          <p>Last updated: March 20, 2024</p>
          <p className="mt-2">
            Note: GrowVest is a fictional micro-investment platform created for demonstration purposes. 
            These disclosures are for demonstration only.
          </p>
        </div>
      </div>
    </div>
  );
}