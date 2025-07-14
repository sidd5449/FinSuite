import React from 'react';
import { SidebarProvider, Sidebar, SidebarRail } from '@/components/ui/sidebar';
import SidebarNav from '@/components/layout/sidebar-nav';
import { Header } from '@/components/layout/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-muted/40">
        <Sidebar collapsible="icon" className="hidden md:flex">
          <SidebarNav />
          <SidebarRail />
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
