export default function Row(props) {
    return <div className="rowTable">
        <div className="rowInfo">{props.name}</div>
        <div className="rowInfo">{props.role}</div>
        <div className="rowInfo">{props.registrationDate}</div>
        <div className="rowInfo">{props.status}</div>
        <div className="rowButton"></div>
    </div>
}