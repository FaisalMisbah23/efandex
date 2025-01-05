import { Send } from "lucide-react";
import { Button } from "./button";
import { DatePicker } from "./date-picker";
import { Input } from "./input";
import TableMenu from "./table-menu";

export default function TableHead({ title, search, setSearch }) {
    return (
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Input
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[427px]"
            />
            <div className="flex items-center gap-2">
                <DatePicker />
                <Button>
                    <span>Export</span> <Send />
                </Button>
                <TableMenu />
            </div>
        </div>
    )
}