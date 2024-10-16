"use client";
import { Input } from "@/components/input";
import TipTapEditor from "@/components/TipTapEditor";
import { useEffect, useState } from "react";


export function Dissertative({ onChange }: { onChange: (value: string) => void }) {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');


    useEffect(() => {
        onChange(`[[question]]${question}[[answer]]${answer}`);
        // REGEX: /\[\[question\]\](.*?)\[\[answer\]\](.*)/;
    }, [question, answer]);



    return (
        <div className="bg-sky-50 p-2 rounded-xl w-full h-fit">
            <h2 className="text-xl font-semibold">Dissertativa</h2>
            <TipTapEditor 
                onChange={setQuestion} 
                placeholder="Pergunta"
            />

            <Input 
                className="bg-transparent border-0 rounded-none border-b-2 w-full h-10 p-0 mx-2"
                placeholder="Digita a resposta de exemplo aqui." 
                onChange={(e) => setAnswer(e.target.value)}
            />
        </div>
    )
}