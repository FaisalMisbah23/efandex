"use client"

import { useState } from "react";
import { ChevronDown, Bell, Globe, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import user from '../../../public/user.jpg'
import Image from "next/image";
import { currencies, languages } from "@/app/data/data";

export default function NavElements() {
    const [language, setLanguage] = useState("EN");
    const [currency, setCurrency] = useState("USD");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center justify-end gap-4">
            <Bell className="w-6 h-6 cursor-pointer" />
            <div className="flex">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2 rounded-l-[38px] bg-[#F2F2F2]">
                            <Globe /> <span> {language}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        {languages.map((lang) => (
                            <DropdownMenuItem key={lang.id} onClick={() => setLanguage(`${lang.code}`)}>
                                {lang.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-r-[38px] bg-[#F2F2F2]">
                            {currency}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        {currencies.map((curr) => (
                            <DropdownMenuItem key={curr.id} onClick={() => setCurrency(`${curr.code}`)}>
                                {curr.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <DropdownMenu
                onOpenChange={() => setIsOpen((prev) => !prev)}
            >
                <DropdownMenuTrigger asChild>
                    <div
                        className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                            <Image
                                src={user}
                                alt="user-avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}