import InputImage from "../../../components/inputs/InputImage.jsx"
import InputName from "../../../components/inputs/InputName.jsx"
import InputEmail  from "../../../components/inputs/InputEmail.jsx"
import InputPassword from "../../../components/inputs/InputPassword.jsx"
import InputRole from "../../../components/inputs/InputRole.jsx"
import InputDRT from "@/components/inputs/InputDRT.jsx"
import "../../../styles/regUser.css"

export default function RegisterUser() {
    return <main>
        <h1 className="h1">Usuários</h1>
        <form action="" autoComplete="off" className="reg--user--form" >
            <InputImage />
            <div className="form--col">
                <InputName />
                <InputEmail />
                <InputPassword />
            </div>
            
            <div className="form--col">
                <InputDRT />
                <InputRole />
                <input type="submit" value="REGISTRAR USUÁRIO" className="big--red--btn"/>
            </div>
        </form>

    </main>
}