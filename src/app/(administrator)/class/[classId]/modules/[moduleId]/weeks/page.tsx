import Image from "next/image";
import { CalendarBlank, CaretRight } from "@/utils/icons"

export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Escolha a semana</h1>

            <div className="flex items-center gap-5 h-36 bg-gray-100 rounded-lg">
                {/* <Image src={} /> */}
                <div className="bg-gray-400 w-32 h-full rounded-l-lg" />

                <div className="w-full">
                    <div className="flex items-center justify-between pr-5">
                        <h2 className="font-bold text-xl">Semana 1</h2>
                        <CaretRight size={26} />
                    </div>
                    <p>Descrição</p>

                    <div className="flex items-center gap-2 bg-gray-300 w-fit rounded-full px-2 py-1">
                        <CalendarBlank size={26} weight="fill"/>
                        <p className="font-bold text-base">Data de publicação:</p>
                        <p>00/00/0000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}