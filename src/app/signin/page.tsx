"use client"
import type { Metadata } from "next";
import Image from "next/image";
import { Envelope, Eye, LockKey, SignIn } from "@/utils/icons"; 
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { UserLoginProps, UserRegisterProps } from "@/__mocks__/@types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "@/utils/schemas";
import { Button } from "@/components/button";
import Link from "next/link";


// export const metadata: Metadata = {
//     title: "Login | Pulse Mais",
//     description: "Faça login na sua conta Pulse Mais",
// };

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<UserLoginProps>({
        resolver: zodResolver(userLoginSchema),
        mode: "onChange"
    });

    return (
        <div className="flex items-center h-full">
            <div className="w-2/4 h-full">1</div>
            <div className="flex flex-col justify-between items-center w-2/4 h-full py-16 px-14 overflow-auto">
                <Image src={{
                    src: "/PulseMais_Logo.svg",
                    width: 312,
                    height: 97
                }} alt="Logo da Pulse Mais" />

                <form className="w-full">
                    <div className="flex items-center justify-center flex-col gap-5">
                        <h1 className="text-2xl font-bold">Olá de novo</h1>
                        <label className="flex flex-col gap-2 w-full">
                            <div className="flex items-center gap-2">
                                <Envelope size={26} weight="fill"/>
                                <h3 className="text-base font-bold">Email</h3>
                            </div>
                            <Input 
                                type="email" 
                                autoComplete="email" 
                                placeholder="email@email.com" 
                                autoFocus
                                disabled={isLoading} 
                                {...register("email")} />
                        
                            {errors.email && (
                                <span className="text-red-500">{errors.email.message}</span>
                            )}
                        </label>
                        <div className="flex flex-col w-full">
                            <label className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <LockKey size={26} weight="fill"/>
                                    <h3 className="text-base font-bold">Senha</h3>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type="password" 
                                        placeholder="Senha" 
                                        className="pr-7 w-full"
                                        disabled={isLoading}
                                        {...register("passwrd")}
                                    />
                                    <button type="button" className="absolute right-5 top-0 bottom-0">
                                        <Eye size={20} weight="fill"/>
                                    </button>
                                </div>
                            </label>
                            <Link href="" className="underline text-base text-gray-400 mt-1">Esqueci minha senha</Link>
                        </div>

                        <Button className="w-full justify-center font-bold" _title="Entrar" leftIcon={SignIn} />
                    </div>
                </form>

                <p>Ainda não tem uma conta? Clique <Link href="/signup" className="underline">aqui</Link> para criar</p>
            </div>
        </div>
    )
}