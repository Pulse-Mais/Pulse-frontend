"use client";
import { UserLoginProps } from "@/__mocks__/@types/login";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Envelope, Eye, LockKey } from "@/utils/icons";
import { userLoginSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";



type NewDataLoginFormData = z.infer<typeof userLoginSchema>;

export default function Page() {
    // const isLoading = true;
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isLoading },
    } = useForm<UserLoginProps>({
        resolver: zodResolver(userLoginSchema),
        mode: "onChange"
    });

    const onSubmit = (data: UserLoginProps) => {
        console.log(data);

        try {
            throw new Error("Erro ao alterar os dados cadastrais.");
        } catch(err) {
            toast.error("Ups! Ocorreu um erro ao alterar os dados cadastrais.");
        } finally {}
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Dados gerais</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5">
                    <label className="flex flex-col gap-2 max-w-2xl w-1/2">
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
                    <label className="flex flex-col gap-2 max-w-2xl w-1/2">
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
                </div>


                <Button 
                    type="submit" 
                    _title="Salvar" 
                    className="mt-4"
                    disabled={!isValid || isLoading}
                    isLoading={isLoading}
                >Salvar</Button>
            </form>
            
        </div>
    )
}