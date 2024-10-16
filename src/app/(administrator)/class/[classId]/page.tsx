import { BookBookmark, Bookmark, CalendarBlank, CaretDown, CaretRight, Check, CheckCircle, DownloadSimple, Envelope, HandHeart, Info, LinkedinLogo, Notepad, Phone, Plus, UsersThree } from "@/utils/icons"
import { Accordion } from "@/components/Accordion";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { Table } from "@/components/Table";
import { Separator } from "@/components/Separator";
import Link from "next/link";
// import { useRouter } from "next/router"



export default function Page() {
    // const router = useRouter();
    return (
        <div className="flex flex-col gap-4">
            <Section className="p-5">
                <h2 className="font-bold text-xl pt-2 pb-1">Informações</h2>

                <Separator className="mb-4" />

                <ul>
                    <li className="flex items-center gap-2">
                        <Notepad size={20} weight="fill" />
                        <p className="font-bold">Nome da turma:</p>
                        <p>Nome da turma</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <UsersThree size={20} weight="fill" />
                        <p className="font-bold">Quantidade de alunos:</p>
                        <p>0</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <CalendarBlank size={20} weight="fill" />
                        <p className="font-bold">Duração:</p>
                        <p>00/00/000 <span className="font-bold">à</span> 00/00/0000</p>
                    </li>
                    {/* <li className="flex items-center gap-2">
                        <HandHeart size={20} weight="fill" />
                        <p className="font-bold">Parceria:</p>
                        <p className="bg-gray-400 text-white px-2 rounded-sm">Sem parcerio</p>
                    </li> */}
                </ul>
            </Section>

            {
                false && (
                    <div className="flex items-center gap-5">
                        <Button className="w-fit text-white font-bold" leftIcon={Plus} _title="Publicar turma" />

                        <div className="flex items-center gap-2">
                            <Info size={20} weight="fill" />
                            <p>É preciso que todas as semanas tenham conteúdo para a turma ser publicada.</p>
                        </div>
                    </div>
                )
            }

            <Section className="px-5 py-4">
                <h2 className="font-bold text-xl py-2">Sobre o curso</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis elit, id fringilla elit. Suspendisse nec elit eget neque eleifend posuere at nec ex. Maecenas lacinia, sapien quis consectetur egestas, nunc neque sodales mi, non posuere elit dui in libero.</p>
            </Section>

            <Section className="flex flex-col p-5 gap-4">
                <div className="flex items-center gap-2">
                    <BookBookmark size={26} weight="fill" />
                    <h2 className="font-bold text-xl">Módulo atual:</h2>
                    <p className="bg-gray-400 text-white px-2 rounded-lg ">Módulo</p>
                </div>
                
                <Link href={`/class/classId/modulo/amarelo`} className="flex items-center bg-amber-500 rounded-xl">
                    <div>
                        <div className="flex items-center justify-center m-3 h-32 w-32 rounded-full bg-white">
                            <span className="pr-1 text-amber-500 text-5xl">1</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-5 w-full h-full mr-3">
                        <div className="flex items-center justify-between text-white">
                            <h2 className="font-bold text-xl">Módulo Amarelo</h2>
                            <CaretRight size={26} />
                        </div>
                        <div className="flex items-center gap-2 rounded-full px-2 py-1 text-amber-500">
                            <div className="flex items-center gap-2 rounded-full px-2 py-1 bg-white">
                                <CalendarBlank size={26} weight="fill"/>
                                <p className="font-bold text-base">Data de publicação:</p>
                                <p>00/00/0000</p>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-auto text-white">
                                <CheckCircle size={26} weight="fill" />
                                <p>Conteúdo: 0/8</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href={`/class/classId/modulo/verde`} className="flex items-center bg-green-500 rounded-xl">
                    <div>
                        <div className="flex items-center justify-center m-3 h-32 w-32 rounded-full bg-white">
                            <span className="pr-1 text-green-500 text-5xl">2</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-5 w-full h-full mr-3">
                        <div className="flex items-center justify-between text-white">
                            <h2 className="font-bold text-xl">Módulo Verde</h2>
                            <CaretRight size={26} />
                        </div>
                        <div className="flex items-center gap-2 rounded-full px-2 py-1 text-green-500">
                            <div className="flex items-center gap-2 rounded-full px-2 py-1 bg-white">
                                <CalendarBlank size={26} weight="fill"/>
                                <p className="font-bold text-base">Data de publicação:</p>
                                <p>00/00/0000</p>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-auto text-white">
                                <CheckCircle size={26} weight="fill" />
                                <p>Conteúdo: 0/8</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href={`/class/classId/modulo/azul`} className="flex items-center bg-sky-500 rounded-xl">
                    <div>
                        <div className="flex items-center justify-center m-3 h-32 w-32 rounded-full bg-white">
                            <span className="pr-1 text-sky-500 text-5xl">3</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-5 w-full h-full mr-3">
                        <div className="flex items-center justify-between text-white">
                            <h2 className="font-bold text-xl">Módulo Azul</h2>
                            <CaretRight size={26} />
                        </div>
                        <div className="flex items-center px-2 py-1 text-sky-500">
                            <div className="flex items-center gap-2 rounded-full px-2 py-1 bg-white">
                                <CalendarBlank size={26} weight="fill"/>
                                <p className="font-bold text-base">Data de publicação:</p>
                                <p>00/00/0000</p>
                            </div>
                            
                            <div className="flex items-center gap-2 ml-auto text-white">
                                <CheckCircle size={26} weight="fill" />
                                <p>Conteúdo: 0/8</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </Section>

            <div>
                <Button className="w-fit text-white rounded-full font-bold bg-amber-500" leftIcon={DownloadSimple} _title="Baixar CSV" />
            </div>

            <Accordion label="Alunos">
                <Table.Root>
                    <Table.Head>
                        <Table.Row>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Contato</Table.Th>
                            <Table.Th></Table.Th>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row className="bg-white">
                            <Table.Td>Nome do aluno</Table.Td>
                            <Table.Td>
                                <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex items-center gap-1">
                                    <Link href="http://localhost:3000/"><Envelope size={22} /></Link>
                                    <Link href="tel:11900000000"><Phone size={22} /></Link>
                                    <Link href="https://www.linkedin.com/"><LinkedinLogo size={22} /></Link>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <Link href="/students/nome-do-aluno" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                    <p>Ver mais</p>
                                    <CaretRight size={20} />
                                </Link>
                            </Table.Td>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Accordion>
        </div>
    )
}