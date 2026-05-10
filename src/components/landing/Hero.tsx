"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              The Ultimate Barbershop OS
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
              Cut the Chaos. <br />
              <span className="text-muted-foreground">Grow Your Shop.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Trimly is the all-in-one platform designed specifically for modern barbershops. 
              Manage bookings, automate marketing, and skyrocket your revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base gap-2" asChild>
                <Link href="/signup">
                  Get Started for Free <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base gap-2">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border bg-card shadow-2xl overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
            {/* Placeholder for dashboard screenshot */}
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <span className="text-lg font-medium italic">[ Dashboard Mockup Screenshot ]</span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
