"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AppointmentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage your schedule and bookings.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> New Appointment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
        </CardHeader>
        <CardContent className="h-[600px] flex items-center justify-center border-2 border-dashed rounded-lg">
          <span className="text-muted-foreground italic">Interactive Calendar Placeholder</span>
        </CardContent>
      </Card>
    </div>
  );
}
