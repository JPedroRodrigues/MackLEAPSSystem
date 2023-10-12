import InputImage from "../../../components/inputs/InputImage.jsx"
import InputName from "../../../components/inputs/InputName.jsx"
import InputEmail  from "../../../components/inputs/InputEmail.jsx"
import InputPassword from "../../../components/inputs/InputPassword.jsx"
import InputRole from "../../../components/inputs/InputRole.jsx"

export default function RegisterUser() {
    return <main>
        <h1 className="h1">Usuários</h1>
        <form action="" autoComplete="off" className="reg--user--form" >
            <InputImage />
            <InputName />
            <InputEmail />
            <InputPassword />
            <InputRole />
            <input type="submit" value="REGISTRAR USUÁRIO" className="submit--user"/>
        </form>

    </main>
}