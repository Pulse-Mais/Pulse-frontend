type MaterialContent = { // Material principal
    type: "video" | "archive" | "none" | "empty" | "image" | "audio";
    key: string;
    status: "empty" | "in-upload" | "filled";
    upload: {
        id: string;
        status: string;
    };
    archiveExtension: string;
}

type ISetTrailClassMaterialContentInput = {
    readonly key: string,
    readonly type: "empty" | "video" | "archive"
    readonly format: "planilha" | "pdf" | "slides" | "video" | "empty"
    readonly status: "empty" | "filled"
}


export type {
    MaterialContent,
    ISetTrailClassMaterialContentInput
}