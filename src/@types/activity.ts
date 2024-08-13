import { MaterialContent } from "./material";

type TypeSubContent = "material" | "text" // Renomear

type SubContentMaterial = { // Renomear
    typeMaterial: "material";
    fileName: string;
    indexItem: number;
} & MaterialContent;

type SubContentText = { // Renomear
    typeMaterial: "text";
    title: string;
    description: string;
    indexItem: number;
}



type IQuestionnaires = {
    question: string;
    answers: Array<{
        answer: string;
        isCorrect: boolean;
    }>;
}

type SubContent = SubContentMaterial | SubContentText | IQuestionnaires; // Renomear

type ICreateQuestionnaire = {
    title: string;
    /**
     * In minutes
     */
    duration: number;
    about: string;
    contents: Array<SubContent> // Renomear
    questionnaires: Array<IQuestionnaires>
}

type IQuestionnaire = {
    id: string;
    idTrail: string;
    title: string;
    duration: number;
    about: string;
    status: "published" | "not-published";
    contents: Array<SubContent>
    primaryMaterial: MaterialContent;
    createAt: string;
    updateAt: string;
}

export type {
    ICreateQuestionnaire,
    IQuestionnaire
}