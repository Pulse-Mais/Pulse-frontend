import { twMerge } from "tailwind-merge";

interface TableRootProps extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode;
}

export function TableRoot({ children, className, ...rest}: TableRootProps) {
    return (
        <table className={twMerge("w-full", className)} {...rest}>
            {children}
        </table>
    );
}