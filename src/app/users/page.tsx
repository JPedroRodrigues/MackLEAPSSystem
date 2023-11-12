"use client"

// import Table from "@/components/Table";
import Link from "next/link.js";
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import { useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import user from "@/lib/user"

export default function User() {
    const [usersData, setUsersData] = useState(user);

    return <main className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[9.375em 1fr 9.375em]">
        <section className="flex justify-between row-start-1 col-start-2">
            <h1 className="self-baseline text-5xl font-extrabold text-primary">Usuários</h1>
        </section>
        {/* <Table data={[...usersData]} button={<Settings className="p-0 rounded-full w-7"/>}/> */}

        <div className="row-start-2 col-start-2 flex flex-col gap-3 m-auto min-w-[55em] max-w-[62.5em] rounded-3xl p-12 text-card-foreground bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Nome</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>Registro</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usersData.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.nome}</TableCell>
                        <TableCell>{user.cargo}</TableCell>
                        <TableCell>{user.registro}</TableCell>
                        <TableCell className="text-right">{user.status}</TableCell>
                        <TableCell>
                            <Link href={"/users/edit"} target={"_blank"}>
                                <Settings />
                            </Link>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        
        <Link href="/users/register" className="mt-4 row-start-3 col-start-2 justify-self-end"><Button>Registrar Usuário</Button></Link>
    </main>
}