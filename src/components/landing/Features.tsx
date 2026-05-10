"use client";

import { Calendar, Users, Zap, Target, BarChart3, Mail } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Appointment Booking",
    description: "Seamless online booking experience for your clients, with automated reminders to reduce no-shows.",
    icon: Calendar,
  },
  {
    title: "Client CRM",
    description: "Keep track of every client's history, preferences, and style notes to provide a personalized service.",
    icon: Users,
  },
  {
    title: "Reactivation Campaigns",
    description: "Automatically reach out to clients who haven't visited in a while with special offers.",
    icon: Zap,
  },
  {
    title: "Lead Magnets",
    description: "Capture new leads with customizable landing pages and promotional offers.",
    icon: Target,
  },
  {
    title: "Analytics & Reports",
    description: "Deep insights into your shop's performance, revenue trends, and staff productivity.",
    icon: BarChart3,
  },
  {
    title: "Unified Inbox",
    description: "Manage all your client communications from SMS, Email, and Social Media in one place.",
    icon: Mail,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to run a modern shop</h2>
          <p className="mt-4 text-muted-foreground">
            Stop juggling multiple tools. Trimly brings everything together in one powerful platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
