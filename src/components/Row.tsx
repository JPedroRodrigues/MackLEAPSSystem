import RowInfo from "./RowInfo";
import Link from "next/link";

type RowProps = {
    data: any,
    button: JSX.Element;
}

export default function Row(props: RowProps) {
    let rows = [];
    for (const key in props.data) {
        if (key.toUpperCase() !== "ID") {
            rows.push(<RowInfo info={props.data[key]} key={props.data}/>)
        }
    }
    return <div className="grid grid-cols-[1fr_1fr_1fr_1fr_40px] items-center justify-center gap-3">
        {rows}
        <Link href={"/users/edit"} >
            {props.button}
        </Link>
    </div>
}