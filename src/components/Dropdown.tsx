"use client";
import { twMerge } from "tailwind-merge";
import { CaretDown, IconProps } from "@/utils/icons";
import { useState, useRef, useEffect } from "react";

interface IOption {
    leftIcon?: React.FC<IconProps>;
    label: string;
    value: string;
    rightIcon?: React.FC<IconProps>;
}

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    placeholder: string;
    options: Array<IOption>
    onChange: (value: IOption) => void;
    disabled?: boolean;
}

export function Dropdown({ className, placeholder, options, disabled = false, ...rest }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleItemSelect(option: IOption) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={twMerge("flex bg-white border-1 border-gray-200 pl-5 pr-2 py-2 rounded-lg outline-none appearance-none min-w-24 relative", disabled ? "cursor-not-allowed bg-gray-100" : "cursor-pointer" ,className)} onClick={() => {
            setIsOpen(!isOpen);
        }}>
            <p>{selectedOption?.label || placeholder}</p>

            {
                isOpen && (
                    <div className="bg-white rounded-lg border-1 border-zinc-300 shadow absolute translate-y-9 right-0 min-h-5 max-h-28 overflow-auto w-full">
                        {
                            options.map((option, i) => (
                                <button key={i} className="pl-5 pr-2" onClick={() => handleItemSelect(option)}>
                                    <p>{option.label}</p>
                                </button>
                            ))
                        }
                    </div>
                )
            }

            <div className="pl-2 ml-auto">
                <CaretDown size={22} className="flex right-1" />
            </div>
        </div>
    )
}