import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useCreateTodoState } from "../../create/context";

export const BtnCreateSection = () => {
  const { toggle } = useCreateTodoState();

  return (
    <div className="flex justify-end">
      <Button onClick={toggle}>
        <FaPlus />
        Add New Data
      </Button>
    </div>
  );
};
