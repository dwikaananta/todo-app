import { userSchema } from "@/modules/users/schema";
import { z } from "zod";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { CiMenuFries } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useFindUserState } from "../../find/context";

interface Props {
  disabled: boolean;
  user: z.infer<typeof userSchema>;
}

export const TableActionSection = ({ disabled, user }: Props) => {
  const { toggle } = useFindUserState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={disabled} asChild>
        <Button variant={"secondary"} disabled={disabled}>
          <CiMenuFries />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={disabled} onClick={() => toggle(user.id)}>
          <FaEye />
          Detail
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
