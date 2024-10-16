"use client"
import type { Metadata } from "next";
import Image from "next/image";
import { Envelope, Eye, LockKey, MapPin, Phone, SignIn, UserCircle } from "@/utils/icons"; 
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { UserLoginProps, UserRegisterProps } from "@/__mocks__/@types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema, userRegisterSchema } from "@/utils/schemas";
import { Button } from "@/components/button";
import Link from "next/link";
import { Dropdown } from "@/components/Dropdown";
import { useEffect, useState } from "react";
import { getMunicipalityBrazil, getStatesBrazil } from "@/utils/function";
import { toast } from "react-toastify";


// export const metadata: Metadata = {
//     title: "Login | Pulse Mais",
//     description: "Faça login na sua conta Pulse Mais",
// };

export default function Page() {
    const [states, setStates] = useState<EstadosProps[]>([]);
    const [municipality, setMunicipality] = useState<MunicipiosProps[]>([]);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<UserRegisterProps>({
        resolver: zodResolver(userRegisterSchema),
        mode: "onChange"
    });

    useEffect(() => {
        getStatesBrazil()
            .then((res) => {
                setStates(res);
            })
                .catch(err => {
                    console.log(err);
                    toast.error("Houve um erro ao buscar os estados.");
                });
    }, [])

    

    return (
        <div className="flex items-center h-full">
            <div className="w-2/4 h-full">1</div>
            <div className="flex flex-col justify-center w-2/4 h-full py-16 px-14 overflow-auto">
                <form className="w-full">
                    <div className="flex justify-center flex-col gap-5">
                        <h1 className="text-2xl font-bold">Dados gerais</h1>
                        <label className="flex flex-col gap-2 w-full">
                            <div className="flex items-center gap-2">
                                <UserCircle size={26} weight="fill"/>
                                <h3 className="text-base font-bold">Nome</h3>
                            </div>
                            <Input 
                                type="text" 
                                autoComplete="name" 
                                placeholder="Joe Dohn" 
                                autoFocus
                                disabled={isLoading} 
                                {...register("name")} 
                            />
                            {errors.email && (
                                <span className="text-red-500">{errors.email.message}</span>
                            )}
                        </label>
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
                        <label className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Phone size={26} weight="fill"/>
                                <h3 className="text-base font-bold">Telefone</h3>
                            </div>
                            <Input 
                                type="tel" 
                                placeholder="(00) 00000-0000" 
                                className="pr-7 w-full"
                                disabled={isLoading}
                                {...register("telephone")}
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <MapPin size={26} weight="fill"/>
                                <h3 className="text-base font-bold">Localização</h3>
                            </div>
                            <div className="flex gap-5">
                                <Dropdown 
                                    placeholder="Estado"
                                    options={[{ label: "Selecione um estado", value: "0" }, { label: "Selecione um estado", value: "0" }]}
                                    onChange={(e) => console.log(e)}
                                />
                                <Dropdown 
                                    placeholder="Cidade"
                                    options={municipality.map(states => ({ label: states.nome, value: states.id.toString() }))}
                                    disabled={true}
                                    onClick={() => {
                                        if(!municipality) {
                                            getMunicipalityBrazil(35)
                                                .then((res) => {
                                                    setMunicipality(res);
                                                })
                                                    .catch(err => {
                                                        console.log(err);
                                                        toast.error("Houve um erro ao buscar os estados.");
                                                    });
                                        }
                                    }}
                                    onChange={(e) => console.log(e)}
                                />
                            </div>
                        </label>

                        <Button className="w-full justify-center font-bold" _title="Entrar" leftIcon={SignIn} />
                    </div>
                </form>
            </div>
        </div>
    )
}