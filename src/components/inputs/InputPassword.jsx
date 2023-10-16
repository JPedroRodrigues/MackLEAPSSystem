export default function InputPassword() {
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
        <label htmlFor="form--password" style={styles.label}>SENHA</label>
        <input 
            type="password" 
            name="form--password" 
            id="form--password"
            className="form-inpt"
            placeholder="Senha"
            required 
            minLength={8} 
            maxLength={20}
            style={styles.input}
        />
    </div>
}