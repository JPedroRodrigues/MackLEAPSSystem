export default function InputName() {
    return <div className="form--input">
        <label htmlFor="form--name">NOME</label>
        <input 
            type="text" 
            name="form--name" 
            id="form--name"
            placeholder="Nome"
            maxLength={50}
            required
        />
    </div>
}