import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { data } from "../../data";

export const HoverEffect = ({
    items,
    className,
    }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
        className={cn(
            "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
            className
        )}
        >
        {items.map((item, idx) => (
            <motion.div
                variants={{
                    offscreen: { opacity: 0, y: 50 },
                    onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: idx * 0.9
                        }
                    },
                }}
                key={idx}
                className="relative group  block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
            <AnimatePresence>
                {hoveredIndex === idx && (
                <motion.span
                    className="absolute inset-0 h-full w-full block  rounded-3xl"
                    style={{ backgroundColor: `${data.theme.secondary}` }}
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                    }}
                    exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                    }}
                />
                )}
            </AnimatePresence>
            <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
            </Card>
            </motion.div>
        ))}
        </div>
    );
    };

    export const Card = ({
    className,
    children,
    }) => {
    return (
        <div
        className={cn(
            "rounded-2xl h-full w-full p-4 py-20 overflow-hidden border border-transparent group-hover:border-slate-700 relative z-20",
            className
        )}
        style={{ backgroundColor: `${data.theme.primaryLight}` }}
        >
        <div className="relative z-50">
            <div className="p-4">{children}</div>
        </div>
        </div>
    );
    };
    export const CardTitle = ({
    className,
    children,
    }) => {
    return (
        <h4
            className={cn("tracking-wide mt-4 text-5xl font-extrabold text-center", className)}
            style={{ color: `${data.theme.light}` }}
        >
        {children}
        </h4>
    );
    };
    export const CardDescription = ({
    className,
    children,
    }) => {
    return (
        <p
        className={cn(
            "mt-8 tracking-wide leading-relaxed text-2xl text-center tracking-wider",
            className
        )}
        style={{ color: `${data.theme.light}` }}
        >
        {children}
        </p>
    );
};
