"use client";
import { CaretRight, Envelope, Funnel, LinkedinLogo, MagnifyingGlass, Phone } from "@/utils/icons";
import { Section } from "@/components/section";
import { Input } from "@/components/input";
import { Dropdown } from "@/components/Dropdown";
import { Accordion } from "@/components/Accordion";
import { Table } from "@/components/Table";
import Link from "next/link";


export default  function Page() {
    return (
        <div className="flex flex-col gap-4">
            <Section className="p-5">
                <Input placeholder="Buscar pelo nome" className="w-full" />

                <div className="flex justify-between mt-2">
                    <div className="flex items-center gap-2">
                        {/* <Dropdown placeholder="Semestre" onChange={() => null} options={[{label: "1", value: "2"}]} /> */}
                        <Dropdown placeholder="Status" onChange={() => null} options={[{label: "Ativo", value: "2"}, {label: "Não ativo", value: "2"}]} />

                        {/* <Funnel size={26} weight="fill" className="text-gray-400" /> */}
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="outline-none rounded-lg p-2 bg-midnight-blue-950">
                            <MagnifyingGlass size={26} className="text-white" />
                        </button>
                    </div>
                </div>
            </Section>
            
            <Accordion  label="Mentores ativos">
                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Contato</Table.Th>
                            <Table.Th></Table.Th>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body className="bg-white">
                        <Table.Row>
                            <Table.Td>Nome do mentor</Table.Td>
                            <Table.Td>
                                <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex items-center gap-1">
                                    <Link href="/"><Envelope size={22} /></Link>
                                    <Link href="/"><Phone size={22} /></Link>
                                    <Link href="/"><LinkedinLogo size={22} /></Link>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <Link href="/mentors/nome-do-mentor" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                    <p>Ver mais</p>
                                    <CaretRight size={20} />
                                </Link>
                            </Table.Td>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Accordion>

            <Accordion  label="Mentores em espera">
                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Contato</Table.Th>
                            <Table.Th></Table.Th>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body className="bg-white">
                        <Table.Row>
                            <Table.Td>Nome do mentor</Table.Td>
                            <Table.Td>
                                <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex items-center gap-1">
                                    <Link href="/"><Envelope size={22} /></Link>
                                    <Link href="/"><Phone size={22} /></Link>
                                    <Link href="/"><LinkedinLogo size={22} /></Link>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                    <p>Ver mais</p>
                                    <CaretRight size={20} />
                                </div>
                            </Table.Td>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Accordion>
        </div>
    )
}