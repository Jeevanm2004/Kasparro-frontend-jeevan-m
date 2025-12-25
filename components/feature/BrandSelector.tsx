"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAppStore } from "@/lib/store";

export function BrandSelector() {
    const { currentBrand, setBrand } = useAppStore();

    // In a real app, we would fetch a list of brands.
    // Here we just simulate switching or show the current one.

    return (
        <div className="flex items-center gap-3 px-2 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 dark:bg-white shrink-0">
                <span className="text-white dark:text-zinc-900 font-bold text-sm">K</span>
            </div>
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                    {currentBrand?.name || "Acme Corp"}
                </span>
            </div>
        </div>
    );
}
