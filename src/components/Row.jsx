import RowInfo from "./RowInfo";
import Image from "next/image";
import Link from "next/link";

export default function Row(props) {
    let rows = [];
    for (const key in props.data) {
        rows.push(<RowInfo info={props.data[key]} />)
    }
    return <div className="rowTable">
        {rows}
        <Link href={"/users/edit"}>
            <Image src={props.button} alt="Table button" className="rowButton" width={30} height={30}></Image>
        </Link>
    </div>
}