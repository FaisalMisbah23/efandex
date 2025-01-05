"use client";

import { useState } from "react";
import Pagination from "./pagination";
import TableHead from "./table-head";
import { table1 } from "@/app/data/data";
import BookingTable from "./bookings-table";

export default function BookingsTable({ tableHeadings, data }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 4;
  const filteredBookings = data?.filter((booking) =>
    booking.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBookings.length / rowsPerPage);
  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full px-4 pt-6 pb-12 bg-white shadow rounded-md overflow-x-scroll">
      {/* Table Header */}
      <TableHead title={"Recent Bookings"} search={search} setSearch={setSearch} />

      <div className="overflow-x-auto">
        <BookingTable tableHeadings={table1} displayedBookings={displayedBookings} />
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
