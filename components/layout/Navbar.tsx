"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/platform", label: "Platform" },
        { href: "/about", label: "About" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <div className="h-6 w-6 rounded bg-zinc-900 dark:bg-white flex items-center justify-center">
                        <span className="text-white dark:text-zinc-900 font-bold text-xs">K</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">Kasparro</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-foreground",
                                pathname === link.href
                                    ? "text-zinc-900 dark:text-white font-semibold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Button asChild variant="default" size="sm" className="rounded-full px-6 font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                        <Link href="/app/audit/run">Launch App</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="sr-only">
                                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                                <SheetDescription>Navigation links for mobile users</SheetDescription>
                            </div>
                            <div className="flex flex-col gap-8 mt-12">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "text-2xl font-semibold transition-colors",
                                                pathname === link.href
                                                    ? "text-zinc-900 dark:text-white"
                                                    : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-8 mt-4">
                                    <Button asChild className="w-full h-12 rounded-full text-base font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-900/10">
                                        <Link href="/app/audit/run" onClick={() => setIsOpen(false)}>Run Free Audit</Link>
                                    </Button>
                                    <p className="text-center text-xs text-zinc-400 mt-6">
                                        v1.0 Public Beta
                                    </p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
