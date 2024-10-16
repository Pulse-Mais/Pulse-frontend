import { CalendarBlank, CaretRight } from "@/utils/icons"
import { Section } from "@/components/section";



export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <Section className="flex items-center">
                <div className="flex items-center justify-center m-3 w-32 h-32 bg-midnight-blue-950 text-white rounded-full text-5xl">
                    <span className="pr-1">1</span>
                </div>
                <div className="flex flex-col justify-between gap-5 w-full h-full">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">Módulo Amarelo</h2>
                        <CaretRight size={26} />
                    </div>
                    <div className="flex items-center gap-2 bg-white w-fit rounded-full px-2 py-1">
                        <CalendarBlank size={26} weight="fill"/>
                        <p className="font-bold text-base">Data de publicação:</p>
                        <p>00/00/0000</p>
                    </div>
                </div>
            </Section>
            <Section className="flex items-center">
                <div className="flex items-center justify-center m-3 w-32 h-32 bg-midnight-blue-950 text-white rounded-full text-5xl">
                    <span className="pr-1">2</span>
                </div>
                <div className="flex flex-col justify-between gap-5 w-full h-full">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">Módulo Verde</h2>
                        <CaretRight size={26} />
                    </div>
                    <div className="flex items-center gap-2 bg-white w-fit rounded-full px-2 py-1">
                        <CalendarBlank size={26} weight="fill"/>
                        <p className="font-bold text-base">Data de publicação:</p>
                        <p>00/00/0000</p>
                    </div>
                </div>
            </Section>
            <Section className="flex items-center">
                <div className="flex items-center justify-center m-3 w-32 h-32 bg-midnight-blue-950 text-white rounded-full text-5xl">
                    <span className="pr-1">3</span>
                </div>
                <div className="flex flex-col justify-between gap-5 w-full h-full">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">Módulo Azul</h2>
                        <CaretRight size={26} />
                    </div>
                    <div className="flex items-center gap-2 bg-white w-fit rounded-full px-2 py-1">
                        <CalendarBlank size={26} weight="fill"/>
                        <p className="font-bold text-base">Data de publicação:</p>
                        <p>00/00/0000</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}