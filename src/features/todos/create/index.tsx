"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCreateTodoState } from "./context";
import { FormSection } from "./section/form";

export const CreateTodo = () => {
  const { open, toggle } = useCreateTodoState();

  return (
    <Sheet open={open} onOpenChange={toggle}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Todo</SheetTitle>
          <SheetDescription>
            Please pres <span className="font-semibold">ESC</span> for close
            this action
          </SheetDescription>
        </SheetHeader>
        <FormSection />
      </SheetContent>
    </Sheet>
  );
};
