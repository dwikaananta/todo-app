import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userSchema } from "@/modules/users/schema";
import { z } from "zod";
import { TableActionSection } from "./table-action";

interface Props {
  page: number;
  dataPerPage: number;
  users?: z.infer<typeof userSchema>[];
  disabled: boolean;
}

export const TableSection = ({ users, dataPerPage, page, disabled }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Email</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user, index) => (
          <TableRow key={user.id}>
            <TableCell>
              {page * dataPerPage - dataPerPage + 1 + index}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <TableActionSection disabled={disabled} user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
