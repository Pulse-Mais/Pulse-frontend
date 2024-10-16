"use client";
import { BookOpenText, DownloadSimple, Envelope, Info, LinkedinLogo, Trash, UserCircle, WhatsappLogo, Plus, CaretRight, ThumbsUp, ThumbsDown, Warning } from "@/utils/icons"
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { Accordion } from "@/components/Accordion";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/Separator";
import { Table } from "@/components/Table";
import Modal from "@/components/Modal";
import { useState } from "react";
import { toast } from "react-toastify";


export default function Page({ params }: { params: { studentId: string } }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteStudent = () => {
        try {
            throw new Error("Erro ao excluir aluno");
            setIsModalOpen(false);
        } catch(err) {
            console.error(err);
            toast.error("Ups! Houve um erro ao tentar excluir aluno");
        } finally {}
    }
    
    return (
        <>
            <div className="flex flex-col gap-4">
                <Section className="flex gap-5 p-5">
                    <div>
                        <div className="my-2">
                            <div className="flex items-center gap-2">
                                <UserCircle size={26} weight="fill" />
                                <h3 className="font-bold">Sobre</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Proin pharetra adipiscing ac id aliquam morbi amet scelerisque. In nibh viverra orci sed risus eget adipiscing eget porta. Ultricies malesuada amet donec urna. Gravida lectus lacus viverra aliquet suspendisse quis fusce semper velit. Diam interdum lobortis enim neque. Mattis massa ac integer egestas. Condimentum interdum consectetur viverra malesuada.</p>
                        </div>

                        <div className="my-2">
                            <div className="flex items-center gap-2">
                                <BookOpenText size={26} weight="fill" />
                                <h3 className="font-bold">Curso</h3>
                            </div>
                            <ul>
                                <li>
                                    <p>Semestre: Lorem ipsum</p>
                                </li>
                                <li>
                                    <p>Mentor: <span className="bg-gray-400 text-white px-2 rounded-sm">Nome mentor</span></p>
                                </li>
                            </ul>
                        </div>

                        <div className="my-2">
                            <div className="flex items-center gap-2">
                                <Info size={26} weight="fill" />
                                <h3 className="font-bold">Informações</h3>
                            </div>

                            <ul>
                                <li>
                                    <p>Localidade: Localidade</p>
                                </li>
                                <li>
                                    <p>Idade: 20 anos</p>
                                </li>
                                <li>
                                    <p>Escolaridade: Ensino médio completo</p>
                                </li>
                                <li>
                                    <p>Linkedin: <Link className="underline" href="http://linkedin.com">in/aluno</Link></p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-[200px] w-full">
                        <Image src="https://via.placeholder.com/200x200" alt="Foto do usuário X" width={200} height={200} className="w-[12.5rem] h-[12.5rem] rounded-full" />

                        <div className="flex justify-center items-center gap-2 mt-2">
                            <Link className="bg-midnight-blue-950 rounded-lg p-1" href="https://web.whatsapp.com/">
                                <WhatsappLogo size={26} weight="fill" color="white" />
                            </Link>
                            <Link className="bg-midnight-blue-950 rounded-lg p-1" href="https://www.linkedin.com/">
                                <LinkedinLogo size={26} weight="fill" color="white" />
                            </Link>
                            <Link className="bg-midnight-blue-950 rounded-lg p-1" href="mailto:viniciuscosta_e10@hotmail.com">
                                <Envelope size={26} weight="fill" color="white" />
                            </Link>
                        </div>

                        <Separator className="my-2" />

                        <div>
                            <Button 
                                _title="Comentário" 
                                leftIcon={Plus} 
                                className="my-1 w-full bg-midnight-blue-950 text-white justify-center font-bold" 
                            />
                            <Button 
                                _title="Excluir perfil" 
                                leftIcon={Trash} 
                                className="my-1 w-full bg-gray-300 text-gray-600 justify-center font-bold hover:bg-red-500 hover:text-white"
                                onClick={() => setIsModalOpen(true)}
                            />
                        </div>
                    </div>
                </Section>

                <div>
                    <Button className="w-fit text-white rounded-full font-bold bg-amber-500" leftIcon={DownloadSimple} _title="Baixar CSV" />
                </div>

                <Accordion label="Atividades">
                    <Table.Root>
                        <Table.Head>
                            <Table.Row>
                                <Table.Th>Nome</Table.Th>
                                <Table.Th>Modulo</Table.Th>
                                <Table.Th>Semana</Table.Th>
                                <Table.Th>Trilha</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body className="bg-white">
                            <Table.Row>
                                <Table.Td>Nome</Table.Td>
                                <Table.Td>
                                    <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Modulo</p>
                                </Table.Td>
                                <Table.Td>Semana X</Table.Td>
                                <Table.Td>Nome da Tilha</Table.Td>
                                <Table.Td>
                                    <Link href="/atividade" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                        <p>Ver mais</p>
                                        <CaretRight size={20} />
                                    </Link>
                                </Table.Td>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Accordion>

                <Accordion label="Mentorias">
                    <Table.Root>
                        <Table.Head>
                            <Table.Row>
                                <Table.Th>Mentoria</Table.Th>
                                <Table.Th>Data</Table.Th>
                                <Table.Th>Confirmação</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body className="bg-white">
                            <Table.Row>
                                <Table.Td>Num da Mentoria</Table.Td>
                                <Table.Td>00/00/0000</Table.Td>
                                <Table.Td>
                                    <div className="flex items-center gap-2">
                                        <button className=""><ThumbsUp size={20}/></button>
                                        <button className=""><ThumbsDown size={20}/></button>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <Link href="/mentors/num-da-mentoria" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                        <p>Ver mais</p>
                                        <CaretRight size={20} />
                                    </Link>
                                </Table.Td>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Accordion>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} showCloseButton>
                <div className="flex flex-col justify-center items-center">
                    <Warning size={100} className="text-midnight-blue-950" weight="fill" />

                    <h2 className="text-xl font-bold txt-center">Espera um pouco!</h2>
                    <p className="text-base">Tem certeza que deseja excluir esse aluno?</p>

                    <div className="flex gap-2 mt-2">
                        <Button 
                            className="w-fit bg-gray-300 text-gray-600 hover:bg-midnight-blue-950 hover:text-white" 
                            _title="Voltar" 
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Voltar" 
                        />
                        <Button 
                            className="w-fit bg-red-500 hover:bg-red-600 text-white" 
                            _title="Excluir" 
                            onClick={handleDeleteStudent}
                            aria-label="Excluir"
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}