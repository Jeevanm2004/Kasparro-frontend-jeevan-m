import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Database, Cpu, Presentation } from "lucide-react";
import { FadeIn } from "@/components/animate/FadeIn";

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

                <div className="grid gap-12 md:grid-cols-3 relative">
                    {/* Visual Connector Line */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-200 dark:bg-zinc-800 -z-10 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />

                    {/* Step 1 */}
                    <FadeIn delay={0.1} className="flex flex-col items-center text-center group">
                        <div className="h-24 w-24 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all">
                            <Database className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">1. Input Assembler</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Aggregates data from traditional crawlers, search APIs, and internal logs.
                        </p>
                    </FadeIn>

                    {/* Step 2 */}
                    <FadeIn delay={0.2} className="flex flex-col items-center text-center group">
                        <div className="h-24 w-24 rounded-2xl bg-zinc-900 dark:bg-white border border-zinc-900 dark:border-white flex items-center justify-center mb-8 shadow-lg shadow-zinc-900/10 dark:shadow-white/5">
                            <Cpu className="h-8 w-8 text-white dark:text-zinc-900" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">2. Context Engine</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Normalizes data and runs it through 7 parallel audit modules to detect patterns.
                        </p>
                    </FadeIn>

                    {/* Step 3 */}
                    <FadeIn delay={0.3} className="flex flex-col items-center text-center group">
                        <div className="h-24 w-24 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-all">
                            <Presentation className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">3. Output Surfaces</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm px-4">
                            Delivers prioritized insights via dashboard, API, and reports.
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-24 text-center">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                        <Link href="/app/dashboard">
                            Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
