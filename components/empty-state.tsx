"use client"

import { LucideIcon } from "lucide-react"

interface EmptyStateProps {
    icon: LucideIcon
    title: string
    description: string
    className?: string
}

export function EmptyState({ icon: Icon, title, description, className }: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 text-center border rounded-xl border-dashed bg-card/50 ${className}`}>
            <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
                <Icon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
        </div>
    )
}
