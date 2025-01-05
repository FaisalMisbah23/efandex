"use client";

import { useState } from "react";
import Pagination from "./pagination";
import TableHead from "./table-head";
import { table2 } from "@/app/data/data";
import RegistrationTable from "./registration-table";

export default function RegistrationsTable({ data }) {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 4;
    const filteredRegistrations = data?.filter((registration) =>
        registration.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredRegistrations.length / rowsPerPage);
    const displayedRegistrations = filteredRegistrations.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="w-full px-4 pt-6 pb-12 bg-white shadow rounded-md">
            {/* Table Header */}
            <TableHead title={"New User Registrations"} search={search} setSearch={setSearch} />

            <div className="overflow-x-auto">
                <RegistrationTable
                    tableHeadings={table2}
                    displayedRegistrations={displayedRegistrations}
                />
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
