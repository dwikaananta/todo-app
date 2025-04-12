import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { AppSidebarContent } from "./app-sidebar-content";
import { AppSidebarFooter } from "./app-sidebar-footer";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-semibold text-2xl">Todo App</h1>
      </SidebarHeader>
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
