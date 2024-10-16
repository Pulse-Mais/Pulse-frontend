"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Modal from "@/components/Modal";
import { Section } from "@/components/section";
import { Separator } from "@/components/Separator";
import { TextArea } from "@/components/textarea";
import { CalendarBlank, Notepad, Plus, Trash, UsersThree } from "@/utils/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateRangePicker } from "@nextui-org/date-picker";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newClassSchema = z.object({
    className: z.string().min(5, "Nome da turma é obrigatório"),
    studentCount: z.number().min(1, "Quantidade de alunos deve ser pelo menos 1"),
    duration: z.string().min(1, "Duração é obrigatória"),
});
  
type NewClassFormData = z.infer<typeof newClassSchema>;

export default function NewClass() {
    // className="flex flex-1 flex-col"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleModal = () => setIsModalOpen(!isModalOpen);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewClassFormData>({
        resolver: zodResolver(newClassSchema),
    });
    
    const onSubmit = (data: NewClassFormData) => {
        console.log(data); 
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Section title="a">
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-xl px-1 py-2">Informações</h2>
                        </div>
                        <Separator className="mb-2" />

                        <ul className="flex flex-col gap-3">
                            <li className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <Notepad weight="fill" size={20} />
                                    <h3 className="text-nowrap">Nome da turma:</h3>
                                </div>
                                <Input placeholder="Nome da turma" className="w-full bg-blue-100 border-0" {...register("className")} />
                                {/* {errors.className && (
                                    <p className="text-red-500">{errors.className.message}</p>
                                )} */}
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <UsersThree weight="fill" size={20} />
                                    <h3 className="text-nowrap">Quantidade de alunos:</h3>
                                </div>
                                <Input placeholder="00" className="w-full bg-blue-100 border-0" type="number" {...register("duration")} />
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <CalendarBlank weight="fill" size={20} />
                                    <h3 className="text-nowrap">Duração:</h3>
                                </div>
                                {/* <Input placeholder="00/00/0000 à 00/00/0000" className="w-full" {...register("studentCount")} /> */}
                                
                                <DateRangePicker variant="bordered" className="w-full bg-blue-100 rounded-xl" />
                            </li>
                        </ul>
                    </Section>

                    <Section className="my-2">
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-xl px-1 py-2">Sobre o curso</h2>
                        </div>

                        <TextArea placeholder="Descrição do curso" className="w-full max-w-full bg-blue-100 border-0" name="a" />
                    </Section>

                    <div className="flex items-center justify-center gap-2">
                        <Button type="submit" _title="Criar turma" leftIcon={Plus} />
                        <Button type="button" _title="Excluir" leftIcon={Trash} onClick={handleModal} className="bg-gray-400 hover:bg-red-600" />
                    </div>
                </form>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleModal}>
                <h3 className="font-medium text-xl">Deseja mesmo excluir?</h3>

                <div className="flex items-center justify-end gap-2 mt-4">
                    <Button _title="Não" onClick={handleModal} className="bg-gray-400 hover:bg-midnight-blue-950"/>
                    <Button _title="Sim" onClick={() => router.push("/class")} />
                </div>
            </Modal>
        </>
    )
};