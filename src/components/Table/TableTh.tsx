"use client";
import { twMerge } from "tailwind-merge";
import { CaretDown } from "@/utils/icons";
import { useState } from "react";



// interface TableThProps extends React.HTMLAttributes<HTMLTableCellElement> {
//     children?: React.ReactNode;
//     isOrdered?: boolean;
//     onClick?: () => void;
// }

type OsderedProps = 
| { isOrdered: boolean; onClick: () => void; } 
| { isOrdered?: never; onClick?: never; }

type TableThProps = React.HTMLAttributes<HTMLTableCellElement> & { 
    children?: React.ReactNode;
} & OsderedProps;

export function TableTh({ children, className, isOrdered, onClick, ...rest }: TableThProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <th className={twMerge("text-start px-5 py-2", className)} {...rest}>
            <div className="flex items-center gap-2 w-fit">
                {children}
                {isOrdered && <button onClick={onClick}><CaretDown size={18} weight="fill" /></button>}
            </div>
        </th>
    );
}