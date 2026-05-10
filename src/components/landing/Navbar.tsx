"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <Scissors className="h-6 w-6" />
          <span>TRIMLY</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
