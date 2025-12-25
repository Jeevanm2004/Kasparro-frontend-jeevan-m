"use client"

import { useSearchParams } from "next/navigation"
import { useAppStore } from "@/lib/store"
import { useEffect, useState, Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animate/FadeIn"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuditSkeleton } from "@/components/skeletons"
import { EmptyState } from "@/components/empty-state"
import Link from "next/link"
import { CheckCircle2, Lightbulb, AlertCircle, ArrowRight, Zap, Play, Activity } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AuditModule } from "@/types"

const AuditOverview = ({ modules }: { modules: AuditModule[] }) => {
    return (
        <div className="space-y-8 max-w-7xl mx-auto py-6">
            <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <FadeIn>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Audit Overview</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">High-level analysis across 7 key intelligence layers.</p>
                </FadeIn>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((mod, i) => (
                    <FadeIn key={mod.id} delay={i * 0.1}>
                        <Link href={`/app/audit?module=${mod.id}`} className="group block h-full">
                            <div className="relative h-full p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mod.score >= 80 ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' :
                                        mod.score >= 50 ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' :
                                            'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                                        }`}>
                                        <Activity className="h-4 w-4" />
                                    </div>
                                    <Badge variant="outline" className={`capitalize ${mod.status === 'pass' ? 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-400' :
                                        'border-zinc-200 text-zinc-500 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400'
                                        }`}>
                                        {mod.status}
                                    </Badge>
                                </div>

                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {mod.name}
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-2">
                                    {mod.description}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Score</span>
                                        <span className={`text-xl font-bold font-mono ${mod.score >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                                            mod.score >= 50 ? 'text-amber-600 dark:text-amber-400' :
                                                'text-red-600 dark:text-red-400'
                                            }`}>
                                            {mod.score}
                                        </span>
                                    </div>
                                    {mod.issues.length > 0 && (
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                                            <AlertCircle className="h-3 w-3 text-red-600 dark:text-red-400" />
                                            <span className="text-xs font-bold text-red-700 dark:text-red-400">{mod.issues.length} Issues</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </div>
    )
}

function AuditContent() {
    const searchParams = useSearchParams()
    const moduleParam = searchParams.get('module')

    const { modules, fetchInitialData } = useAppStore()
    const [activeModule, setActiveModule] = useState<AuditModule | undefined>(undefined)

    useEffect(() => {
        if (modules.length === 0) {
            fetchInitialData()
        }
    }, [modules.length, fetchInitialData])

    useEffect(() => {
        if (moduleParam && modules.length > 0) {
            const found = modules.find(m => m.id === `module_${moduleParam}` || m.id === moduleParam)
            setActiveModule(found)
        } else {
            setActiveModule(undefined)
        }
    }, [moduleParam, modules])

    if (!moduleParam && modules.length > 0) {
        return <AuditOverview modules={modules} />
    }

    if (!activeModule) {
        return <div className="p-1"><AuditSkeleton /></div>
    }

    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-emerald-500"
        if (score >= 50) return "text-amber-500"
        return "text-red-500"
    }

    const strokeDasharray = 2 * Math.PI * 36 // Radius 36
    const strokeDashoffset = strokeDasharray - (activeModule.score / 100) * strokeDasharray

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8 w-full max-w-7xl mx-auto py-6"
            >
                <div className="mb-6">
                    <Link href="/app/audit" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                        <ArrowRight className="h-4 w-4 mr-1 rotate-180" /> Back to Overview
                    </Link>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800 w-full">
                    <div>
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">{activeModule.name}</h1>
                                <Badge variant="outline" className={`capitalize ${activeModule.status === 'pass' ? 'border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900' : 'border-zinc-200 text-zinc-500 bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800'}`}>
                                    {activeModule.status}
                                </Badge>
                            </div>
                            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">{activeModule.description}</p>
                        </FadeIn>
                    </div>

                    {/* Radial Score */}
                    <FadeIn delay={0.1}>
                        <div className="relative h-24 w-24 flex items-center justify-center shrink-0">
                            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="6" className="text-zinc-100 dark:text-zinc-800" />
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="36"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="6"
                                    strokeDasharray={strokeDasharray}
                                    strokeDashoffset={strokeDashoffset}
                                    className={`${getScoreColor(activeModule.score)} transition-all duration-1000 ease-out`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={`text-2xl font-bold font-mono ${getScoreColor(activeModule.score)}`}>{activeModule.score}</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <Tabs defaultValue="insights" className="space-y-8 w-full">
                    <TabsList className="inline-flex flex-wrap justify-center h-auto p-1.5 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-2 w-full sm:w-auto">
                        {['insights', 'issues', 'recommendations'].map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="rounded-lg px-6 py-2.5 font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-zinc-900 dark:data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-zinc-200 dark:data-[state=active]:ring-zinc-800 transition-all capitalize"
                            >
                                {tab}
                                {tab === 'issues' && activeModule.issues.length > 0 && (
                                    <span className="ml-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 text-[10px] font-bold">
                                        {activeModule.issues.length}
                                    </span>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value="insights" className="mt-6 w-full">
                        <FadeIn>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                                {activeModule.insights.map((insight, idx) => (
                                    <div key={idx} className="group p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                        <div className="h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center mb-3">
                                            <Zap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                                            {insight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </TabsContent>

                    <TabsContent value="issues" className="mt-6 space-y-4 w-full">
                        {activeModule.issues.length === 0 ? (
                            <div className="w-full">
                                <EmptyState
                                    icon={CheckCircle2}
                                    title="No Issues Detected"
                                    description="This module passed all checks. Great job!"
                                    className="w-full"
                                />
                            </div>
                        ) : (
                            <div className="grid gap-4 w-full">
                                {activeModule.issues.map((issue, i) => (
                                    <FadeIn key={issue.id} delay={i * 0.1}>
                                        <div className={`flex gap-5 p-6 rounded-xl border bg-white dark:bg-zinc-900 transition-all hover:shadow-sm w-full ${issue.severity === 'critical' ? 'border-red-200 dark:border-red-900/30 border-l-4 border-l-red-500' :
                                            issue.severity === 'major' ? 'border-orange-200 dark:border-orange-900/30 border-l-4 border-l-orange-500' :
                                                'border-amber-200 dark:border-amber-900/30 border-l-4 border-l-amber-500'
                                            }`}>
                                            <div className="mt-1 shrink-0">
                                                <AlertCircle className={`h-5 w-5 ${issue.severity === 'critical' ? 'text-red-500' :
                                                    issue.severity === 'major' ? 'text-orange-500' :
                                                        'text-amber-500'
                                                    }`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-semibold text-zinc-900 dark:text-white text-base truncate">{issue.title}</h4>
                                                    <Badge variant="outline" className={`capitalize text-xs font-semibold shrink-0 ml-2 ${issue.severity === 'critical' ? 'border-red-200 text-red-700 bg-red-50 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/50' :
                                                        issue.severity === 'major' ? 'border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-950/20 dark:text-orange-400 dark:border-orange-900/50' :
                                                            'border-amber-200 text-amber-700 bg-amber-50 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/50'
                                                        }`}>
                                                        {issue.severity}
                                                    </Badge>
                                                </div>
                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">{issue.description}</p>
                                                <Button size="sm" variant="ghost" className="h-8 px-0 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-transparent p-0 flex items-center gap-1 text-xs uppercase font-bold tracking-wide">
                                                    View Details <ArrowRight className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="recommendations" className="mt-6 space-y-4 w-full">
                        {activeModule.recommendations.length === 0 ? (
                            <div className="w-full">
                                <EmptyState
                                    icon={Lightbulb}
                                    title="No Recommendations"
                                    description="Everything looks optimized. Check back later."
                                    className="w-full"
                                />
                            </div>
                        ) : (
                            <div className="grid gap-4 w-full">
                                {activeModule.recommendations.map((rec, i) => (
                                    <FadeIn key={rec.id} delay={i * 0.1}>
                                        <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all w-full">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="font-semibold text-zinc-900 dark:text-white text-base truncate">{rec.title}</h4>
                                                    <div className="flex gap-2 shrink-0">
                                                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded px-1.5 py-0.5">Impact: {rec.impact}</span>
                                                        <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded px-1.5 py-0.5">Effort: {rec.effort}</span>
                                                    </div>
                                                </div>
                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{rec.description}</p>
                                            </div>
                                            <div className="flex items-center shrink-0">
                                                <Button size="sm" className="w-full md:w-auto bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-lg font-medium text-xs">
                                                    <Play className="h-3 w-3 mr-2" /> Apply Fix
                                                </Button>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </motion.div>
        </AnimatePresence>
    )
}

export default function AuditPage() {
    return (
        <Suspense fallback={<div>Loading Module...</div>}>
            <AuditContent />
        </Suspense>
    )
}
