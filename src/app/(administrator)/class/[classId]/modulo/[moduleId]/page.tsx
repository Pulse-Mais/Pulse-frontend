// "use client"
import Image from "next/image";
import { CalendarBlank, CaretRight, Check, CheckCircle, Info } from "@/utils/icons"
import { Section } from "@/components/section";
import Link from "next/link";

export default function Page({ params }: { params: { classId: string, moduleId: string } }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Escolha a semana</h1>


            <div className="flex flex-col gap-8">
                <Link href={`/class/${params.classId}/modulo/${params.moduleId}/week-1`} className="flex items-center gap-5 h-36 bg-sky-50 rounded-lg">
                    {/* <Image src={} /> */}
                    <div className="bg-midnight-blue-950 w-32 h-full rounded-l-lg" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between pr-5">
                            <h2 className="font-bold text-xl">Semana 1</h2>
                            <CaretRight size={26} />
                        </div>
                        <p>Descrição</p>

                        <div className="flex items-center gap-2 pr-5 py-1 mt-auto">
                            <div className="flex items-center gap-2 bg-blue-100 rounded-full py-1 px-3">
                                <CalendarBlank size={26} weight="fill"/>
                                <p className="font-bold text-base">Data de publicação:</p>
                                <p>00/00/0000</p>
                            </div>

                            <div className="flex items-center gap-2 ml-auto text-green-500">
                                <CheckCircle size={26} weight="fill"/>
                                <p className="font-semibold">Conteúdo</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href={`/class/classId/modulo/moduloId/weeks/trilhas`} className="flex items-center gap-5 h-36 bg-sky-50 rounded-lg">
                    {/* <Image src={} /> */}
                    <div className="bg-midnight-blue-950 w-32 h-full rounded-l-lg" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between pr-5">
                            <h2 className="font-bold text-xl">Semana 2</h2>
                            <CaretRight size={26} />
                        </div>
                        <p>Descrição</p>

                        <div className="flex items-center gap-2 px-2 py-1 mt-auto">
                            <div className="flex items-center gap-2 bg-blue-100 rounded-full">
                                <CalendarBlank size={26} weight="fill"/>
                                <p className="font-bold text-base">Data de publicação:</p>
                                <p>00/00/0000</p>
                            </div>

                            <div className="flex items-center gap-2 ml-auto">
                                <Info size={26} weight="fill"/>
                                <p className="font-semibold">Conteúdo</p>
                            </div>
                        </div>
                    </div>
                </Link >
            </div>
            
        </div>
    )
}