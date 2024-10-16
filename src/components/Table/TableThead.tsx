

interface TableTheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    children: React.ReactNode;
}

export function TableThead({ children, className, ...rest }: TableTheadProps) {
    return (
        <thead className={className} {...rest}>
            {children}
        </thead>
    );
}