import { twMerge } from "tailwind-merge";


interface TableTrProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode;
}

export function TableTr({ children, className, ...rest}: TableTrProps) {
    return (
        <tr className={twMerge("", className)} {...rest}>
            {children}
        </tr>
    );
}