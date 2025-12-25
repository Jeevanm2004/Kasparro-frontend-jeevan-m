import {
    LayoutTemplate,
    FileText,
    Cpu,
    ShieldCheck,
    Swords,
    MapPin,
    Gauge,
    type LucideIcon
} from "lucide-react";

export interface ModuleConfig {
    id: string;
    name: string;
    shortName: string;
    description: string;
    icon: LucideIcon;
}

export const MODULES: ModuleConfig[] = [
    {
        id: "module_technical",
        name: "Technical Core",
        shortName: "Technical",
        description: "Ensure seamless crawling and indexing by AI bots.",
        icon: LayoutTemplate
    },
    {
        id: "module_content",
        name: "Content Quality",
        shortName: "Content",
        description: "Analyze depth and helpfulness signals.",
        icon: FileText
    },
    {
        id: "module_ai_visibility",
        name: "AI Visibility",
        shortName: "AI Visibility",
        description: "Track brand mentions in generative responses.",
        icon: Cpu
    },
    {
        id: "module_trust",
        name: "Trust & EEAT",
        shortName: "Trust",
        description: "Measure E-E-A-T signals across the web.",
        icon: ShieldCheck
    },
    {
        id: "module_competitor",
        name: "Competitor Gap",
        shortName: "Competitive",
        description: "Identify where rivals dominate the conversation.",
        icon: Swords
    },
    {
        id: "module_local",
        name: "Local Presence",
        shortName: "Local",
        description: "Optimize geographic visibility and local search.",
        icon: MapPin
    },
    {
        id: "module_ux",
        name: "User Experience",
        shortName: "UX",
        description: "Monitor Core Web Vitals and engagement metrics.",
        icon: Gauge
    }
];

export const getModuleById = (id: string) => {
    return MODULES.find(m => m.id === id);
};

export const getModuleCount = () => MODULES.length;
