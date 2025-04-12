import { Input } from "@/components/ui/input";
import { useRef } from "react";

export const Search = ({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) => {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current); // Clear the previous timeout if the user types again
    }

    debounceTimeout.current = setTimeout(() => {
      onChange((e.target as HTMLInputElement).value); // Update search state after 1500ms
    }, 400); // 400ms debounce delay
  };

  return (
    <Input
      placeholder="Search . . ."
      onKeyUp={handleKeyUp}
      className="w-full max-w-xs"
      defaultValue={value || ""}
    />
  );
};
