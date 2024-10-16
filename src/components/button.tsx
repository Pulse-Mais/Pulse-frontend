import { IconProps } from "@/utils/icons";
import { LoaderIcon } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { LoadingCircle } from "./LoadingCircle";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    rightIcon?: React.FC<IconProps>;
    leftIcon?: React.FC<IconProps>;
    size?: number
    _title: string;
    isLoading?: boolean;
    iconStyle?: IconProps
}

export function Button({ rightIcon: RIcon, leftIcon: LIcon, size = 22, _title, className, isLoading, iconStyle, ...rest }: ButtonProps) {
    return (
        <button 
            {...rest} 
            className={twMerge("flex items-center gap-2 outline-none rounded-lg px-5 py-2 bg-midnight-blue-950 text-white transition-colors duration-150 disabled:cursor-not-allowed disabled:bg-blue-950", className)}
        >
            {isLoading ? (<LoadingCircle />) : (
                <>
                    {LIcon && <LIcon size={size} {...iconStyle}/>}
                    <p className="text-inherit">{_title}</p>
                    {RIcon && <RIcon size={size} {...iconStyle}/>}
                </>
            )}
        </button>
    )
}