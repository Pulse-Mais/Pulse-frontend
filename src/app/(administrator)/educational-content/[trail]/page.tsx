"use client";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/Checkbox";
import { Section } from "@/components/section";
import { Separator } from "@/components/Separator";
import { Table } from "@/components/Table";
import { BookmarkSimple, BookOpenText, CalendarBlank, CaretDown, CaretRight, Check, Clock, FloppyDiskBack, Note, Notepad, NotePencil, PencilRuler, Plus, Users } from "@/utils/icons"
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/input";
import { useRouter, usePathname } from "next/navigation";
// import { redirectToNewPage } from "@/utils/function";

export default function Page() {
    // const ref = useRef()
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    function handleSaveAlterations() {
        setIsEditing(false);
    }
    function redirectToNewPage(type: 'class' | 'activity') {

        router.push(`${pathname}/new?type=${type}`);
    }
    return (
        <>
            <div className="flex gap-2 mb-5 ">
                <p>Ver apenas:</p>
                <Button className="px-1 py-0" _title="Aulas"/>
                <Button className="px-1 py-0" _title="Atividades"/>
            </div>

            <div className="flex gap-5">
                <div className={"flex flex-col gap-3 w-full"}>
                    <Accordion className="p-2" label="Aulas e atividades liberadas">
                        <Table.Root>
                            <Table.Head>
                                <Table.Row>
                                    {/* <Table.Th className="pl-2">
                                        <Checkbox id="all-public" />
                                    </Table.Th> */}
                                    <Table.Th className="w-1/2">Nome</Table.Th>
                                    <Table.Th>Tipo</Table.Th>
                                    <Table.Th></Table.Th>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row className="bg-white rounded-lg">
                                    {/* <Table.Td className="pl-2">
                                        <Checkbox id="one-publish" />
                                    </Table.Td> */}
                                    <Table.Td className="whitespace-nowrap overflow-hidden text-ellipsis relative after:absolute after:inset-y-0 after:right-0 after:w-11 after:bg-gradient-to-l after:from-white after:to-transparent">
                                        <div className="flex gap-2">
                                            <BookOpenText size={26} />
                                            <p>
                                                Aulas e atividades liberadas
                                            </p>
                                        </div>
                                    </Table.Td>
                                    <Table.Td>
                                        <p className="bg-gray-300 rounded-lg w-fit text-white py-1 px-2">Aula</p>
                                    </Table.Td>
                                    <Table.Td className="w-full">
                                        <Link href="/" className="flex items-center ml-auto py-1 px-2 rounded-lg text-white w-fit bg-midnight-blue-950">
                                            <p>Ver mais</p>
                                            <CaretRight />
                                        </Link>
                                    </Table.Td>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>
                    </Accordion>

                    <Accordion className="p-2" label="Aulas e atividades liberadas">
                        <p className="text-center py-7 text-gray-600">Ainda não há aulas ou atividades criadas</p>
                    </Accordion>
                </div>

                <div className="flex flex-col gap-3 max-w-80 w-full">
                    <section className="bg-sky-50 px-5 py-7 rounded-lg">
                        <h3 className="font-bold text-xl">Informações</h3>
                        <ul className="flex flex-col gap-2 mt-4">
                            <li>
                                <p className="flex items-center gap-2">
                                    <Notepad size={22} weight="fill"/>
                                    <span className="font-bold">Nome da trilha</span>
                                </p>
                                {
                                    !isEditing ? (
                                        <p className="pl-[30px]">Lorem Ipsum</p>
                                    ) : (
                                        <Input placeholder="Nome da trilha" className="w-fit p-1 py-0 bg-blue-100 border-0 ml-[30px]" />
                                    )
                                }
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <Clock size={22} weight="fill"/>
                                    <span className="font-bold">Duração</span>
                                </p>
                                <p className="pl-[30px]">00 min</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <BookmarkSimple size={22} weight="fill"/>
                                    <span className="font-bold">Módulo</span>
                                </p>
                                <p className="w-fit p-1 px-2 rounded-lg text-gray-500 text-base ml-[30px] bg-sky-100">Módulo</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <BookOpenText size={22} weight="fill"/>
                                    <span className="font-bold">Quantidade de aulas</span>
                                </p>
                                <p className="pl-[30px]">0</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <PencilRuler size={22} weight="fill"/>
                                    <span className="font-bold">Quantidade de atividades</span>
                                </p>
                                <p className="pl-[30px]">0</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <CalendarBlank size={22} weight="fill"/>
                                    <span className="font-bold">Data de criação</span>
                                </p>
                                <p className="pl-[30px]">00/00/0000</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <NotePencil size={22} weight="fill"/>
                                    <span className="font-bold">Ultima edição</span>
                                </p>
                                <p className="pl-[30px]">00/00/0000</p>
                            </li>
                            <li>
                                <p className="flex items-center gap-2">
                                    <Users size={22} weight="fill"/>
                                    <span className="font-bold">Criadores</span>
                                </p>
                                <p className="pl-[30px]">Lorem Ipsum</p>
                            </li>
                        </ul>
                    </section>
                    {
                        !isEditing ? (
                            <>
                                <section>
                                    <button className="flex items-center mx-auto gap-1" onClick={() => setIsEditing(true)}>
                                        <NotePencil size={22} />
                                        <p>Editar Informações</p>
                                    </button>
                                </section>
                                <Separator />
                                <section className="flex gap-2">
                                    <Button leftIcon={Plus} _title="Criar aula" className="text-center w-full" onClick={() => redirectToNewPage("class")} />
                                    <Button leftIcon={Plus} _title="Criar atividade" className="text-center w-full bg-picton-blue-400" onClick={() =>  redirectToNewPage("class")}/>
                                </section>
                            </>
                        ) : (
                            <Button 
                                type="button"
                                leftIcon={FloppyDiskBack} 
                                _title="Salvar" 
                                className="flex items-center justify-center w-full" 
                                iconStyle={{
                                    weight: "fill"
                                }} 
                                onClick={handleSaveAlterations}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}