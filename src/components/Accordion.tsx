"use client";
import { CaretDown, CaretRight, CaretUp } from "@/utils/icons"
import { Section } from "./section";
import { useState } from "react";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Separator } from "./Separator";

interface AccordionProps extends HTMLMotionProps<"div"> {
    label: string;
    children: React.ReactNode;
}

export function Accordion({ label, children, className, ...rest }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Section className={twMerge("bg-sky-50 px-5 py-2 rounded-lg", className)}>
            <button className="flex items-center justify-between outline-none w-full" onClick={toggleAccordion}>
                <h2 className="font-bold text-xl px-1 py-2">{label}</h2>
                <CaretUp size={22} className={twMerge("transition-transform duration-150", isOpen && "-rotate-180")} />
            </button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={"overflow-hidden"}
                {...rest}
            >
                <Separator />
                
                {children}
            </motion.div>
        </Section>
    )
}