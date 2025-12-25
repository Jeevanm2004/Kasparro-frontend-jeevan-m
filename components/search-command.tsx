"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    LayoutDashboard,
    Network,
    ShieldCheck,
    Search
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

export function SearchCommand() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { modules } = useAppStore()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 text-muted-foreground bg-muted/50 border-muted-foreground/20 hover:bg-muted/80 hover:text-foreground transition-all"
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 xl:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Platform">
                        <CommandItem onSelect={() => runCommand(() => router.push('/app/dashboard'))}>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/app/architecture'))}>
                            <Network className="mr-2 h-4 w-4" />
                            <span>System Architecture</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/app/audit'))}>
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            <span>Audit Overview</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Audit Modules">
                        {modules.map((module) => (
                            <CommandItem
                                key={module.id}
                                value={module.name}
                                onSelect={() => runCommand(() => router.push(`/app/audit?module=${module.id}`))}
                            >
                                <div className={`mr-2 h-2 w-2 rounded-full ${module.status === 'pass' ? 'bg-emerald-500' : module.status === 'fail' ? 'bg-red-500' : 'bg-amber-500'}`} />
                                <span>{module.name}</span>
                                <span className="ml-auto text-xs text-muted-foreground">{module.score}/100</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
