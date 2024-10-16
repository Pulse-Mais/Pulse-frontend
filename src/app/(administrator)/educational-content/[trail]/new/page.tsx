"use client";
import { BookOpenText, Clock, DotsSixVertical, ListChecks, PencilLine, PushPin, TextT, Trash, UploadSimple } from "@/utils/icons"
import { Input } from "@/components/input";
import { Section } from "@/components/section";
import { TextArea } from "@/components/textarea";
import { FormEvent, useEffect, useState } from "react";
import { DragDrop } from "@/components/DragDrop";
import DraggableForm from "@/components/DraggableForm";
import TipTapEditor from "@/components/TipTapEditor";
import { Separator } from "@/components/Separator";
import Content from "./_components/content";
import { motion , AnimatePresence} from "framer-motion";
import { form } from "framer-motion/client";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEducationalSchema } from "@/utils/schemas";

export default function Page() {
    const [file, setFile] = useState<File>();
    const [duration, setDuration] = useState({
        hours: [0, 0],
        minutes: [0, 0]
    });
    const [editorContent, setEditorContent] = useState('')
    const [formData, setFormData] = useState<EducationalContentProps>({
        title: '',
        type: 'class',
        duration: '',
        description: '',
        content: [
            { index: 0, type: 'text', content: '' },
        ],
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<EducationalContentProps>({
        resolver: zodResolver(createEducationalSchema),
        mode: "onChange"
    })
    
    function onSubmit(data: EducationalContentProps) {
        console.log(data)
        // e.preventDefault();
        // const totalMinutes = duration.hours * 60 + duration.minutes;
        // const hours = Math.floor(totalMinutes / 60);
        // const minutes = totalMinutes % 60;
        // const formattedDuration = `${hours} hora${hours !== 1 ? 's' : ''} e ${minutes} minuto${minutes !== 1 ? 's' : ''}`;
        // console.log(formattedDuration);
    }

    const handleDurationChange = (type: "hours" | "minutes", index: number, value: string) => {
        console.log(value)
        setDuration(prevDuration => ({
            ...prevDuration,
            [type]: prevDuration[type].map((val, i) => (i === index ? parseInt(value) : val))
        }));

        console.log(duration)
    };

    // useEffect(() => {
    //     console.log(editorContent);
    // }, [editorContent]);

    const addContentItem = (type: ContentItemProps['type']) => {
        setFormData((prevData) => ({
            ...prevData,
            content: [
                ...prevData.content,
                { index: prevData.content.length, type, content: '' },
            ],
        }));
    };

    const removeContentItem = (index: number) => {
        if (formData.content.length <= 1) return toast.error('Você não pode remover o único item de conteúdo da aula!', {
            position: "top-right",
            closeOnClick: false,
            draggable: true,
        });
        // if (formData.content.length <= 1) return toast.error('Você não pode remover o único item de conteúdo da aula');
        
        const updatedContent = formData.content.filter((item) => item.index !== index).map((item, i) => ({ ...item, index: i }));
        setFormData((prevData) => ({
            ...prevData,
            content: updatedContent,
        }));
    };

    const handleInputTimeChange = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 1) {
            e.currentTarget.value = e.currentTarget.value.slice(0, 1);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <BookOpenText size={22} weight="fill" />
                <h1 className="font-bold text-2xl">Criar aula</h1>
            </div>

            <Section className="gap-4 px-5 py-4">
                <h2 className="font-bold text-xl mb-3">Nome da aula</h2>
                <Input 
                    placeholder="Insirá o nome da aula"
                    {...register('title')} 
                    error={errors.title?.message}
                />

                <div className="flex gap-1 items-center bg-blue-100 w-fit rounded-lg mt-4 p-1">
                    <Clock size={22} weight="fill" />
                    <p className="font-bold">Duração:</p>
                    <input 
                        type="number" 
                        defaultValue={0} 
                        onChange={(e) => handleDurationChange('hours', 0, e.target.value)}
                        maxLength={1}
                        onInput={handleInputTimeChange}
                        className="w-4 text-center bg-transparent border-1 border-midnight-blue-950 rounded outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                    <input
                        type="number" 
                        defaultValue={0} 
                        onChange={(e) => handleDurationChange('hours', 1, e.target.value)} 
                        maxLength={1} 
                        onInput={handleInputTimeChange}
                        className="w-4 text-center bg-transparent border-1 border-midnight-blue-950 rounded outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    <p>h</p>
                    <input 
                        type="number"
                        onChange={(e) => handleDurationChange('minutes', 0, e.target.value)}
                        defaultValue={0} 
                        maxLength={1} 
                        onInput={handleInputTimeChange}
                        className="w-4 text-center bg-transparent border-1 border-midnight-blue-950 rounded outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    <input 
                        type="number"
                        onChange={(e) => handleDurationChange('minutes', 1, e.target.value)}
                        defaultValue={0} 
                        maxLength={1} 
                        onInput={handleInputTimeChange}
                        className="w-4 text-center bg-transparent border-1 border-midnight-blue-950 rounded outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    <p>m</p>
                </div>
            </Section>

            <Section className="px-5 py-4">
                <div className="flex justify-between mb-3">
                    <h2 className="font-bold text-xl">Sobre a aula</h2>
                    <PushPin size={22} weight="fill" />
                </div>
                <TextArea 
                    placeholder="Insirá detalhes sobre a aula" 
                    {...register('description')}
                    error={errors.description?.message}
                />
            </Section>
            
            <section className="transition-all duration-150 ">
                <AnimatePresence mode="popLayout">
                    {
                        formData.content.map((content, i) => (
                            <motion.div
                                layout
                                // initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring" }}
                                key={i}
                                className="flex gap-2 overflow-x-hidden [&:not(:first-child)]:my-4"
                            >
                                <div className="my-7">
                                    <DotsSixVertical size={32} />
                                </div>

                                {
                                    content.type === 'file' && <Content.Archive onFileSelect={setFile} />
                                }

                                {
                                    content.type === 'text' && <TipTapEditor onChange={setEditorContent} />
                                }

                                {
                                    content.type === 'alternatives' && <Content.Alternatives />
                                }

                                {
                                    content.type === 'dissertative' && <Content.Dissertative onChange={(text) => {
                                        console.log(text)
                                        content.content = text
                                    }} />
                                }

                                <div className="flex flex-col justify-center gap-3 bg-sky-50 rounded-xl px-5 py-4 h-fit">
                                    <button type="button" onClick={() => addContentItem('text')} className={`${content.type == "text" && "bg-blue-100" || ""} rounded`}><TextT size={26} weight="regular"/></button>
                                    <button type="button" onClick={() => addContentItem('dissertative')} className={`${content.type == "dissertative" && "bg-blue-100" || ""} rounded`}><PencilLine size={26} weight={content.type == "dissertative" ? "fill" : "regular"}/></button>
                                    <button type="button" onClick={() => addContentItem('alternatives')} className={`${content.type == "alternatives" && "bg-blue-100" || ""} rounded`}><ListChecks size={26} weight="regular"/></button>
                                    <button type="button" onClick={() => addContentItem('file')} className={`${content.type == "file" && "bg-blue-100" || ""} rounded`}><UploadSimple size={26} weight={content.type == "file" ? "fill" : "regular"}/></button>
                                    <Separator />
                                    {/* <button><PlusCircle size={26} weight="regular"/></button> */}
                                    <button type="button" onClick={() => removeContentItem(content.index)}><Trash size={26} weight="regular"/></button>
                                </div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </section>

            {/* <Section className="px-5 py-4">
                <h2 className="font-bold text-xl">Material</h2>
                {/* <DraggableForm /> /}
                // <DragDrop onFileSelect={setFile} />
            </Section> */}

            <Button
                _title="Enviar"
                type="submit"
                className="justify-center"
            />
        </form>
    )
}