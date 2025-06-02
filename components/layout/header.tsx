"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Trophy, 
  Menu, 
  X,
  PiggyBank
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if the current path is the active path
  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: TrendingUp },
    { name: "Community", path: "/community", icon: Users },
    { name: "Learn", path: "/learn", icon: BookOpen },
    { name: "Challenges", path: "/challenges", icon: Trophy },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <PiggyBank className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">MicroMint</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`px-3 py-2 rounded-md flex items-center space-x-1 transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive(item.path) ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-3 bg-background border-b">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  isActive(item.path) ? "bg-accent text-accent-foreground" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
            <Button className="w-full justify-start" asChild>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;