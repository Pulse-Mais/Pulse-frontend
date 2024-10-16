// import { UseFormRegisterReturn } from "react-hook-form";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    // register?: any //UseFormRegisterReturn<any>;
    error?: string;
}

// export function TextArea({ name, register, error, ...rest } : TextAreaProps) {
//     return (
//         <div className="relative">
//             <textarea id={name || register.name} {...rest} className={twMerge("bg-white px-5 py-2 resize min-h-11 max-h-72 min-w-28 w-full max-w-96 text-base border-1 border-gray-200 rounded-lg outline-none focus:border-midnight-blue-950 peer placeholder:text-midnight-blue-900", rest.className, error && "border-red-500 focus:border-red-500")} {...register}></textarea>
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//         </div>
//     )
// }


export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ name, error, ...rest }, ref) => {
    return (
        <label>
            <textarea 
                {...rest} 
                ref={ref}
                className={
                    twMerge(
                        "bg-white px-5 py-2 resize min-h-11 max-h-72 min-w-28 w-full max-w-96 text-base border-1 border-gray-200 rounded-lg outline-none focus:border-midnight-blue-950 peer placeholder:text-midnight-blue-900", 
                        rest.className, 
                        error ? "border-red-500 placeholder:text-red-500" : "border-blue-100 placeholder-midnight-blue-950",
                    )
                }
            ></textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </label>
    )
});