export default function InputDRT(props) {
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
        <label htmlFor="form--drt" style={styles.label}>DRT</label>
        <input 
            type="text" 
            name="form--drt" 
            id="form--drt"
            className="form-inpt"
            placeholder="DRT"
            required
            // Using RegEx to force user to insert a numeric data
            pattern="^[0-9]{8}$" 
            minLength={8}
            maxLength={8}
            onChange={e => props.onDRTChange(e.target.value)}
            style={styles.input}
        />
    </div>
}