"use client"

import { useState } from "react"
import InputImage from "../../../components/inputs/InputImage.jsx"
import InputName from "../../../components/inputs/InputName.jsx"
import InputEmail  from "../../../components/inputs/InputEmail.jsx"
import InputPassword from "../../../components/inputs/InputPassword.jsx"
import InputRole from "../../../components/inputs/InputRole.jsx"
import InputDRT from "../../../components/inputs/InputDRT.jsx"
import "../../../styles/regUser.css"

export default function RegisterUser() {
    // Object tha will be created with the user's info
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        drt: '',
        cargo: '',
        img: ''
    })

    // User's data setters 
    function onImageChange(imgPath) {
        setFormData({...formData, img: imgPath});
    }

    function onNameChange(name) {
        setFormData({...formData, nome: name});
    }

    function onEmailChange(emailAddress) {
        setFormData({...formData, email: emailAddress});
    }

    function onDRTChange(drtNumber) {
        setFormData({...formData, drt: drtNumber});
    }

    function onRoleChange(roleName) {
        setFormData({...formData, cargo: roleName});
    }

    function submitUser(e) {
        e.preventDefault();
        console.log(formData);
    }


    return <main>
        <h1 className="h1">Usuários</h1>
        <form action="" autoComplete="off" method="post" className="user--form" onSubmit={submitUser}>
            <div className="form--info">
                <InputImage onImageChange={onImageChange}/>
                <div className="form--col">
                    <InputName onNameChange={onNameChange}/>
                    <InputEmail onEmailChange={onEmailChange}/>
                    <InputPassword />
                </div>
                
                <div className="form--col">
                    <InputDRT onDRTChange={onDRTChange}/>
                    <InputRole onRoleChange={onRoleChange}/>
                </div>
            </div>

            <div className="form--submit">
                <input type="submit" value="REGISTRAR USUÁRIO" className="big--red--btn"/>
            </div>
        </form>

    </main>
}