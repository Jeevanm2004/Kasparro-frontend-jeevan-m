"use client"

import { useAppStore } from "@/lib/store"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animate/FadeIn"
import { DashboardSkeleton } from "@/components/skeletons"
import { Activity, Shield, TrendingUp, AlertCircle, TrendingDown, Minus, Building2, Clock } from "lucide-react"

export default function DashboardPage() {
    const { currentBrand, fetchInitialData, modules, isLoading } = useAppStore()
    useEffect(() => {
        fetchInitialData()
    }, [fetchInitialData])

    if (isLoading || !currentBrand) {
        return <DashboardSkeleton />
    }

    // Format timestamp
    const formatTimestamp = (timestamp?: string) => {
        if (!timestamp) return 'Never'
        const date = new Date(timestamp)
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date)
    }

    // Calculate overall health (mock logic)
    const overallScore = Math.round(
        modules.reduce((acc, mod) => acc + mod.score, 0) / (modules.length || 1)
    )

    return (
        <div className="space-y-8 max-w-7xl mx-auto py-6">
            <div className="flex flex-col items-start gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <FadeIn delay={0.1}>
                            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Overview</h1>
                            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Real-time brand perception across AI models.</p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2}>
                        <div className="flex items-center gap-4">
                            {/* Brand Name */}
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-zinc-400" />
                                <span className="text-sm font-semibold text-zinc-900 dark:text-white">{currentBrand.name}</span>
                            </div>
                            {/* Live indicator */}
                            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                Live
                            </div>
                        </div>
                    </FadeIn>
                </div>
                {/* Last Audit Timestamp */}
                <FadeIn delay={0.3}>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <Clock className="h-4 w-4" />
                        <span>Last audit: <span className="font-medium text-zinc-700 dark:text-zinc-300">{formatTimestamp(currentBrand.lastAuditTimestamp)}</span></span>
                    </div>
                </FadeIn>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                    title="AI Visibility"
                    value={`${currentBrand.metrics.aiVisibilityScore}%`}
                    change="+2.4%"
                    trend="up"
                    icon={Activity}
                    delay={0.1}
                />
                <MetricCard
                    title="Trust Score"
                    value={String(currentBrand.metrics.trustScore)}
                    change="+0.8"
                    trend="up"
                    icon={Shield}
                    delay={0.2}
                />
                <MetricCard
                    title="Keyword Coverage"
                    value={`${currentBrand.metrics.nonBrandedCoverage}%`}
                    change="+12%"
                    trend="up"
                    icon={TrendingUp}
                    delay={0.3}
                />
                <MetricCard
                    title="Overall Health"
                    value={`${overallScore}/100`}
                    change="Stable"
                    trend="neutral"
                    icon={Activity}
                    delay={0.4}
                />
            </div>

            <FadeIn delay={0.5}>
                <div className="grid gap-8 md:grid-cols-12">
                    {/* Audit Summary Table */}
                    <div className="col-span-12 lg:col-span-8">
                        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
                            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Audit Modules</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Performance across 7 key intelligence layers.</p>
                                </div>
                            </div>
                            <div>
                                {modules.map((mod, i) => (
                                    <Link
                                        key={mod.id}
                                        href={`/app/audit?module=${mod.id}`}
                                        className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800/50 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-1.5 h-1.5 rounded-full ${mod.score > 80 ? 'bg-emerald-500' : mod.score > 50 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                            <span className="font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{mod.name}</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm font-mono text-zinc-500">{mod.score}/100</span>
                                            <Badge variant="outline" className={`w-20 justify-center ${mod.status === 'pass' ? 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-400' : 'border-red-200 text-red-700 bg-red-50 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400'}`}>
                                                {mod.status}
                                            </Badge>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Critical Issues */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-full">
                            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-red-500" />
                                    Critical Attention
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                                    <h4 className="font-medium text-red-900 dark:text-red-200 text-sm mb-1">Schema Validation Failed</h4>
                                    <p className="text-xs text-red-700 dark:text-red-300/80 leading-relaxed">Product markup missing essential properties. This impacts rich snippet eligibility.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
                                    <h4 className="font-medium text-amber-900 dark:text-amber-200 text-sm mb-1">Low Confidence Entity</h4>
                                    <p className="text-xs text-amber-700 dark:text-amber-300/80 leading-relaxed">About page entity recognition below 60%. LLMs may hallucinate details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}

function MetricCard({ title, value, change, trend, icon: Icon, delay }: any) {
    const isUp = trend === 'up';
    const isNeutral = trend === 'neutral';

    return (
        <FadeIn delay={delay}>
            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</span>
                    <Icon className="h-4 w-4 text-zinc-400" />
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{value}</span>
                </div>
                <div className="mt-2 flex items-center text-xs">
                    <span className={`font-medium flex items-center ${isUp ? 'text-emerald-600 dark:text-emerald-400' : isNeutral ? 'text-zinc-500' : 'text-red-600'}`}>
                        {change}
                    </span>
                    <span className="text-zinc-400 ml-2">vs last month</span>
                </div>
            </div>
        </FadeIn>
    )
}
