"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function NavLink({ link }) {
    const activeRoute = usePathname();
    const isActive = activeRoute === link.path;
    return (
        <Link
            href={link.path}
            className={`group flex items-center gap-3 rounded-[8px] px-3 py-2 transition-all ${isActive ? "bg-black text-white" : "text-[#09090A] hover:bg-black hover:text-white"
                }`}
        >
            <Image
                src={link.icon}
                alt={`${link.title}-icon`}
                className={`h-4 w-4 transition-all ${isActive ? "invert" : ""
                    } group-hover:invert`}
            />
            {link.title}
        </Link>
    )
}