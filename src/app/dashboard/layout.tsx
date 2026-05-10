import { Sidebar } from "@/components/dashboard/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b flex items-center justify-between px-8 bg-background">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Dashboard
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right mr-2 hidden sm:block">
              <p className="text-sm font-semibold">Alex Barber</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
