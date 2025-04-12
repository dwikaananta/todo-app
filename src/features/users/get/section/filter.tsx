import { Search } from "@/components/search";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

export const FilterSection = ({ search, setSearch }: Props) => {
  return (
    <div>
      <Search onChange={setSearch} value={search} />
    </div>
  );
};
