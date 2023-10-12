export default function InputEmail() {
    return <div className="form--input">
        <label htmlFor="form--email">E-MAIL</label>
        <input 
            type="email" 
            name="form--email" 
            id="form--email"
            placeholder="E-mail"
            max-maxLength={50}
            required
        />
    </div>
}