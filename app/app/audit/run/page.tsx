"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animate/FadeIn";
import {
    Activity,
    Database,
    Cpu,
    Presentation,
    Search,
    Globe,
    Shield,
    CheckCircle2,
    Loader2
} from "lucide-react";

const STAGES = [
    {
        id: "ingestion",
        name: "Input Assembler",
        icon: Database,
        logs: [
            "Initializing deep-crawl protocols...",
            "Aggregating search API signals...",
            "Fetching brand-mention logs...",
            "Normalizing unstructured signal data..."
        ]
    },
    {
        id: "synthesis",
        name: "Context Engine",
        icon: Cpu,
        logs: [
            "Parsing semantic entity relationships...",
            "Running parallel trust modules...",
            "Evaluating E-E-A-T proximity scores...",
            "Mapping knowledge graph nodes..."
        ]
    },
    {
        id: "deployment",
        name: "Intelligence Surface",
        icon: Presentation,
        logs: [
            "Synthesizing module insights...",
            "Prioritizing critical trust gaps...",
            "Generating machine-readable reports...",
            "Finalizing dashboard projection..."
        ]
    }
];

export default function AuditRunPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [currentStageIndex, setCurrentStageIndex] = useState(0);
    const [logs, setLogs] = useState<{ id: number; message: string }[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const totalDuration = 6000; // 6 seconds for simulation
        const intervalTime = 50;
        const increment = (intervalTime / totalDuration) * 100;

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Update stage based on progress
        if (progress < 33) setCurrentStageIndex(0);
        else if (progress < 66) setCurrentStageIndex(1);
        else setCurrentStageIndex(2);

        // Add logs based on progress
        const currentStage = STAGES[currentStageIndex];
        const logIndex = Math.floor((progress % 33) / 8);
        const newLogMessage = currentStage.logs[logIndex];

        if (newLogMessage) {
            setLogs((prev) => {
                // If the message is already the latest one, don't add it again
                if (prev.length > 0 && prev[0].message === newLogMessage) {
                    return prev;
                }
                return [{ id: Date.now() + Math.random(), message: newLogMessage }, ...prev].slice(0, 8);
            });
        }
    }, [progress, currentStageIndex]);

    useEffect(() => {
        if (isComplete) {
            const timeout = setTimeout(() => {
                router.push("/app/dashboard");
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [isComplete, router]);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="w-full max-w-3xl space-y-12 relative z-10">
                <FadeIn className="text-center space-y-4">
                    <Badge variant="outline" className="rounded-full px-4 py-1.5 border-zinc-200 dark:border-zinc-800 animate-pulse">
                        <span className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Live Audit in Progress
                        </span>
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Scanning the Machine <br /> Knowledge graph
                    </h1>
                </FadeIn>

                {/* Progress Visualization */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">Current Phase</span>
                            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-lg">
                                {STAGES[currentStageIndex].name}
                                <Loader2 className="h-4 w-4 animate-spin text-zinc-400" />
                            </div>
                        </div>
                        <span className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">
                            {Math.round(progress)}%
                        </span>
                    </div>

                    <div className="relative h-2 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-zinc-900 dark:bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {STAGES.map((stage, idx) => {
                            const Icon = stage.icon;
                            const isActive = idx === currentStageIndex;
                            const isFinished = idx < currentStageIndex;
                            return (
                                <div key={stage.id} className="space-y-2">
                                    <div className={`h-12 w-full rounded-xl border flex items-center justify-center transition-colors ${isActive ? "bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white shadow-lg" :
                                        isFinished ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30" :
                                            "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                                        }`}>
                                        <Icon className={`h-5 w-5 ${isActive ? "text-white dark:text-zinc-900" :
                                            isFinished ? "text-emerald-500" :
                                                "text-zinc-400"
                                            }`} />
                                    </div>
                                    <span className={`text-[10px] block text-center font-mono uppercase tracking-wider ${isActive ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-400"
                                        }`}>
                                        {stage.id}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Console Logs */}
                <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-6 font-mono text-xs">
                    <div className="flex items-center justify-between mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                        <span className="text-zinc-400 uppercase tracking-widest">System Logs</span>
                        <div className="flex gap-1.5">
                            <div className="h-2 w-2 rounded-full bg-red-500/20" />
                            <div className="h-2 w-2 rounded-full bg-amber-500/20" />
                            <div className="h-2 w-2 rounded-full bg-emerald-500/20" />
                        </div>
                    </div>
                    <div className="space-y-2 h-32 overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            {logs.map((log, i) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-zinc-300 dark:text-zinc-700">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                                    <span className={i === 0 ? "text-zinc-900 dark:text-emerald-400" : "text-zinc-500"}>
                                        {i === 0 ? "> " : "  "}{log.message}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
