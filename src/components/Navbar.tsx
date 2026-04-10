"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "@/context/ThemeContext"
import { Menu, Moon, SunDim, X } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]
export default function Navbar() {
    const pathname = usePathname()
    const { theme, toggleTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentHash, setCurrentHash] = useState("")
    
    useEffect(() => {
        const syncHash = () => setCurrentHash(window.location.hash)
        syncHash()
        window.addEventListener("hashchange", syncHash)
        window.addEventListener("popstate", syncHash)
        return () => {
            window.removeEventListener("hashchange", syncHash)
            window.removeEventListener("popstate", syncHash)
        }
    }, [pathname])

    const isLinkActive = (href: string) => {
        if (href === "/#features") {
            return pathname === "/" && currentHash === "#features"
        }
        if (href === "/") {
            return pathname === "/" && currentHash !== "#features"
        }
        return pathname === href
    }

    return (
        <nav className="sticky top-0 z-50">
            <div className="mx-auto max-w-7xl">
                <div className="relative bg-white dark:bg-black transition-all duration-300">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center group">
                                <div className="h-8 flex items-center justify-center transition-transform group-hover:scale-105">
                                    <Image
                                        src="/TaskMate.svg"
                                        alt="TaskMate Logo"
                                        width={120}
                                        height={32}
                                        className="dark:invert"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center gap-1 rounded-full bg-stone-100 dark:bg-zinc-800/80 p-1">
                            {navLinks.map((link) => {
                                const active = isLinkActive(link.href)
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => {
                                            if (link.href.includes("#")) {
                                                const [, hash] = link.href.split("#")
                                                setCurrentHash(hash ? `#${hash}` : "")
                                            } else {
                                                setCurrentHash("")
                                            }
                                        }}
                                        className={cn(
                                            "px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200",
                                            active
                                                ? "bg-white text-gray-900 shadow-sm dark:bg-zinc-900 dark:text-white"
                                                : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-zinc-700/70"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex items-center space-x-3">
                            <Button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-700 hover:bg-gray-500 transition-all duration-200 cursor-pointer"
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <Moon className="text-white" />
                                ) : (
                                    <SunDim className="text-yellow-300" />
                                )}
                            </Button>
                            <Link
                                href="/get-started"
                                className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Get Started
                            </Link>
                            <Button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                aria-label="Toggle mobile menu"
                            >
                                {mobileMenuOpen ? (
                                    <X className="text-gray-700 dark:text-gray-200" />
                                ) : (
                                    <Menu className="text-gray-700 dark:text-gray-200" />
                                )}
                            </Button>
                        </div>
                    </div>
                    <div
                        className="mobile-menu md:hidden"
                        data-open={mobileMenuOpen}
                    >
                        <div className="overflow-hidden">
                            <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-3 pb-4 px-4">
                                <div className="space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/get-started"
                                        className="block text-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black rounded-full shadow-md mt-2 hover:shadow-lg transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}