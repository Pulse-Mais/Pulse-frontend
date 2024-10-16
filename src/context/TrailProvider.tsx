import { createContext, useState } from "react";


interface ContentItem {
    index: number;
    type: 'text' | 'file' | 'alternatives' | 'dissertative';
    content: string;
    alternatives?: Array<{ text: string; correct: boolean }>;
}
  
interface FormData {
    id: string;
    title: string;
    type: "class" | "activity";
    status: "published" | "not-published";
    duration: string; // hh:mm
    description: string;
    content: Array<ContentItem>;
    createdAt: Date;
    updatedAt: Date;
}

type CreateTrailReturn = { // Renomear
    id: string;
    name: string;
    duration: number;
    status: "published" | "not-published";
    numberOfClass: number;
    numberOfActives: number;
    lessonsActivitiesContent: Array<FormData>; // Renomar | TODO: Confirmar se isto vai retornar aqui ou se vai ser um método separado
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
}

type TrailProps = {
    isLoading: boolean;
    // curretTrailId: string; // TODO: Confirmar se ainda vai existir.
    // setCurrentTrailId: (id: string) => void; // TODO: Confirmar se ainda vai existir
    
    createTrail: (name: string) => CreateTrailReturn | undefined;
    updateTrail: (id: string) => CreateTrailReturn | undefined; // TODO: Não precisa retornar nada, apenas informar se foi.
    deleteTrail: (id: string) => void; // TODO: Não precisa retornar nada, apenas informar se foi. 
    getAllTrails: () => CreateTrailReturn[] | undefined;
    getTrailById: (id: string) => CreateTrailReturn | undefined;
    // getTrailByUser: (userId: string) => void;
    // getAllActivitiesAndLessonsByTrailId: (trailId: string) => void;
    publishByTrailId: (trailId: string) => void;
}

export const TrailProvider = createContext({} as TrailProps);

export default function TrailContext({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    // const [curretTrailId, setCurrentTrailId] = useState('');


    function createTrail(name: string): CreateTrailReturn | undefined {
        try {
            setIsLoading(true);

            // setCurrentTrailId('123');
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }

        return 
    }

    function updateTrail(): CreateTrailReturn | undefined {
        try {
            setIsLoading(true);

        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }

        return
    }

    function getTrailById(id: string): CreateTrailReturn | undefined { // REVISAR: Preciso de passar a props? (Caso o curretTrailId esteja presente)
        try {
            setIsLoading(true);

        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }

        return
    }

    // function getAllActivitiesAndLessonsByTrailId(trailId: string) { // TODO: Preciso deste método? Ou posso retornar tudo em getAllTrails? 
    //     try {} catch(err) {} finally {}
    // }

    function getAllTrails(): CreateTrailReturn[] | undefined { // TODO: Confirmar se isto vai retornar um Array de CreateTrailReturn ou vai ser outro tipo.
        try {
            setIsLoading(true);

        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }

        return
    }

    function getTrailByUser(userId: string) { // Filtrar trilha por usuário

    }
    
    function publishByTrailId(trailId: string) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <TrailProvider.Provider value={{
            isLoading, 
            // curretTrailId, setCurrentTrailId,
            createTrail, updateTrail, getAllTrails, getTrailById, publishByTrailId
        }}>
            {children}
        </TrailProvider.Provider>
    )
}