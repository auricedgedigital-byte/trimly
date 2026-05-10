"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Send } from "lucide-react";

export default function InboxPage() {
  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Unified Inbox</h1>
        <p className="text-muted-foreground">All your client messages in one place.</p>
      </div>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Sidebar */}
        <Card className="w-80 flex flex-col overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search messages..."
                className="w-full pl-9 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${i === 1 ? "bg-muted" : ""}`}>
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{String.fromCharCode(64 + i)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold truncate">Client Name {i}</p>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">Hey, I need to reschedule my appointment...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between bg-muted/30">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Client Name 1</p>
                <p className="text-xs text-green-500 font-medium">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                <p className="text-sm">Hey, I need to reschedule my appointment for tomorrow. Is 4 PM available?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                <p className="text-sm">Hi! Let me check the schedule for you. One second.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                <p className="text-sm">Yes, 4 PM tomorrow is available! Should I book that for you?</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 h-10 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
