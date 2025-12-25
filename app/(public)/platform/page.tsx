import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Database, Cpu, Presentation, Globe, Search, BarChart, FileCheck, Shield, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/animate/FadeIn";
import { Badge } from "@/components/ui/badge";

export default function PlatformPage() {
    return (
        <div className="flex flex-col w-full">
            <div className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">

                <FadeIn className="text-center mb-24 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                        The Intelligence Engine
                    </h1>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        Kasparro transforms raw search signals into actionable entity strategies through a three-stage pipeline.
                    </p>
                </FadeIn>

                <div className="grid gap-12 md:grid-cols-3 relative items-stretch">
                    {/* Visual Connector Line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-200 dark:bg-zinc-800 -z-10 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

                    {/* Step 1 */}
                    <FadeIn delay={0.1} className="flex flex-col items-center text-center group h-full">
                        <div className="h-24 w-24 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all">
                            <Database className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">1. Input Assembler</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Aggregates data from traditional crawlers, search APIs, and internal logs.
                        </p>
                    </FadeIn>

                    {/* Step 2 */}
                    <FadeIn delay={0.2} className="flex flex-col items-center text-center group h-full">
                        <div className="h-24 w-24 rounded-2xl bg-zinc-900 dark:bg-white border border-zinc-900 dark:border-white flex items-center justify-center mb-8 shadow-lg shadow-zinc-900/10 dark:shadow-white/5">
                            <Cpu className="h-8 w-8 text-white dark:text-zinc-900" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">2. Context Engine</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Normalizes data and runs it through 7 parallel audit modules to detect patterns.
                        </p>
                    </FadeIn>

                    {/* Step 3 */}
                    <FadeIn delay={0.3} className="flex flex-col items-center text-center group h-full">
                        <div className="h-24 w-24 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all">
                            <Presentation className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">3. Output Surfaces</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Delivers prioritized insights via dashboard, API, and reports.
                        </p>
                    </FadeIn>
                </div>

                {/* What Data Kasparro Consumes */}
                <FadeIn delay={0.4} className="mt-32">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">What Data Kasparro Consumes</h2>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                Our platform aggregates signals from multiple sources to build a complete picture of your AI visibility.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <Globe className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1 text-zinc-900 dark:text-white">Web Crawl Data</h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Site structure, schema markup, semantic HTML, internal linking patterns</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <Search className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1 text-zinc-900 dark:text-white">Search API Signals</h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">SERP features, knowledge panels, featured snippets, entity relationships</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <BarChart className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1 text-zinc-900 dark:text-white">LLM Citation Tracking</h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Brand mentions in GPT-4, Claude, Gemini responses across queries</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1 text-zinc-900 dark:text-white">Trust Metrics</h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Author credentials, backlink quality, domain authority, E-E-A-T signals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* What Outputs Brands Receive */}
                <FadeIn delay={0.5} className="mt-12">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">What Outputs Brands Receive</h2>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                Actionable intelligence delivered through multiple surfaces, ready to integrate into your workflow.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white flex-shrink-0 mt-2" />
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1.5 text-zinc-900 dark:text-white">Real-Time Dashboard</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        Live visibility scores, module breakdowns, critical alerts, and trend analytics.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white flex-shrink-0 mt-2" />
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1.5 text-zinc-900 dark:text-white">Audit Reports (JSON/PDF)</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        Module-by-module analysis with severity-ranked issues and recommendations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <div className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white flex-shrink-0 mt-2" />
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1.5 text-zinc-900 dark:text-white">API Webhooks</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        Programmatic access to audit runs, score changes, and competitive intelligence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.6} className="mt-12">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">How Kasparro Differs</h2>
                            <p className="text-zinc-500 dark:text-zinc-400">Four key areas where AI-SEO diverges from traditional approaches.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                                <h4 className="font-semibold mb-2 text-zinc-900 dark:text-white text-sm">Entity-First Analysis</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Measures how LLMs understand your brand as a semantic entity, not just keyword rankings.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                                <h4 className="font-semibold mb-2 text-zinc-900 dark:text-white text-sm">AI Citation Monitoring</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Tracks when and how ChatGPT, Claude, and Gemini cite your brand in responses.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                                <h4 className="font-semibold mb-2 text-zinc-900 dark:text-white text-sm">Trust Layer Optimization</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Analyzes E-E-A-T signals that determine whether LLMs trust your content.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
                                <h4 className="font-semibold mb-2 text-zinc-900 dark:text-white text-sm">Machine-Readable Output</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Recommendations for structured data, schema optimization, and semantic richness.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="mt-24 text-center">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                        <Link href="/app/audit/run">
                            Run AI-SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
