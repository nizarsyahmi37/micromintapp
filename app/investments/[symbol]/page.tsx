import { notFound } from "next/navigation";

// This data would typically come from an API or database
const validSymbols = ["vti", "vnq", "bnd", "vxus"];

export function generateStaticParams() {
  return validSymbols.map((symbol) => ({
    symbol: symbol,
  }));
}

interface InvestmentPageProps {
  params: {
    symbol: string;
  };
}

export default function InvestmentPage({ params }: InvestmentPageProps) {
  const { symbol } = params;

  // Validate the symbol
  if (!validSymbols.includes(symbol.toLowerCase())) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Investment Details: {symbol.toUpperCase()}</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Investment Overview */}
        <div className="space-y-4">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Current Price</dt>
                <dd className="font-medium">$185.42</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">24h Change</dt>
                <dd className="text-emerald-500">+2.5%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Market Cap</dt>
                <dd className="font-medium">$285.7B</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Volume (24h)</dt>
                <dd className="font-medium">$1.2B</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Expense Ratio</dt>
                <dd className="font-medium">0.03%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Dividend Yield</dt>
                <dd className="font-medium">1.75%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Beta</dt>
                <dd className="font-medium">1.02</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Assets Under Management</dt>
                <dd className="font-medium">$285.7B</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Investment Description */}
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">About {symbol.toUpperCase()}</h2>
          <p className="text-muted-foreground mb-4">
            This ETF seeks to track the performance of a benchmark index that measures the investment return
            of the overall stock market. The fund employs an indexing investment approach to track the performance
            of the index, which represents approximately 100% of the investable U.S. stock market.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Investment Strategy</h3>
              <p className="text-sm text-muted-foreground">
                The fund employs a passive management strategy designed to track the performance of the index.
                It invests all, or substantially all, of its assets in the stocks that make up the index,
                holding each stock in approximately the same proportion as its weighting in the index.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Risk Considerations</h3>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                <li>Stock market risk</li>
                <li>Investment style risk</li>
                <li>Market tracking risk</li>
                <li>Index sampling risk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}