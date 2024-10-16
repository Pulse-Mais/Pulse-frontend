"use client";
import { CaretDown, CaretRight, Download, DownloadSimple, Funnel, MagnifyingGlass, Plus } from "@/utils/icons";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/Dropdown";
import { Input } from "@/components/input";
import { Section } from "@/components/section";
import { Table } from "@/components/Table";
import { Accordion } from "@/components/Accordion";
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function Page() {
    const route = useRouter();

    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex flex-col gap-4">
                    <Section className="p-5">
                        <Input placeholder="Buscar pelo nome" className="w-full" />

                        <div className="flex justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <Dropdown placeholder="Semestre" onChange={() => null} options={[{label: "2024/1", value: "2024/1"}, {label: "2024/2", value: "0"}]} />
                                <Dropdown placeholder="Status" onChange={() => null} options={[{label: "Ativo", value: "1"}, {label: "Não ativo", value: "0"}]} />

                                {/* <Funnel size={26} weight="fill" className="text-gray-400" /> */}
                            </div>

                            <div className="flex items-center gap-2">
                                <Button _title="Limpar" className="bg-gray-400 text-white"/>
                                <button className="bg-midnight-blue-950 outline-none rounded-lg p-2">
                                    <MagnifyingGlass size={26} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Section>

                    <div className="flex items-center gap-2">
                        <Button className="w-fit text-white rounded-full font-bold" onClick={() => route.push("/class/new-class")} leftIcon={Plus} _title="Criar" />
                        <Button className="w-fit text-white rounded-full font-bold bg-amber-500" leftIcon={DownloadSimple} _title="Baixar CSV" />
                    </div>

                    <Accordion label="Turmas publicadas">
                        <Table.Root>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Th>Nome</Table.Th>
                                    <Table.Th>Semestre</Table.Th>
                                    <Table.Th>Status</Table.Th>
                                    <Table.Th></Table.Th>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row className="bg-white">
                                    <Table.Td>Nome da turma</Table.Td>
                                    <Table.Td>0000/0</Table.Td>
                                    <Table.Td>
                                        <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
                                    </Table.Td>
                                    <Table.Td>
                                        <Link href="/class/nome-da-turma" className="flex items-center ml-auto w-fit py-1 px-2 rounded-lg text-white bg-midnight-blue-950">
                                            <p>Ver mais</p>
                                            <CaretRight size={20} />
                                        </Link>
                                    </Table.Td>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>
                    </Accordion>

                    <Accordion label="Turmas não publicadas">
                        <p className="text-center py-7 text-gray-600">Não há turmas não publicadas</p>
                    </Accordion>
                </div>
            </div>
        </>
    )
}