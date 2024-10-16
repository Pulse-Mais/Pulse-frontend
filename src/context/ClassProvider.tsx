import { createContext, useState } from "react";


interface IClassProps {
    name: string;
    numberOfStudent: number;
    duration: {
        startIn: Date;
        endIn: Date;
    };
    description: string;
}

type ClassProps = {
    isLoading: boolean;
    
    createClass: (data: IClassProps) => void; 
    updateClass: () => void; // TODO: Precisa atualizar?
    getClassById: (id: string) => void;
    getAllClasses: () => void;
    publishByClassId: (classId: string) => void;
}

export const ClassProvider = createContext({} as ClassProps);

export default function ClassContext({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    async function createClass(data: IClassProps) {
        try {
            setIsLoading(true);

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

    async function getClassById(id: string) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }
    }

    async function getAllClasses() {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);

        }
    }

    async function publishByClassId(classId: string) {
    }

    return (
        <ClassProvider.Provider value={{
            isLoading,
            createClass, updateClass, getClassById, getAllClasses, publishByClassId
        }}>
            {children}
        </ClassProvider.Provider>
    )
}