import { FadeIn } from "@/components/animate/FadeIn";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="container mx-auto px-4 py-24 md:py-32 max-w-3xl">

                <FadeIn className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                        We build for the <br />
                        machine-readable web.
                    </h1>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        Search is changing. The ten blue links are disappearing, replaced by distinct answers synthesized by Large Language Models.
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
                        <p>
                            At <span className="font-semibold text-zinc-900 dark:text-white">Kasparro</span>, we believe that brands need a new operating system to navigate this shift. Traditional SEO tools prioritize keywords and backlinks—metrics that matter less in a semantic world.
                        </p>
                        <p>
                            Our mission is to help companies understand and influence how they are perceived by AI entities. We call this <strong>Entity Dominance</strong>.
                        </p>
                    </div>
                </FadeIn>

                <Separator className="my-16" />

                <FadeIn delay={0.2}>
                    <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">Our Core Beliefs</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Entities over Keywords</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">It's about who you are, not just what you say. Identity matters more than frequency.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Data Layer Optimization</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">Optimization happens at the structured data layer, not just the visual DOM.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">Trust is Currency</h3>
                            <p className="text-zinc-500 dark:text-zinc-400">In an AI world, E-E-A-T signals are the primary ranking factor for inclusion.</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
