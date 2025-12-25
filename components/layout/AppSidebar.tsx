"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/layout/nav-main"
import { AccountMenu } from "@/components/feature/AccountMenu"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

// Mock data for navigation
const data = {
    user: {
        name: "Demo User",
        email: "user@kasparro.ai",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/app/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Audit Modules",
            url: "/app/audit",
            icon: Bot,
            items: [
                { title: "Technical Core", url: "/app/audit?module=technical" },
                { title: "Content Quality", url: "/app/audit?module=content" },
                { title: "AI Visibility", url: "/app/audit?module=ai_visibility" },
                { title: "Trust & EEAT", url: "/app/audit?module=trust" },
                { title: "Competitor Gap", url: "/app/audit?module=competitor" },
                { title: "Local Presence", url: "/app/audit?module=local" },
                { title: "User Experience", url: "/app/audit?module=ux" },
            ]
        },
        {
            title: "Architecture",
            url: "/app/architecture",
            icon: Map,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader />
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <AccountMenu />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
