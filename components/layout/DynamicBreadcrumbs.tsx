"use client"

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

export function DynamicBreadcrumbs() {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean).filter(s => s !== 'app')

    const getBreadcrumbName = (segment: string) => {
        switch (segment) {
            case 'dashboard': return 'Dashboard'
            case 'audit': return 'Audit Modules'
            case 'architecture': return 'System Map'
            default: return segment.charAt(0).toUpperCase() + segment.slice(1)
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1
                    const href = `/app/${segments.slice(0, index + 1).join('/')}`

                    return (
                        <React.Fragment key={segment}>
                            {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{getBreadcrumbName(segment)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{getBreadcrumbName(segment)}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
