"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useFindTodoById } from "@/modules/todos/query";
import { useFindTodoState } from "./context";

export const FindTodo = () => {
  const { open, toggle, id } = useFindTodoState();

  const { data } = useFindTodoById(id);

  return (
    <Sheet open={open} onOpenChange={() => toggle()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail Todo</SheetTitle>
          <SheetDescription>
            Please pres <span className="font-semibold">ESC</span> for close
            this action
          </SheetDescription>
        </SheetHeader>
        <div className="p-3 space-y-6">
          <div className="text-center">
            <h1 className="font-semibold text-xl">{data?.todo?.title}</h1>
            <p className="text-base">{data?.todo?.description}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
