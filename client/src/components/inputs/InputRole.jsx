import DropdownSelect from "../DropdownSelect"

export default function InputRole(props) {
    const options = [
        "Administrador",
        "Estagiário",
        "Professor"
    ]

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            gap: "0.313em",

            textIndent: "1.25em"
        },
        input : {
            height: "3.25em",
            width: "21.063em",
            border: "none",
            borderRadius: "3.125em",
            backgroundColor: "var(--white)",
            padding: "0em 2em"
        }, 
        label : {
            color: "var(--white)"
        }
    }

    return <div className="form--input" style={styles.container}>
        <label htmlFor="form--role" style={styles.label}>CARGO</label>
        <DropdownSelect option={options} id="form--role" onRoleChange={props.onRoleChange}/>
    </div>
}