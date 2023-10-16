import TableHeader from "./TableHeader.jsx"
import Row from "./Row.jsx"

export default function Table(props) {
    const lines = props.data.map(obj => <Row data={{...obj}} key={obj.nome} button={props.button}/>)

    return <div className="system--table">
        <TableHeader {...props.data[0]}/>
        {lines}
    </div>
}
