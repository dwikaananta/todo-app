import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { todoSchema } from "@/modules/todos/schema";
import { z } from "zod";
import { TableActionSection } from "./table-action";

interface Props {
  page: number;
  dataPerPage: number;
  todos?: z.infer<typeof todoSchema>[];
  disabled: boolean;
}

export const TableSection = ({ todos, dataPerPage, page, disabled }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo, index) => (
          <TableRow key={todo.id}>
            <TableCell>
              {page * dataPerPage - dataPerPage + 1 + index}
            </TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              <TableActionSection disabled={disabled} todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
