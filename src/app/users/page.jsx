"use client"

import Table from "../../components/Table.jsx"
import DropdownSelect from "../../components/DropdownSelect.jsx"
import Link from "next/link.js"
import { useState } from "react"
import "../../styles/user.css"

import user from "../../lib/user.js"

export default function User() {
    const [usersData, setUsersData] = useState(user);

    let options = [
        "Todos",
        "Administrador",
        "Estagiário",
        "Professor"
    ];

    function onRoleChange(roleName) {
        let opt = [];
        for (let i = 0; i < user.length; i++) {
            if (roleName === user[i].cargo) {
                opt.push(user[i]);
            }
        }

        if (roleName === "Todos") {
            opt = user;
        }
        setUsersData(opt);
    }

    return <main>
        <section className="userTitle">
            <h1 className="h1">Usuários</h1>
            <DropdownSelect defaultValue="Privilégios" option={options} onItemsChange={onRoleChange}/>
        </section>
        <Table data={[...usersData]} button={"/icons/gear-button.svg"}/>
        <Link href="/users/register" className="big--red--btn reg--user">REGISTRAR USUÁRIO</Link>
    </main>
}
