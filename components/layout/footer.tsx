import Link from "next/link";
import { PiggyBank } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2">
              <PiggyBank className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">MicroMint</span>
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              Making investment accessible to everyone through micro-investing
              and community-powered financial education.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="/learn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link 
                  href="/challenges"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Challenges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/press"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/disclosures"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MicroMint. All rights reserved.</p>
          <p className="mt-2">
            MicroMint is a fictional micro-investment platform created for demonstration purposes.
            Not a real financial service.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;