import { auth } from "@/auth";
import { AdminLayout } from "@/layouts/admin";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
