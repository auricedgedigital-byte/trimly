"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  DollarSign 
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      name: "Total Revenue",
      value: "$12,450",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      name: "Appointments",
      value: "156",
      change: "+4.3%",
      icon: Calendar,
    },
    {
      name: "New Clients",
      value: "42",
      change: "+18.2%",
      icon: Users,
    },
    {
      name: "Avg. Ticket",
      value: "$45.00",
      change: "+2.1%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Here's what's happening in your shop today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 font-medium mt-1">
                {stat.change} <span className="text-muted-foreground">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div>
                      <p className="font-medium">Client Name {i}</p>
                      <p className="text-sm text-muted-foreground">Haircut & Beard Trim</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">2:30 PM</p>
                    <p className="text-xs text-muted-foreground">Confirmed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
            <span className="text-muted-foreground italic">Revenue Chart Placeholder</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
