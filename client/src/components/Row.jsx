import RowInfo from "./RowInfo";

export default function Row(props) {
    let rows = [];
    for (const key in props.data) {
        rows.push(<RowInfo info={props.data[key]} />)
    }
    return <div className="rowTable">
        {rows}
        <img src={props.button} alt="Table button" className="rowButton" />
    </div>
}