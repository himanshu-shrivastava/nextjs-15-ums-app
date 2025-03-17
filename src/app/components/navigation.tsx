"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav className="flex justify-center items-center p-4" >
            <Link
                href="/"
                className={ pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4" }
            >
                Home
            </Link>
            < Link
                href="/about"
                className={ pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4" }
            >
                About
            </Link>
            < Link
                href="/products/macbook"
                className={ pathname.startsWith("/products/macbook") ? "font-bold mr-4" : "text-blue-500 mr-4" }
            >
                Product
            </Link>
            |&nbsp;&nbsp;
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}
