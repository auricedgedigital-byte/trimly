"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Plus, Zap } from "lucide-react";

export default function ReactivationPage() {
  const campaigns = [
    {
      name: "90-Day Inactive Cleanup",
      status: "Active",
      sent: 124,
      converted: 18,
      rate: "14.5%",
    },
    {
      name: "Birthday Special",
      status: "Active",
      sent: 45,
      converted: 12,
      rate: "26.6%",
    },
    {
      name: "Missed Appointment Follow-up",
      status: "Paused",
      sent: 89,
      converted: 5,
      rate: "5.6%",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reactivation Campaigns</h1>
          <p className="text-muted-foreground">Automated outreach to win back inactive clients.</p>
        </div>
        <Button className="gap-2 bg-primary">
          <Plus className="h-4 w-4" /> Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-primary-foreground/80 text-sm">Total Revenue Recovered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$2,450</div>
            <p className="text-xs opacity-70 mt-1">From 35 recovered clients</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">Avg. Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15.2%</div>
            <p className="text-xs text-green-500 font-medium mt-1">+2.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">Active Automations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">2 paused</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Campaigns</CardTitle>
          <CardDescription>Manage and monitor your automated marketing flows.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${campaign.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{campaign.name}</p>
                    <p className="text-sm text-muted-foreground">{campaign.status} • {campaign.sent} messages sent</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium">{campaign.converted} Conversions</p>
                    <p className="text-xs text-muted-foreground">{campaign.rate} conv. rate</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      {campaign.status === "Active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
