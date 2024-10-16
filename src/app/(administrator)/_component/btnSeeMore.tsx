import { CaretRight } from "@/utils/icons"
import Link, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge"


interface BtnSeeMoreProps extends LinkProps {
    className?: string;
}

export function BtnSeeMore({ className, ...rest }: BtnSeeMoreProps) {
    return (
        <Link {...rest} className={twMerge("flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white", className)}>
            <p className="pl-2">Ver mais</p>
            <CaretRight size={20} />
        </Link>
    )
}