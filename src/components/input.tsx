import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

// export function Input({ className, ...rest }:  InputProps) {
//     return <input {...rest} className={twMerge("bg-white px-5 py-2 rounded-lg outline-none", className)} />
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...rest }, ref) => {
    return (
        <label>
            <input 
                {...rest} 
                ref={ref} 
                className={
                    twMerge(
                        "bg-white border-1 px-5 py-2 rounded-lg outline-none text-base disabled:cursor-not-allowed disabled:bg-gray-100", 
                        error ? "border-red-500 placeholder:text-red-500" : "border-blue-100 placeholder-midnight-blue-950",
                        className
                    )} 
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </label>
    )
});

Input.displayName = "Input";