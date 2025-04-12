import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppFooter } from "./_section/app-footer";
import { AppSidebar } from "./_section/app-sidebar";
import { AppTopbar } from "./_section/app-topbar";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full">
        <AppTopbar />
        <div className="grow p-6">{children}</div>
        <AppFooter />
      </main>
    </SidebarProvider>
  );
};
