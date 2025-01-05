import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="flex items-center justify-between mt-4">
            <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1 bg-white text-black hover:bg-black hover:text-white"
            >
                <ChevronLeft size={16} />
                Previous
            </Button>

            <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, idx) => (
                    <Button
                        key={idx + 1}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-3 py-1 rounded ${currentPage === idx + 1
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-black hover:text-white"
                            }`}
                    >
                        {idx + 1}
                    </Button>
                ))}
            </div>

            <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 bg-white text-black hover:bg-black hover:text-white"
            >
                Next
                <ChevronRight size={16} />
            </Button>
        </div>
    );
}
