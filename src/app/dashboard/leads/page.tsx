"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Target, ExternalLink } from "lucide-react";

export default function LeadsPage() {
  const magnets = [
    {
      name: "First Cut 20% Off",
      type: "Coupon Page",
      leads: 156,
      status: "Active",
    },
    {
      name: "Grooming Guide PDF",
      type: "Ebook",
      leads: 42,
      status: "Active",
    },
    {
      name: "Summer Style Quiz",
      type: "Quiz",
      leads: 89,
      status: "Draft",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Lead Magnets</h1>
          <p className="text-muted-foreground">Grow your client list with irresistible offers.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Create New
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {magnets.map((magnet) => (
          <Card key={magnet.name}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Target className="h-5 w-5 text-primary" />
                <span className={`text-xs px-2 py-0.5 rounded-full ${magnet.status === "Active" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                  {magnet.status}
                </span>
              </div>
              <CardTitle className="mt-4">{magnet.name}</CardTitle>
              <CardDescription>{magnet.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{magnet.leads}</p>
                  <p className="text-xs text-muted-foreground">Total Leads</p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">View Leads</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
