"use client"

import Head from "next/head"
import InputImage from "../../../components/inputs/InputImage"
import InputName from "../../../components/inputs/InputName"
import InputEmail from "../../../components/inputs/InputEmail"
import InputDRT from "../../../components/inputs/InputDRT"
import InputRole from "../../../components/inputs/InputRole"

import "../../../styles/regUser.css"


export default function EditUser() {

    const styles = {
        formInfo : {
            alignItems: "center"
        },
        bigBlackBtn : {
            cursor: "pointer",
            width: "18.75em",
            height: "3.75em",
            border: "1px solid var(--white)",
            borderRadius: "3.125em",
            padding: "0.625em 0.938em",
            backgroundColor: "var(--black)",
            font: "var(--smallBT)",
            color: "var(--white)"
        },
        buttonRow : {
            display: "flex",
            gap: "1em",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1em"
        }
    }

    function editUser() {
        console.log("Usuário editado com sucesso.");
    }

    return <main>
        <h1 className="h1">Usuários</h1>

        <form action="" method="post" autoComplete="off" onSubmit={editUser} className="user--form">
            <div className="form--info" style={styles.formInfo}>
                <InputImage />
                <div className="form--col">
                    <InputName />
                    <InputEmail />
                </div>
                <div className="form--col">
                    <InputDRT />
                    <InputRole />
                </div>
            </div>
            <div className="button--row" style={styles.buttonRow}>
                <button style={styles.bigBlackBtn}>DELETAR USUÁRIO</button>
                <button className="big--red--btn">EDITAR SENHA</button>
                <input type="submit" value="CONCLUIR EDIÇÃO" className="big--red--btn"/>
            </div>
        </form>
    </main>
}