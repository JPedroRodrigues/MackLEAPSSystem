import Table from "../../components/Table.jsx"
import "../../styles/user.css"

import user from "./user.js"

export default function User() {
    return <main>
        <section className="userTitle">
            <h1 className="user--heading">Usuários</h1>
            <div className="privilege--button">Privilégios</div>
        </section>

        <Table data={[...user]} button={"/icons/gear-button.svg"}/>
    </main>
}
