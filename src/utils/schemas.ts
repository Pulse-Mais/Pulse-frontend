import { z } from "zod";

const forbiddenWords = ["caralho", "porra", "sexo", "piroca", "puta", "pinto", "buceta", "pênis", "cu"];
const forbiddenWordsRegex = new RegExp(forbiddenWords.join("|"), "i");

const userLoginSchema = z.object({
    email: z.string().email("Email inválido"),
    passwrd: z.string().min(6, "Senha deve ter pelo menos 6 caracteres")
});

const userRegisterSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    passwrd: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    telephone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
    location: z.object({
        city: z.string().min(3, "Cidade deve ter pelo menos 3 caracteres"),
        state: z.string().length(2, "Estado deve ter 2 caracteres")
    })
});

const createEducationalSchema = z.object({
    title: z.string({ required_error: "O título é obrigatório" })
        .min(5, "O título deve ter no mínimo 5 caracteres")
        .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/, "O título não pode conter caracteres especiais ou números")
        .refine((val) => !forbiddenWordsRegex.test(val), "Contém palavras não permitidas."),
    type: z.enum(["class", "activity"], { required_error: "É necessário ter um tipo." }),
    duration: z.string({ required_error: "É necessário ter uma duração." }).min(3, "Duração deve ter pelo menos 3 caracteres"),
    description: z.string({ required_error: "É necessário ter uma descrição." })
        .min(5, "Descrição deve ter pelo menos 5 caracteres")
        .refine((val) => !forbiddenWordsRegex.test(val), "Contém palavras não permitidas." ),
    content: z.array(z.object({
        index: z.number(),
        type: z.enum(["text", "file", "alternatives", "dissertative"]),
        content: z.string({ required_error: "É necessário ter um conteúdo." })
            .refine((val) => !forbiddenWordsRegex.test(val), "Contém palavras não permitidas." ),
        alternatives: z.array(z.object({
            text: z.string({ required_error: "É necessário ter um texto." }),
            correct: z.boolean({ required_error: "É necessário ter um booleano." })
        })).optional()
    }))
})

export {
    userLoginSchema,
    userRegisterSchema,
    createEducationalSchema
}