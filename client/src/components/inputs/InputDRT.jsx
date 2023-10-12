export default function InputDRT() {
    return <div className="form--input">
        <label htmlFor="form--user--drt">DRT </label>
        <input 
            type="text" 
            name="form--user--drt" 
            id="form--user--drt" 
            placeholder="DRT"
            required
            // Using RegEx to force user to insert a numeric data
            pattern="^[0-9]{8}$" 
            minLength={8}
            maxLength={8}
        />
    </div>
}