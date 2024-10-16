import { userLoginSchema } from "@/utils/schemas";


type UserLoginProps = {
    email: string;
    passwrd: string;
}

type UserRegisterProps = {
    name: string;
    email: string;
    passwrd: string;
    telephone: string;
    location: {
        city: string;
        state: string;
    };
}

export type {
    UserLoginProps,
    UserRegisterProps
}