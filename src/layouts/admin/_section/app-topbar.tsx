import { SidebarTrigger } from "@/components/ui/sidebar";

export const AppTopbar = () => {
  return (
    <div className="h-[7vh] flex justify-between px-4 items-center bg-primary-foreground border-b border-zinc-200">
      <SidebarTrigger />
    </div>
  );
};
