import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animate/FadeIn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MODULES } from "@/lib/modules-config";
import {
    ArrowRight,
    Sparkles,
    Target,
    Zap,
    Check,
    Database,
    Cpu,
    Presentation
} from "lucide-react";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center w-full">

            {/* Hero Section with Background Beams */}
            <section className="relative w-full min-h-[30rem] md:min-h-[40rem] flex flex-col items-center justify-center text-center px-4 py-12 md:py-0 overflow-hidden bg-white dark:bg-zinc-950">
                <FadeIn className="z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
                    <Badge variant="outline" className="mx-auto w-fit rounded-full px-4 py-1.5 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur text-zinc-600 dark:text-zinc-400 font-normal">
                        v1.0 Public Beta is Live
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] md:leading-[0.9]">
                        SEO for the <br className="hidden md:block" />
                        Machine Age.
                    </h1>

                    <p className="max-w-xl mx-auto text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        Navigate the shift from keywords to entities.
                        Optimize your brand's presence in LLMs like ChatGPT, Claude, and Gemini.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="h-12 px-12 rounded-full text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xl shadow-zinc-900/10 dark:shadow-white/10">
                            <Link href="/app/audit/run">
                                Start Audit <ArrowRight className=" h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-base border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900">
                            <Link href="/platform">How it works</Link>
                        </Button>
                    </div>
                </FadeIn>
                <BackgroundBeams />
            </section>

            {/* Why AI-SEO is Different */}
            <section className="w-full py-8 md:py-16 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn className="text-center mb-6 md:mb-10 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            Why AI-SEO is Different
                        </h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                            Traditional SEO is dead. AI models don't crawl—they understand.
                        </p>
                    </FadeIn>

                    <div className="border-t border-zinc-100 dark:border-zinc-800/50 mt-6 md:mt-8">
                        {/* Comparison Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 group border-b border-zinc-100 dark:border-zinc-800/50">
                            <div className="py-6 md:py-10 md:pr-12 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-50/50 dark:group-hover:bg-zinc-900/10">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4 block">Legacy</span>
                                <h3 className="text-xl text-zinc-400 dark:text-zinc-600 font-light italic mb-2 line-through decoration-zinc-200 dark:decoration-zinc-800">Keyword Density</h3>
                                <p className="text-sm text-zinc-400 dark:text-zinc-600 leading-relaxed max-w-sm">
                                    Repeating phrases for crawler detection and rank manipulation.
                                </p>
                            </div>
                            <div className="py-6 md:py-10 md:pl-12 transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-white/5">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-400 mb-4 block">Machine Age</span>
                                <h3 className="text-xl text-zinc-900 dark:text-white font-semibold mb-2">Entity Authority</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                                    Defining your brand as a verified node within the global knowledge graph.
                                </p>
                            </div>
                        </div>

                        {/* Comparison Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 group border-b border-zinc-100 dark:border-zinc-800/50">
                            <div className="py-6 md:py-10 md:pr-12 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-50/50 dark:group-hover:bg-zinc-900/10">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4 block">Legacy</span>
                                <h3 className="text-xl text-zinc-400 dark:text-zinc-600 font-light italic mb-2 line-through decoration-zinc-200 dark:decoration-zinc-800">Backlink Volume</h3>
                                <p className="text-sm text-zinc-400 dark:text-zinc-600 leading-relaxed max-w-sm">
                                    Quantity-driven link profiles to inflate domain authority scores.
                                </p>
                            </div>
                            <div className="py-6 md:py-10 md:pl-12 transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-white/5">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-400 mb-4 block">Machine Age</span>
                                <h3 className="text-xl text-zinc-900 dark:text-white font-semibold mb-2">Semantic Trust</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                                    E-E-A-T signals that convince LLMs your data is the most reliable source.
                                </p>
                            </div>
                        </div>

                        {/* Comparison Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 group">
                            <div className="py-6 md:py-10 md:pr-12 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800/50 transition-colors group-hover:bg-zinc-50/50 dark:group-hover:bg-zinc-900/10">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4 block">Legacy</span>
                                <h3 className="text-xl text-zinc-400 dark:text-zinc-600 font-light italic mb-2 line-through decoration-zinc-200 dark:decoration-zinc-800">SERP Position</h3>
                                <p className="text-sm text-zinc-400 dark:text-zinc-600 leading-relaxed max-w-sm">
                                    Tracking blue link placement for specific search queries.
                                </p>
                            </div>
                            <div className="py-6 md:py-10 md:pl-12 transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-white/5">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-400 mb-4 block">Machine Age</span>
                                <h3 className="text-xl text-zinc-900 dark:text-white font-semibold mb-2">Citation Context</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                                    Measuring how and where LLMs synthesize your brand into natural language answers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Intelligence Suite - Technical Blueprint Grid */}
            <section className="w-full py-8 md:py-20 bg-white dark:bg-zinc-950 relative overflow-hidden">
                {/* Technical Dot Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn className="mb-6 md:mb-12 space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-zinc-900 dark:bg-white" />
                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500">Core Engine</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-3xl">
                            The Intelligence Suite
                        </h2>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
                            Seven specialized modules engineered to decode brand understanding within the machine-age search ecosystem.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-100 dark:border-zinc-800/50">
                        {MODULES.map((module, i) => (
                            <div
                                key={module.id}
                                className="group relative p-6 md:p-10 border-r border-b border-zinc-100 dark:border-zinc-800/50 transition-all hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
                            >
                                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 mb-4 md:mb-8 block tracking-widest uppercase">
                                    Module // 0{i + 1}
                                </span>

                                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center mb-4 md:mb-8 shadow-2xl shadow-zinc-900/20 dark:shadow-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <module.icon className="h-4 w-4 md:h-5 md:w-5 text-white dark:text-zinc-900" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight">
                                    {module.name}
                                </h3>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    {module.description}
                                </p>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anatomy of an Audit - Pipeline visualization */}
            <section className="w-full py-8 md:py-20 bg-zinc-50/30 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                        <div className="lg:col-span-5 space-y-4 md:space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">Methodology</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                                Anatomy of an Audit
                            </h2>
                            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                Our pipeline mirrors the way neural networks process information. We don't just scrape; we synthesize.
                            </p>

                            <div className="hidden md:block pt-8 space-y-6 border-t border-zinc-200 dark:border-zinc-800">
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-white dark:text-zinc-900" />
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400"><span className="font-semibold text-zinc-900 dark:text-white">Sub-second latency</span> in data ingestion and normalization.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-white dark:text-zinc-900" />
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400"><span className="font-semibold text-zinc-900 dark:text-white">Parallel processing</span> architecture for audits.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid gap-4 md:gap-6 md:grid-cols-1 items-stretch">
                                {/* Stage 1 */}
                                <FadeIn delay={0.1} className="h-full">
                                    <div className="group relative flex items-center gap-4 md:gap-8 p-4 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:translate-x-2">
                                        <div className="flex flex-col items-center justify-center shrink-0 w-16">
                                            <span className="text-2xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-zinc-400 transition-colors">01</span>
                                            <div className="w-px h-12 bg-zinc-100 dark:bg-zinc-800 my-2" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Signal Ingestion</h3>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                                Aggregating high-fidelity signals from enterprise crawlers, real-time search APIs, and internal log sources.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Stage 2 */}
                                <FadeIn delay={0.2} className="h-full">
                                    <div className="group relative flex items-center gap-4 md:gap-8 p-4 md:p-8 rounded-3xl bg-zinc-900 dark:bg-white shadow-2xl shadow-zinc-900/20 dark:shadow-white/5 hover:translate-x-2 transition-all">
                                        <div className="flex flex-col items-center justify-center shrink-0 w-16 text-center">
                                            <span className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">02</span>
                                            <div className="w-px h-12 bg-zinc-800 dark:bg-zinc-200 my-2" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white dark:text-zinc-900 mb-2">Contextual Synthesis</h3>
                                            <p className="text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed">
                                                Seven parallel proprietary modules parse normalized data to identify entity relationships and trust gaps.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Stage 3 */}
                                <FadeIn delay={0.3} className="h-full">
                                    <div className="group relative flex items-center gap-4 md:gap-8 p-4 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:translate-x-2">
                                        <div className="flex flex-col items-center justify-center shrink-0 w-16">
                                            <span className="text-2xl font-bold text-zinc-200 dark:text-zinc-800 group-hover:text-zinc-400 transition-colors">03</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Surface Deployment</h3>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                                Delivering prioritized, machine-readable intelligence via interactive dashboards, JSON APIs, and PDF reports.
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Premium Focus Card */}
            <section className="w-full py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-20 text-center shadow-2xl shadow-zinc-200/50 dark:shadow-none">
                            {/* Decorative Technical Accents */}
                            <div className="absolute top-8 left-8 hidden md:block">
                                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500">System // Operational</span>
                            </div>
                            <div className="absolute top-8 right-8 hidden md:block">
                                <div className="flex gap-1">
                                    <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                                    <div className="h-1 w-4 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                </div>
                            </div>

                            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                                    Ready for the <br /> future of search?
                                </h2>
                                <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                    Join the brands already auditing their entity authority. Start your machine-age SEO audit today.
                                </p>
                                <div className="pt-4">
                                    <Button asChild size="lg" className="h-16 px-12 rounded-full text-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/20 dark:shadow-none">
                                        <Link href="/app/audit/run">Run AI-SEO Audit</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-zinc-900/5 dark:from-white/5 to-transparent pointer-events-none" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-900/5 dark:from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
