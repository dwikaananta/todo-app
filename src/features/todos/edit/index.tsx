"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEditTodoState } from "./context";
import { FormSection } from "./section/form";

export const EditTodo = () => {
  const { id, open, toggle } = useEditTodoState();

  return (
    <Sheet open={open} onOpenChange={() => toggle()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Todo</SheetTitle>
          <SheetDescription>
            Please pres <span className="font-semibold">ESC</span> for close
            this action
          </SheetDescription>
        </SheetHeader>
        {id && <FormSection id={id} />}
      </SheetContent>
    </Sheet>
  );
};
