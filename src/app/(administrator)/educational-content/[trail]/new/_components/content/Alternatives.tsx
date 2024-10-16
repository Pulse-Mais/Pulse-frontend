"use client";
import { useEffect, useState } from "react"
import { CheckCircle, Plus, RadioButton } from "@/utils/icons";
import TipTapEditor from "@/components/TipTapEditor";
import { Input } from "@/components/input";
import { AnimatePresence, motion } from "framer-motion";

interface Alternative {
    id: number;
    text: string;
    correct: boolean;
}

interface AlternativesProps {
    onChange: (value: string) => void;
}

export function Alternatives() {
    const [alternatives, setAlternatives] = useState<Alternative[]>([]);

    useEffect(() => {
        setAlternatives(alternatives)
    }, [alternatives]);

    const toggleCorrect = (id: number) => {
        setAlternatives((prevAlternatives) =>
            prevAlternatives.map((alternative) =>
                alternative.id === id
                    ? { ...alternative, correct: !alternative.correct }
                    : alternative
            )
        );
    };

    const addAlternative = () => {
        setAlternatives((prevAlternatives) => [
            ...prevAlternatives,
            { id: prevAlternatives.length, text: "", correct: false },
        ]);
    };

    
    return (
        <div className="bg-sky-50 p-2 rounded-xl w-full h-fit">
            <h2 className="text-xl font-semibold">Questinário</h2>

            <TipTapEditor onChange={() => 1} className="px-0" />

            <ul>
                <AnimatePresence mode="popLayout">
                    {
                        alternatives?.map((alternative, index) => (
                            <motion.li 
                                layout 
                                className="flex items-center gap-2 [&:not(:first-child)]:my-3"
                                key={alternative.id}
                            >
                                <button className="button" onClick={() => toggleCorrect(alternative.id)}>
                                    <RadioButton size={26} weight={alternative.correct ? "fill" : "regular"}/>
                                </button>
                                <Input className="bg-transparent border-0 border-b-2 rounded-none w-1/2 px-0" placeholder="Insira o texto da questão" />
                                {
                                    alternative.correct && (
                                        <div className="outline-none ml-auto text-green-500" title="Alternativa correta.">
                                            <CheckCircle size={26} weight="fill" />
                                        </div>
                                    )
                                }
                            </motion.li>
                        ))
                    }
                    <li className="flex justify-center">
                        <button type="button" onClick={addAlternative} className="flex items-center gap-2 mt-4">
                            <Plus />
                            <p>Adicionar questão</p>
                        </button>
                    </li>
                </AnimatePresence>
            </ul>
        </div>
    )
}