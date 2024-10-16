import { createContext, useState } from "react";


export type RegisterUserProps = {
    name: string;
    email: string;
    passwrd: string;
    telphone: string;
    location: {
        city: string;
        state: string;
    }
}

type AuthProps = {
    isLoading: boolean;
    signIn: (email: string, passwrd: string) => void;
    signUp: (userData: RegisterUserProps) => void;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthProps);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    function signIn(email: string, passwrd: string) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    function signUp(userData: RegisterUserProps) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    function signOut() {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    async function updateUserLogin(newData: { email: string, passwrd: string }) {
        try {
            setIsLoading(true);
        } catch(err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    function resetPassword(email: string) {}
    
    return (
        <AuthContext.Provider value={{
            isLoading,
            signIn, signUp, signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}