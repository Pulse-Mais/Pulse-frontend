"use client";
import Image from 'next/image'
import LogoA from '@/../public/PulseMais_Logo.svg'
import { ChatsTeardrop, House } from "@/utils/icons";
import { Icon } from '@phosphor-icons/react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

interface AsideProps {
    links: Array<{ name: string, href: string | Array<{ name: string; href: string }>, icon: Icon, className?: string }>
}

export default function Aside({ links }: AsideProps) {
    const currentPathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
    const toggleExpand = (index: number) => {
        setExpandedItems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <aside className="flex flex-col justify-between items-center h-screen bg-sky-50 py-12 px-7">
            <Image src={LogoA} alt='Oi' width={246} height={76}/>
            
            <ul>
                {
                    links.map(({ href, icon: Icon, name}, i) => (
                        <li className='my-1' key={i}>
                            {href instanceof Array ? (
                                <div>
                                    <div 
                                        className="flex items-center gap-5 px-5 py-2 hover:bg-sky-100 rounded-2xl transition-colors duration-150 cursor-pointer"
                                        onClick={() => toggleExpand(i)}
                                    >
                                        <Icon size={32} weight="regular" />
                                        <p>{name}</p>
                                    </div>
                                    {expandedItems[i] && (
                                        <ul className="ml-8">
                                            {href.map((sublink, j) => (
                                                <li key={j} className='my-1'>
                                                    <Link href={sublink.href} className={twMerge('flex items-center gap-5 px-5 py-2 hover:bg-sky-100 rounded-2xl transition-colors duration-150', currentPathname == sublink.href && "bg-blue-100")}>
                                                        <p>{sublink.name}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link href={href} className={twMerge('flex items-center gap-5 px-5 py-2 hover:bg-sky-100 rounded-2xl transition-colors duration-150', currentPathname == href && "bg-blue-100")}>
                                    <Icon size={32} weight={currentPathname == href ? "fill" : "regular"} />
                                    <p>{name}</p>
                                </Link>
                            )}
                        </li>
                    )) 
                }
            </ul> 

            <div className='flex items-center justify-center w-full gap-3 py-5 bg-blue-100 rounded-2xl'>
                <ChatsTeardrop weight='fill' size={32} />
                <p>
                    <b>Precisa de ajuda?</b>
                    <br/>
                    Fale conosco!
                </p>
            </div>
        </aside>
    )
}