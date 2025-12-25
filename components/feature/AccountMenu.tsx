"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/lib/store";
import { ChevronUp, LogOut, Users } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function AccountMenu() {
    const router = useRouter();
    const { currentBrand } = useAppStore();
    const { state } = useSidebar();

    const handleLogout = () => {
        router.push("/");
    };

    const brandName = currentBrand?.name || "Acme Corp";
    const brandInitial = brandName.charAt(0).toUpperCase();
    const isCollapsed = state === "collapsed";

    return (
        <div className="flex flex-col gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full outline-none">
                    {isCollapsed ? (
                        <div className="flex items-center justify-center py-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                                <span className="text-white dark:text-zinc-900 font-bold text-sm">{brandInitial}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 px-2 py-3 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 dark:bg-white shrink-0">
                                <span className="text-white dark:text-zinc-900 font-bold text-sm">{brandInitial}</span>
                            </div>
                            <div className="flex flex-col gap-0.5 flex-1 min-w-0 text-left">
                                <span className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                                    {brandName}
                                </span>
                            </div>
                            <ChevronUp className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                        </div>
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Switch Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 dark:text-red-400">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {!isCollapsed && (
                <div className="flex items-center justify-between px-2 py-2 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs text-muted-foreground">v1.0</span>
                    <ModeToggle />
                </div>
            )}

            {isCollapsed && (
                <div className="flex flex-col items-center gap-2 py-2 border-t border-zinc-200 dark:border-zinc-800">
                    <ModeToggle />
                </div>
            )}
        </div>
    );
}
