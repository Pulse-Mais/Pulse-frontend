import { useState } from "react";
import { createContext } from "vm";


type GlobalProps = {}

export const GlobalProvider = createContext({} as GlobalProps);

export default function GlobalContext({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    async function getAllStudents() {}
    async function getStudentById(id: string) {}
    async function deleteStudentById(id: string) {}
    async function putUpdateStudentReviewById(id: string) {}
    
    async function getAllMentors() {}
    async function getMentorById(id: string) {}
    async function deleteMentorById(id: string) {}
    async function putUpdateMentorReviewById(id: string) {}
    // TODO: Criar um barramento de publicar turmar se não tiver conteúdo das trilhas

    async function updateMentorInstructions() {}

    async function updateRegistrationFormForMentor() {}
    async function updateRegistrationFormForStudent() {}

    return (
        <GlobalProvider.Provider value={{}}>
            {children}
        </GlobalProvider.Provider>
    );
}