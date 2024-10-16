import { twMerge } from "tailwind-merge";


interface TableTbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export function TableTbody({ children, className, ...rest}: TableTbodyProps) {
    return (
        <tbody className={twMerge("", className)} {...rest}>
            {children}
        </tbody>
    );
}