"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const DATA_PER_PAGE = 10;

interface PaginationProps {
  disabled?: boolean;
  currentPage?: number;
  totalData?: number;
  dataPerPage?: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  disabled,
  currentPage = 1,
  totalData = 0,
  dataPerPage = DATA_PER_PAGE,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalData / dataPerPage);
  const maxVisibleButtons = 5;

  const generatePageNumbers = () => {
    const pages = [];

    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );

    let endPage = startPage + maxVisibleButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  const pages = generatePageNumbers();

  useEffect(() => {
    if (currentPage && totalPages && totalData) {
      if (currentPage > totalPages) {
        onPageChange(totalPages);
      }
    }
  }, [currentPage, totalData, totalPages, onPageChange]);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <Button
        size={"sm"}
        variant={"outline"}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
      >
        &lt;
      </Button>
      {pages[0] > 1 && (
        <>
          <Button
            size={"sm"}
            variant={"outline"}
            className={cn(
              currentPage === 1
                ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                : "bg-gray-300 dark:bg-zinc-800"
            )}
            disabled={disabled}
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
          {pages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}
      {pages.map((page) => (
        <Button
          key={page}
          size={"sm"}
          variant={"outline"}
          className={cn(
            currentPage === page
              ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
              : "bg-gray-300 dark:bg-zinc-800"
          )}
          disabled={disabled}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <Button
            size={"sm"}
            variant={"outline"}
            className={cn(
              currentPage === totalPages
                ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                : "bg-gray-300 dark:bg-zinc-800"
            )}
            disabled={disabled}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </Button>
        </>
      )}
      <Button
        size={"sm"}
        variant={"outline"}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
      >
        &gt;
      </Button>
    </div>
  );
};
