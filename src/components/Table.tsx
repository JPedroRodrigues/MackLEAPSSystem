import TableHeader from "./TableHeader"
import Row from "./Row"

type TableProps = {
    data: Array<any>,
    button: JSX.Element
}

export default function Table(props: TableProps) {
    const lines = props.data.map((obj) => <Row data={{...obj}} key={obj.id} button={props.button}/>)

    return <div className="row-start-2 col-start-2 flex flex-col gap-3 m-auto min-w-[55em] max-w-[62.5em] rounded-3xl p-12 text-card-foreground bg-card">
        <TableHeader {...props.data[0]} />
        {lines}
    </div>
}
