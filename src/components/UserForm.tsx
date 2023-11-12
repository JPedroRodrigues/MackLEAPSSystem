"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function UserForm() {
    const formSchema = z.object({
        img: z
            .string()
            .trim()
            .url(),
        name: z
            .string()
            .trim()
            .min(2, {
                message: "O nome deve conter pelo menos dois caracteres.",
            })
            .max(70, {
                message: "O nome deve possuir no máximo 70 caracteres."
            })
            .trim(),
        email: z
            .string()
            .trim()
            .email({message: "Formato inválido de e-mail."}),
        password: z
            .string()
            .min(8, {
                message: "A senha deve possuir, no mínimo, 8 caracteres."
            }),
        drt: z
            .string()
            .trim()
            .length(8, {
                message: "DRT deve possuir 8 dígitos."
            })
            .regex(new RegExp("^[0-9]*$"), {
                message: "O DRT deve conter somente números." 
            }),
        role: z
            .string()
            .trim()
            .refine(role => {
                let roles = ["administrador", "professor", "estagiário"];

                for (let i = 0; i < 3; i++) {
                    if (role.toLowerCase() !== roles[i]) return false;
                }
            }, {
                message: "O nome do cargo não deve diferir das opções \"administrador\", \"professor\" e \"estagiário\"."
            })
    });
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            img: '',
            name: '',
            email: '',
            password: '',
            drt: '',
            role: '',
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex justify-center gap-12">
                        <FormField
                                control={form.control}
                                name="img"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imagem de perfil</FormLabel>
                                        <FormControl>
                                            <Label htmlFor="picture" className="w-72 h-72 rounded-full">
                                                <Input id="picture" type="file" className="hidden" {...field} />
                                            </Label>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        <div className="flex flex-col align-center gap-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nome completo" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Nome completo do usuário.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-mail</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="E-mail" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            E-mail do usuário.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col align-center gap-5">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Senha" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Senha de acesso.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="drt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>DRT</FormLabel>
                                        <FormControl>
                                            <Input placeholder="DRT" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Número de identificação DRT.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cargo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Cargo" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Cargo do usuário.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}
