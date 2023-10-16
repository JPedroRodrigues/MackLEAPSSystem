export default function InputEmail(props) {
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
        <label htmlFor="form--email" style={styles.label}>E-MAIL</label>
        <input 
            type="email" 
            name="form--email" 
            id="form--email"
            className="form-inpt"
            placeholder="E-mail"
            max-maxLength={50}
            required
            onChange={e => props.onEmailChange(e.target.value)}
            style={styles.input}
        />
    </div>
}