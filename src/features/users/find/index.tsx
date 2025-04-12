"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useFindUserById } from "@/modules/users/query";
import Image from "next/image";
import { useFindUserState } from "./context";

export const FindUser = () => {
  const { open, toggle, id } = useFindUserState();

  const { data } = useFindUserById(id);

  return (
    <Sheet open={open} onOpenChange={() => toggle()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detail User</SheetTitle>
          <SheetDescription>
            Please pres <span className="font-semibold">ESC</span> for close
            this action
          </SheetDescription>
        </SheetHeader>
        <div className="p-3 space-y-6">
          {data?.user?.image && (
            <Image
              src={data.user.image}
              width={200}
              height={200}
              alt=""
              className="mx-auto rounded-full"
            />
          )}
          <div className="text-center">
            <h1 className="font-semibold text-xl">{data?.user?.name}</h1>
            <p className="text-base">{data?.user?.email}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
