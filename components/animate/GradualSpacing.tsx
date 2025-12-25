"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GradualSpacing({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const variants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: "easeOut" as any,
            },
        }),
    };

    return (
        <div className="flex justify-center space-x-1">
            {text.split("").map((char, i) => (
                <motion.h1
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className={cn("drop-shadow-sm", className)}
                >
                    {char === " " ? <span>&nbsp;</span> : char}
                </motion.h1>
            ))}
        </div>
    );
}
