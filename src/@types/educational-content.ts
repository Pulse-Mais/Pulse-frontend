

type EducationalContentProps = {
    title: string;
    type: "class" | "activity";
    duration: string;
    description: string;
    content: Array<ContentItemProps>
}

type ContentItemProps = {
    index: number;
    type: 'text' | 'file' | 'alternatives' | 'dissertative';
    content: string;
    alternatives?: Array<{ text: string; correct: boolean }>;
}