"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeIn } from "@/components/animate/FadeIn"
import { Database, Cpu, Presentation, ArrowRight, GitCommit, Layers } from "lucide-react"

export default function ArchitecturePage() {
    return (
        <div className="container max-w-7xl mx-auto py-8 space-y-8 px-4">
            <FadeIn>
                <div className="flex flex-col gap-2 mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">System Architecture</h1>
                    <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400">
                        Visualization of the Kasparro intelligence pipeline.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4] dark:opacity-[0.1]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-6 md:gap-8">

                        {/* Input Node */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-full lg:max-w-[16rem] p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm text-center transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                                    <Database className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-700 dark:text-zinc-300" />
                                </div>
                                <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base md:text-lg">Input Assembler</h3>
                                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">Crawlers, Search APIs, & Logs</p>
                            </div>
                        </div>

                        {/* Connector */}
                        <div className="hidden lg:flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-700">
                            <div className="h-px w-12 xl:w-16 bg-zinc-200 dark:bg-zinc-800" />
                            <ArrowRight className="h-5 w-5 -ml-2" />
                        </div>
                        <div className="lg:hidden flex justify-center">
                            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300 dark:text-zinc-700 rotate-90" />
                        </div>

                        {/* Processing Node */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-full lg:max-w-[16rem] p-4 sm:p-6 md:p-8 bg-zinc-900 dark:bg-white border border-zinc-900 dark:border-white rounded-xl shadow-xl shadow-zinc-900/10 dark:shadow-white/5 text-center transition-transform hover:-translate-y-1">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg bg-zinc-800 dark:bg-zinc-100 flex items-center justify-center">
                                    <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-zinc-900" />
                                </div>
                                <h3 className="font-bold text-white dark:text-zinc-900 text-sm sm:text-base md:text-lg">Context Engine</h3>
                                <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 mt-2">Normalization & 7-Module Analysis</p>
                            </div>
                        </div>

                        {/* Connector */}
                        <div className="hidden lg:flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-700">
                            <div className="h-px w-12 xl:w-16 bg-zinc-200 dark:bg-zinc-800" />
                            <ArrowRight className="h-5 w-5 -ml-2" />
                        </div>
                        <div className="lg:hidden flex justify-center">
                            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300 dark:text-zinc-700 rotate-90" />
                        </div>

                        {/* Output Node */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-full lg:max-w-[16rem] p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm text-center transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                                    <Presentation className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-700 dark:text-zinc-300" />
                                </div>
                                <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base md:text-lg">Output Surfaces</h3>
                                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">Dashboard, API, & Reports</p>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
                <FadeIn delay={0.2}>
                    <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                                <GitCommit className="h-5 w-5 text-zinc-500 mb-1" />
                                Data Flow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                            <p className="text-sm md:text-base">
                                The pipeline is unidirectional. Raw signals sourced from external APIs and internal logs are ingested by the <strong>Input Assembler</strong>.
                            </p>
                            <p className="text-sm md:text-base">
                                These signals are then normalized into a standard semantic format by the <strong>Context Engine</strong>, ensuring all downstream modules operate on a unified data structure.
                            </p>
                        </CardContent>
                    </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <Card className="border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                                <Layers className="h-5 w-5 text-zinc-500 mb-1" />
                                Module Isolation
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                            <p className="text-sm md:text-base">
                                Analysis is performed by 7 isolated <strong>Audit Modules</strong> (Technical, Content, Trust, etc.). Each module runs independently, allowing for parallel processing and modular updates without affecting the core engine stability.
                            </p>
                        </CardContent>
                    </Card>
                </FadeIn>
            </div>
        </div>
    )
}
