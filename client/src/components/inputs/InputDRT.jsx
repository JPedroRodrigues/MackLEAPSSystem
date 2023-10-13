export default function InputDRT() {
    return <div className="form--input">
        <label htmlFor="form--drt">DRT </label>
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
        />
    </div>
}