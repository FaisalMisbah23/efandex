"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./sheet";
import { Button } from "./button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logout from "../../../public/icons/logout.png";
import { links, privacyPolicy } from "@/app/data/data";
import NavElements from "./nav-elements";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTitle className="hidden">
                <VisuallyHidden.Root>Mobile Navigation</VisuallyHidden.Root>
            </SheetTitle>

            <div className="flex items-center justify-evenly px-6 py-4">
                {/* Sheet Trigger: Mobile Hamburger Menu */}
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <NavElements />
            </div>

            {/* Sheet Content: Menu Panel */}
            <SheetContent side="left" className="flex flex-col w-64">
                {/* Logo Section */}
                <div className="flex items-center justify-center py-4 border-b">
                    <Link href="/" className="text-[28px] leading-[36px] font-bold text-center">
                        Efandex
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-3 text-lg font-medium flex-1 overflow-y-auto p-4">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            href={link.path}
                            className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                            <Image
                                src={link.icon}
                                alt={`${link.title}-icon`}
                                className="h-5 w-5"
                            />
                            {link.title}
                        </Link>
                    ))}
                </nav>

                {/* Footer Links */}
                <div className="mt-auto border-t pt-4">
                    <nav className="grid gap-2 text-sm font-medium">
                        {/* Privacy Policy Link */}
                        <Link
                            href={privacyPolicy.path}
                            className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                            <Image
                                src={privacyPolicy.icon}
                                alt={`${privacyPolicy.title}-icon`}
                                className="h-5 w-5"
                            />
                            {privacyPolicy.title}
                        </Link>

                        {/* Logout Link */}
                        <Link
                            href="/logout"
                            className="flex items-center gap-4 rounded-xl px-3 py-2 bg-red-500 text-white hover:bg-red-600"
                        >
                            <Image
                                src={logout}
                                alt="logout-icon"
                                className="h-5 w-5"
                            />
                            Logout
                        </Link>
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
}
