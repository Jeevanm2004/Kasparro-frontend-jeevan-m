import { ChevronRight, type LucideIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import * as React from "react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarMenuAction,
} from "@/components/ui/sidebar"
import Link from "next/link"

import { useSidebar } from "@/components/ui/sidebar"

function NavMenuItem({ item }: {
    item: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }
}) {
    const pathname = usePathname()
    const { setOpenMobile } = useSidebar()
    // Check if the current path starts with the item's URL (e.g. /app/audit)
    // We treat it as active if it matches the start, enabling auto-expand for children
    const isCurrentPath = pathname.startsWith(item.url)
    const [isOpen, setIsOpen] = React.useState(item.isActive || isCurrentPath)

    // Update state when path changes to ensure 'active' sections are open
    React.useEffect(() => {
        if (isCurrentPath) {
            setIsOpen(true)
        }
    }, [isCurrentPath])

    return (
        <Collapsible
            key={item.title}
            asChild
            open={isOpen}
            onOpenChange={setIsOpen}
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.title}>
                    <Link
                        href={item.url}
                        onClick={() => {
                            setIsOpen(true)
                            setOpenMobile(false)
                        }}
                    >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                    <>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                <ChevronRight />
                                <span className="sr-only">Toggle</span>
                            </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {item.items.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton asChild>
                                            <Link
                                                href={subItem.url}
                                                onClick={() => setOpenMobile(false)}
                                            >
                                                <span>{subItem.title}</span>
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </>
                ) : null}
            </SidebarMenuItem>
        </Collapsible>
    )
}

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <NavMenuItem key={item.title} item={item} />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
