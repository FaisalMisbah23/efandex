import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { EllipsisVertical } from "lucide-react";

export default function TableMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="p-2">
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    Option 1
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Option 2
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Option 3
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}