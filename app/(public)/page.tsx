import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animate/FadeIn";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
    FileText,
    Network,
    Swords,
    ShieldCheck,
    ArrowRight,
    LayoutTemplate,
    Cpu
} from "lucide-react";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center w-full">

            {/* Hero Section with Background Beams */}
            <section className="relative w-full h-[40rem] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white dark:bg-zinc-950">
                <FadeIn className="z-10 max-w-4xl mx-auto space-y-8">
                    <Badge variant="outline" className="mx-auto w-fit rounded-full px-4 py-1.5 border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur text-zinc-600 dark:text-zinc-400 font-normal">
                        v1.0 Public Beta is Live
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[0.9]">
                        SEO for the <br className="hidden md:block" />
                        Machine Age.
                    </h1>

                    <p className="max-w-xl mx-auto text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        Navigate the shift from keywords to entities.
                        Optimize your brand's presence in LLMs like ChatGPT, Claude, and Gemini.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="h-12 px-12 rounded-full text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-xl shadow-zinc-900/10 dark:shadow-white/10">
                            <Link href="/app/dashboard">
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

            {/* Features Grid */}
            <section className="w-full py-24 bg-zinc-50/50 dark:bg-zinc-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn className="mb-20 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            The Intelligence Suite
                        </h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
                            Seven specialized modules designed to decode how AI understands your brand.
                        </p>
                    </FadeIn>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <CleanFeatureCard
                            icon={LayoutTemplate}
                            title="Technical Core"
                            description="Ensure seamless crawling and indexing by AI bots."
                            delay={0.1}
                        />
                        <CleanFeatureCard
                            icon={FileText}
                            title="Content Quality"
                            description="Analyze depth and helpfulness signals."
                            delay={0.2}
                        />
                        <CleanFeatureCard
                            icon={Cpu}
                            title="AI Visibility"
                            description="Track brand mentions in generative responses."
                            delay={0.3}
                        />
                        <CleanFeatureCard
                            icon={Network}
                            title="Entity Graph"
                            description="Map semantic relationships and knowledge graph nodes."
                            delay={0.4}
                        />
                        <CleanFeatureCard
                            icon={Swords}
                            title="Competitor Gap"
                            description="Identify where rivals dominate the conversation."
                            delay={0.5}
                        />
                        <CleanFeatureCard
                            icon={ShieldCheck}
                            title="Trust & Authority"
                            description="Measure E-E-A-T signals across the web."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-32 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white">
                            Ready for the future of search?
                        </h2>
                        <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
                            <Link href="/app/dashboard">Get Started Now</Link>
                        </Button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

function CleanFeatureCard({ title, description, icon: Icon, delay }: { title: string, description: string, icon: any, delay: number }) {
    return (
        <FadeIn delay={delay} fullWidth>
            <div className="group h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-white">{title}</h3>
                <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </FadeIn>
    )
}
