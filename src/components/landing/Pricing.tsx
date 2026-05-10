"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$297",
    description: "Perfect for solo barbers or small shops getting started.",
    features: [
      "Online Booking",
      "Client CRM",
      "Automated SMS Reminders",
      "Unified Inbox",
      "Basic Analytics",
    ],
  },
  {
    name: "Pro",
    price: "$497",
    description: "The complete solution for growing barbershops.",
    features: [
      "Everything in Starter",
      "Reactivation Campaigns",
      "Lead Magnets",
      "Advanced Analytics",
      "Multiple Staff Accounts",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Exec",
    price: "$997",
    description: "Scale your empire with enterprise-grade tools.",
    features: [
      "Everything in Pro",
      "Multi-location Support",
      "Custom Brand App",
      "Dedicated Account Manager",
      "API Access",
      "White-label Reports",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Choose your tier</h2>
          <p className="mt-4 text-muted-foreground">
            Simple, transparent pricing to help you grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border flex flex-col relative ${
                tier.popular ? "border-primary shadow-xl scale-105 z-10 bg-card" : "bg-card"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="mt-4 text-muted-foreground">{tier.description}</p>
              
              <ul className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="mt-10 w-full" 
                variant={tier.popular ? "default" : "outline"}
                asChild
              >
                <a href="/signup">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
