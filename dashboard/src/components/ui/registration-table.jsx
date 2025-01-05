import { ArrowRight, Circle, CircleCheck, CircleX } from "lucide-react";

export default function RegistrationTable({ tableHeadings, displayedRegistrations }) {
    return (
        <table className="w-full text-left">
            <thead className="bg-muted/50">
                <tr className=" border-b-2 border-b-muted">
                    {tableHeadings.map((item, idx) => (
                        <th key={idx} className="p-4">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {displayedRegistrations.map((registration, idx) => (
                    <tr
                        key={idx}
                        className="hover:bg-muted/50  border-b-2 border-b-muted"
                    >
                        <td className="px-4 py-6">{registration.name}</td>
                        <td className="px-4 py-6 ">
                            <div
                                className={`px-2 py-1 text-sm font-medium flex items-center gap-2 rounded-full  
                    ${registration.company === "Guest"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-yellow-100 text-yellow-600"
                                    }
                  `}
                            >
                                <Circle
                                    fill={`${registration.company === "Guest"
                                        ? "#00A3B4"
                                        : "#ca8a04"
                                        }`}
                                    size={8}
                                />
                                <span>{registration.company}</span>
                            </div>
                        </td>

                        <td className="px-4 py-6">{registration.joinDate}</td>
                        <td className="px-4 py-6">{registration.email}</td>
                        <td className="px-4 py-6 cursor-pointer flex gap-2">
                            <div
                                className="px-2 py-1 text-sm font-medium flex items-center gap-2 rounded-full bg-red-100 text-red-600">
                                <CircleX size={16} />
                                <span>Decline</span>
                            </div> <div
                                className="px-2 py-1 text-sm font-medium flex items-center gap-2 rounded-full bg-green-100 text-green-600">
                                <CircleCheck size={16} />
                                <span>Accept</span>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}