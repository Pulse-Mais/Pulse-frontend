import { createContext, useState } from "react";


interface ContentItem {
    index: number; // * 
    type: 'text' | 'file' | 'alternatives' | 'dissertative'; // * 
    content: string; // *
    alternatives?: Array<{ text: string; correct: boolean }>; // * 
}
  
interface FormData {
    title: string; // * 
    type: "class" | "activity"; // *
    duration: string; // hh:mm // * 
    description: string; // * 
    content: Array<ContentItem>; // *
}


const JSONExample: FormData = {
    title: "atividade do passos",
    type: "activity",
    duration: "00:30", // HH:mm
    description: "Descrição da aula de fluxo para o Passos",
    content: [
        {
            index: 1,
            type: "text",
            content: "<h1><strong>adwdawdawdawdawd</strong><br><br>123123123<br>awdawdawd</h1>"
        },
        {
            index: 2,
            type: "alternatives",
            content: "Qual a melhor forma de fazer um fluxo?",
            alternatives: [
                { text: "Com papel e caneta", correct: false },
                { text: "Com o Figma", correct: true },
                { text: "Com o Adobe XD", correct: false },
                { text: "Com o Sketch", correct: false },
            ]
        },
        {
            index: 3,
            type: "dissertative",
            content: "[Descreva o que é um fluxo]-[[resposta do adm]]"
        },
        {
            index: 4,
            type: "file",
            content: "file-4.mp3"
        },
        {
            index: 6,
            type: "file",
            content: "file-6.mp4"
        }
    ]
}

type ActivityProps = {
    isLoading: boolean;
    // curretClassId: string; // TODO: Confirmar se ainda vai existir.
    // setCurrentClassId: (id: string) => void; // TODO: Confirmar se ainda vai existir.
    // name: string;
    
    createClass: (name: string) => void;
    updateClass: (name: string) => void;
    publishByActivityId(activityId: string): void;
}

export const ActivityProvider = createContext({} as ActivityProps);

export default function ActivityContext({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    // const [curretClassId, setCurrentClassId] = useState('');

    async function createClass() {
        try {
            setIsLoading(true);

            // setCurrentClassId('123');
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }
    }

    async function updateClass() {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }
    }

    async function getAllActivitysByTrailId(trailId: string) {}

    async function getActivityById(id: string) {}

    async function publishByActivityId(activityId: string) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    // async function getActivityByUser(userId: string) {}

    return (
        <ActivityProvider.Provider value={{
            isLoading, 
            // curretClassId, setCurrentClassId,
            createClass, updateClass, publishByActivityId
        }}>
            {children}
        </ActivityProvider.Provider>
    )
}