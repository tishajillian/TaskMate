"use client"

import { useState } from "react"
import Image from "next/image"
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
    const { theme, toggleTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className={cn(
                    "relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 rounded-2xl",
                    !mobileMenuOpen && "rounded-full"
                )}>
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

                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
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