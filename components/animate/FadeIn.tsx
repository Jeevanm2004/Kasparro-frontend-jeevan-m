"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction,
    fullWidth = false,
    ...props
}: FadeInProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as any, // Spring-like ease
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible" // Or whileInView for scroll-triggered
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={cn(fullWidth ? "w-full" : "", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
