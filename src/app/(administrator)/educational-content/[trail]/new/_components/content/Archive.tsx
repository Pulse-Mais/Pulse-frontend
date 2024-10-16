"use client";
import { FileArrowUp } from "@/utils/icons"
import { useEffect, useState } from "react";


type ArchiveProps = {
    onFileSelect: (file: File | undefined) => void;
}

export function Archive({ onFileSelect }: ArchiveProps) {
    const [file, setFile] = useState<File>();
    const [isDragging, setIsDragging] = useState(false);


    function handleBrowseFile(e: React.ChangeEvent<HTMLInputElement>) {
        var getFile = e.target.files;
        const allowedMimeTypes = [
            'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
            'application/pdf', // pdf
            'image/jpeg', // jpg, jpeg
            'image/png', // png
            'image/svg+xml', // svg
            'application/msword', // doc
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
            'application/vnd.ms-excel', // xls
            'text/plain', // txt
            'audio/*', // audio files
            'video/*' // video files
        ];

        // Verifique se o tipo do arquivo está na lista de tipos permitidos
        if(getFile && getFile.length > 0) {
            if (allowedMimeTypes.includes(getFile[0].type)) {
                setFile(getFile[0]);
                console.log(getFile[0]);
            } else {
                alert('Formato de arquivo não suportado. Por favor, carregue um arquivo válido.');
            }
        }
        
    }

    const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        setIsDragging(false);
        var getFile = event.dataTransfer!.files;
        if(getFile?.length > 0) setFile(getFile[0]);
    }

    useEffect(() => {
        onFileSelect(file);
    }, [])

    return (
        <div className='bg-sky-50 p-2 rounded-xl w-full h-fit'>
            <h2 className="text-xl font-semibold">Material</h2>

            <div 
                className="flex justify-center items-center gap-2 border-dotted border-2 rounded-md border-gray-400 select-none p-2 mt-4 hover:cursor-pointer"
                draggable
                onDrop={handleDrop}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true)
                }}
                onDragLeave={(e) => {
                    e.preventDefault();
                    setIsDragging(false)
                }}
            >
                {
                    isDragging ? (
                        <p>Solte o arquivo</p>
                    ) : (
                        <label className="flex items-center gap-2 hover:cursor-pointer">
                            <FileArrowUp size={28}/>
                            <input 
                                hidden
                                type="file"
                                id="browse"
                                accept="image/*, video/*, application/pdf, .doc, .docx, .ppt, .pptx"
                                onChange={handleBrowseFile} 
                            />
                            <p>Adicionar arquivo</p>
                        </label>
                    )
                }
            </div>
        </div>
    )
}