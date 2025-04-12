"use client";

import { Pagination } from "@/components/pagination";
import { useGetUsers } from "@/modules/users/query";
import { useMemo, useState } from "react";
import { FilterSection } from "./section/filter";
import { TableSection } from "./section/table";

export const GetUsers = () => {
  const [page, setPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetUsers({ dataPerPage, page, search });

  const disabled = useMemo(() => isFetching, [isFetching]);

  return (
    <div className="space-y-6">
      <FilterSection search={search} setSearch={setSearch} />
      <TableSection
        disabled={disabled}
        users={data?.users}
        page={page}
        dataPerPage={dataPerPage}
      />
      <Pagination
        onPageChange={setPage}
        currentPage={page}
        dataPerPage={dataPerPage}
        disabled={disabled}
        totalData={data?.totalData}
      />
    </div>
  );
};
