import { twMerge } from "tailwind-merge";


interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
export function Section({ children, className, ...rest} : SectionProps) {
    return (
        <section className={twMerge("bg-sky-50 p-2 rounded-lg", className)} {...rest}>
            {children}
        </section>
    )
}