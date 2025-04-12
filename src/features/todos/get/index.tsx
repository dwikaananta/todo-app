"use client";

import { Pagination } from "@/components/pagination";
import { useGetTodos } from "@/modules/todos/query";
import { useMemo, useState } from "react";
import { BtnCreateSection } from "./section/btn-create";
import { FilterSection } from "./section/filter";
import { TableSection } from "./section/table";

export const GetTodos = () => {
  const [page, setPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetTodos({ dataPerPage, page, search });

  const disabled = useMemo(() => isFetching, [isFetching]);

  return (
    <div className="space-y-6">
      <BtnCreateSection />
      <FilterSection search={search} setSearch={setSearch} />
      <TableSection
        disabled={disabled}
        todos={data?.todos}
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
