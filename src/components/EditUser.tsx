"use client"

import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
import { Camera } from 'lucide-react';

export default function EditUser() {
    const [filebase64,setFileBase64] = useState<string>("");

    function convertFile(files: FileList|null) {
        if (files) {
          const fileRef = files[0] || "";
          const fileType: string= fileRef.type || "";
          console.log("This file upload is of type:",fileType);
          const reader = new FileReader();
          reader.readAsBinaryString(fileRef);
          reader.onload=(ev: any) => {
            // convert it to base64
            setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
          }
        }
      }

      const styles = {
        image: {
            backgroundImage: `url(${filebase64})`,
        },
    }

    const formSchema = z.object({
        img: z
            .string()
            .trim(),
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
                    if (role.toLowerCase() === roles[i]) return true;
                }
                return false;
            }, {
                message: "Digite uma das opções: \"administrador\", \"professor\" ou \"estagiário\"."
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
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        let user = {
            img: filebase64,
            name: values.name,
            email: values.email,
            password: values.password,
            drt: values.drt,
            role: values.role,
        }
        console.log(user);
    }

    return (<>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex items-center gap-12">
                    <div className="self-center">
                        <FormField
                                control={form.control}
                                name="img"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Label htmlFor="picture" className="cursor-pointer">
                                                {filebase64.indexOf("image/") > -1 ?
                                                    <div style={styles.image} className="w-72 h-72 rounded-full bg-muted bg-center bg-no-repeat bg-cover grid">
                                                    </div>
                                                    :
                                                    <div className="w-72 h-72 rounded-full bg-muted grid">
                                                        <Camera className="self-center justify-self-center w-12 h-12"/>
                                                    </div>
                                                }
                                                <Input id="picture" type="file" className="hidden" {...field} onChange={(e)=> convertFile(e.target.files)}/>
                                            </Label>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                    </div>
                    <div className="flex flex-col align-center gap-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nome completo" {...field} className="w-80"/>
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
                                        <Input type="email" placeholder="E-mail" {...field} className="w-80" />
                                    </FormControl>
                                    <FormDescription>
                                        E-mail do usuário.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col align-center justify-center gap-5">
                        <FormField
                            control={form.control}
                            name="drt"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>DRT</FormLabel>
                                    <FormControl>
                                        <Input placeholder="DRT" {...field} className="w-80" />
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
                                        <Input placeholder="Cargo" {...field} className="w-80" />
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
                <div className="flex justify-evenly items-center">
                    <Button type="submit" className="col-start-3 row-start-2 justify-self-end" variant={"secondary"}>Deletar usuário</Button>
                    <Button type="submit" className="col-start-3 row-start-2 justify-self-end">Resetar senha</Button>
                    <Button type="submit" className="col-start-3 row-start-2 justify-self-end">Concluir edição</Button>
                </div>
            </form>
        </Form>
    </>)
}
