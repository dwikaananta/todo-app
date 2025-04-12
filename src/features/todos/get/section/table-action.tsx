import { todoSchema } from "@/modules/todos/schema";
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
import { FaEdit, FaEye } from "react-icons/fa";
import { useEditTodoState } from "../../edit/context";
import { useFindTodoState } from "../../find/context";
import { DeleteSection } from "./delete";

interface Props {
  disabled: boolean;
  todo: z.infer<typeof todoSchema>;
}

export const TableActionSection = ({ disabled, todo }: Props) => {
  const { toggle: toggleFind } = useFindTodoState();
  const { toggle: toggleEdit } = useEditTodoState();

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
        <DropdownMenuItem
          disabled={disabled}
          onClick={() => toggleFind(todo.id)}
        >
          <FaEye />
          Detail
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={disabled}
          onClick={() => toggleEdit(todo.id)}
        >
          <FaEdit />
          Edit
        </DropdownMenuItem>
        <DeleteSection disabled={disabled} id={todo.id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
