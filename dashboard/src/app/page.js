import Navbar from "@/components/ui/navbar";
import StatsCard from "@/components/ui/stats-card";
import { registrations, stats } from './data/data';
import BookingsTable from "@/components/ui/data-table";
import { bookings } from "./data/data";
import RegistrationsTable from "@/components/ui/data-table2";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="container mx-auto p-4 flex flex-col gap-6">

        {/* Stats Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard title="Active Users" data={stats.activeUsers} />
          <StatsCard title="Total Properties" data={stats.totalProperties} />
          <StatsCard title="Total Revenue" data={stats.totalRevenue} />
        </div>

        {/* Bookings Table Section */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <BookingsTable data={bookings} />
        </div>

        {/* Registrations Table Section */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <RegistrationsTable data={registrations} />
        </div>
      </div>
    </>
  );
}
