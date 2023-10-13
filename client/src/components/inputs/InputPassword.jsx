export default function InputPassword() {
    return <div className="form--input">
        <label htmlFor="form--password">SENHA</label>
        <input 
            type="password" 
            name="form--password" 
            id="form--password"
            className="form-inpt"
            placeholder="Senha"
            required 
            minLength={8} 
            maxLength={20}
        />
    </div>
}