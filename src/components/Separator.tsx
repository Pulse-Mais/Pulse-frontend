import { twMerge } from "tailwind-merge";


export function Separator({ className }: { className?: string }) {
    return <hr className={twMerge("bg-gray-400", className)} />
}