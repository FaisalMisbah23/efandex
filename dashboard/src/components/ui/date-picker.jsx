"use client"

import React, { useState } from "react"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
    const [date, setDate] = useState();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "flex items-center justify-around marker:font-medium",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span>Today</span>}
                    <CalendarDays />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
