"use client"
import Link from "next/link";
import React from "react";
import { Input } from "./input";
import Image from "next/image";
import logout from "../../../public/icons/logout.png";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import { links, privacyPolicy } from "@/app/data/data";

export default function Sidebar() {
    const activeRoute = usePathname();
    const isActive = activeRoute === "/logout";

    return (
        <aside className="hidden border-r bg-white md:block h-full">
            <div className="flex h-full max-h-screen flex-col gap-[10px] px-4 lg:px-6">
                {/* Logo */}
                <div className="flex items-center justify-center lg:h-[60px] lg:py-12">
                    <Link
                        href="/"
                        className="text-[41.09px] leading-[57.32px] text-center font-bold"
                    >
                        <span>Efandex</span>
                    </Link>
                </div>

                {/* Search Input */}
                <div className="relative pb-4">
                    <Input type="text" placeholder="Search..." />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-between flex-1">
                    <nav className="grid items-start text-sm font-medium gap-[10px]">
                        {links.map((link) => (
                            <NavLink key={link.id} link={link} />
                        ))}
                    </nav>

                    {/* Footer Links */}
                    <div className="pb-4">
                        <nav className="grid items-start text-sm font-medium gap-[10px]">
                            <NavLink link={privacyPolicy} />
                            <Link
                                href="/logout"
                                className={`flex items-center gap-3 rounded-[8px] px-3 py-2 transition-all ${isActive ? "bg-red-600" : "bg-red-500"
                                    } text-white hover:bg-red-600`}
                            >
                                <Image
                                    src={logout}
                                    alt={`logout-icon`}
                                    className="h-4 w-4"
                                />
                                Logout
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    );
}

