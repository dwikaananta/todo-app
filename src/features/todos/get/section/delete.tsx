import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteTodo } from "@/modules/todos/query";
import { FaTrash } from "react-icons/fa";

export const DeleteSection = ({
  disabled,
  id,
}: {
  disabled: boolean;
  id: string;
}) => {
  const { mutateAsync } = useDeleteTodo();

  const handleDelete = async () => {
    await mutateAsync({ id });
  };

  return (
    <DropdownMenuItem
      disabled={disabled}
      onClick={handleDelete}
      variant="destructive"
    >
      <FaTrash />
      Delete
    </DropdownMenuItem>
  );
};
