import { twMerge } from "tailwind-merge";


interface TableTdProps extends React.HTMLAttributes<HTMLTableCellElement> {
    children: React.ReactNode;
}

export function TableTd({ children, className, ...rest }: TableTdProps) {
    return (
        <td className={twMerge("px-5 py-2 first:rounded-l-lg last:rounded-r-lg", className)} {...rest}>
            {children}
        </td>
    );
}