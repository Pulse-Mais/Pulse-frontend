"use client";
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Section } from "@/components/section"
import { Dropdown } from "@/components/Dropdown"
import { List, BellSimple, MagnifyingGlass, Plus, CaretRight, CaretDown, Notepad, Clock, BookOpenText, PencilRuler, Trash, MagnifyingGlassMinus } from "@/utils/icons"
import { Accordion } from "@/components/Accordion"
import { Table } from "@/components/Table"
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { Controller, set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const newTrailSchema = z.object({
    name: z.string().min(5, "Nome da trilha é obrigatório ter mais de 5 caracteres."),
})

type NewTrailFormData = z.infer<typeof newTrailSchema>;

export default function EducationalContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isLoading, isValid },
        watch,
        reset,
        resetField
    } = useForm<NewTrailFormData>({
        resolver: zodResolver(newTrailSchema),
        mode: "onChange"
    });

    function onSubmit() {
        console.log('changed');

        // router.push(`/educational-content/abc`)
        console.log(isLoading)
        console.log(!isValid)
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <Section className="relative">
                    <Input placeholder="Buscar pelo nome" className="w-full text-opacity-70 placeholder:text-opacity-70" />
                    <button className="absolute right-6 top-0 bottom-0">
                        <MagnifyingGlass />
                    </button>
                </Section>

                <div>
                    <Button className="w-fit text-white rounded-full font-bold" leftIcon={Plus} _title="Criar" onClick={() => setIsModalOpen(true)}/>
                </div>

                <Accordion className="p-2" label="Trilhas publicadas">
                    <Table.Root>
                        <Table.Head>
                            <Table.Row>
                                <Table.Th isOrdered={true} onClick={() => 1}>Nome</Table.Th>
                                <Table.Th></Table.Th>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row className="bg-white">
                                <Table.Td>Nome da trilha</Table.Td>
                                <Table.Td>
                                    <Link href="/educational-content/nome-da-trilha" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                        <p>Ver mais</p>
                                        <CaretRight size={20} />
                                    </Link>
                                </Table.Td>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Accordion>

                <Accordion className="p-2" label="Trilhas não publicadas">
                    <p className="text-center py-7 text-gray-600">Ainda não há aulas ou atividades criadas</p>
                </Accordion>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => {
                setIsModalOpen(false);
                reset();
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Notepad size={20} className="mb-auto mt-1"/>
                            <p>Nome da trilha:</p>
                        </div>
                        <Controller 
                            control={control}
                            name="name"
                            render={({ field }) => <Input placeholder="Nome da trilha" className="min-w-96" {...field} />}
                            disabled={isLoading}
                            defaultValue=""
                        />
                        {errors.name && (<span className="text-red-500">{errors.name.message}</span>)}
                    </label>

                    <div className="flex flex-col items-center justify-end gap-2 mt-6">
                        <Button 
                            type="submit" 
                            _title="Criar" 
                            className="w-full justify-center" 
                            leftIcon={Plus}
                            disabled={isLoading || !isValid}    
                            isLoading={isLoading}
                        />
                        <Button 
                            type="button" 
                            _title="Cancelar" 
                            className="bg-gray-400 w-full justify-center" 
                            leftIcon={Trash} 
                            onClick={() => {
                                setIsModalOpen(false);
                                reset();
                            }}
                            disabled={isLoading} 
                        />
                    </div>
                </form>
            </Modal>
        </>
    )
}