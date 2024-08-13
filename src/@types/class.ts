import { MaterialContent } from "./material";

type TypeSubContent = "material" | "text" // Renomear

type SubContentMaterial = { // Renomear
    type: "material";
    fileName: string;
    indexItem: number;
} & MaterialContent;

type SubContentText = { // Renomear
    type: "text";
    title: string;
    description: string;
    indexItem: number;
}

type SubContent = SubContentMaterial | SubContentText; // Renomear

type ICreateClass = {
    title: string;
    /**
     * In minutes
     */
    duration: number;
    about: string;
    contents: Array<SubContent> // Renomear
}

type IClass = {
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
    ICreateClass,
    IClass,
}