import { IconProps, BookOpenText, CalendarBlank, Clock, Notepad, NotePencil, PencilRuler, Users } from "@/utils/icons";
import { Section } from "./section";
import Image from "next/image";

interface InformationListProps {
    className?: string;
    _title: string;
    image?: {
        src: string;
        alt: string;
        height?: number;
    };
    listInfo: Array<{
        title: string;
        value: string;
        leftIcon: React.FC<IconProps>
    }>
}

export function InformationList({ className, _title, image, listInfo }: InformationListProps) {
    return (
        <Section className="p-0">
            {
                image && <Image src={image.src} alt={image.alt} width={100} height={image.height || 160} className="w-full h-40" />
            }

            <div className="px-5 py-4">
              <h2 className="font-bold text-xl">Informações</h2>

              <ul className="flex flex-col gap-2 mt-4">
                {listInfo.map(({ leftIcon: LIcon, title, value }, i) => (
                    <li key={i}>
                        <p className="flex items-center gap-2">
                          <LIcon size={22} weight="fill"/>
                          <span className="font-bold">{title}</span>
                        </p>
                        <p className="pl-[30px]">{value}</p>
                    </li>
                ))}
              </ul>
            </div>
        </Section>
    )
}