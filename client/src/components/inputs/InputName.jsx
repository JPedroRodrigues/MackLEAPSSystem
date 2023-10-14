export default function InputName(props) {
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
        <label htmlFor="form--name" style={styles.label}>NOME</label>
        <input 
            type="text" 
            name="form--name" 
            id="form--name"
            className="form-inpt"
            placeholder="Nome"
            maxLength={50}
            required
            onChange={e => props.onNameChange(e.target.value)}
            style={styles.input}
        />
    </div>
}