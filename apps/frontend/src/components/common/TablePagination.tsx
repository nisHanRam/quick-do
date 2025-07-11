import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const TablePagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, idx) => (
          <PaginationItem key={idx}>
            <Button
              size="sm"
              variant={currentPage === idx + 1 ? "default" : "ghost"}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Button>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
