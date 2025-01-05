import { ArrowRight, Circle, CircleCheck } from "lucide-react";

export default function BookingTable({ tableHeadings, displayedBookings }) {
    return (
        <div className="overflow-x-scroll w-full">
            <table className="w-full text-left">
                {/* Table Head */}
                <thead className="bg-muted/50">
                    <tr className="border-b-2 border-b-muted">
                        {tableHeadings.map((item, idx) => (
                            <th
                                key={idx}
                                className="p-4 text-sm md:text-base"
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {displayedBookings.map((booking, idx) => (
                        <tr
                            key={idx}
                            className="hover:bg-muted/50 border-b-2 border-b-muted"
                        >
                            {/* Name */}
                            <td className="px-4 py-6 text-sm md:text-base">
                                {booking.name}
                            </td>

                            {/* Status */}
                            <td className="px-4 py-6">
                                <div
                                    className={`px-2 py-1 text-sm font-medium flex items-center gap-2 rounded-full  
                                    ${booking.status === "Completed"
                                        ? "bg-green-100 text-green-600"
                                        : booking.status === "In Progress"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                    }
                                `}
                                >
                                    {booking.status === "Completed" ? (
                                        <CircleCheck size={16} />
                                    ) : (
                                        <Circle
                                            fill={`${
                                                booking.status === "In Progress"
                                                    ? "#ca8a04"
                                                    : "#dc2626"
                                            }`}
                                            size={8}
                                        />
                                    )}
                                    <span>{booking.status}</span>
                                </div>
                            </td>

                            {/* Price */}
                            <td className="px-4 py-6 text-sm md:text-base">
                                {booking.price}
                            </td>

                            {/* Capacity */}
                            <td className="px-4 py-6 text-sm md:text-base">
                                {booking.capacity}
                            </td>

                            {/* Duration */}
                            <td className="px-4 py-6 text-sm md:text-base whitespace-nowrap">
                                {booking.duration.startDate.substr(0, 6)} -{" "}
                                {booking.duration.endDate}
                            </td>

                            {/* Details Button */}
                            <td className="px-4 py-6 cursor-pointer flex gap-2 text-sm md:text-base">
                                <span>View Booking Details</span>
                                <ArrowRight />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
