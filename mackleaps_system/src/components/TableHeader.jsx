import ColumnTitle from "./ColumnTitle";

export default function TableHeader(props) {
    let titles = [];

    for (const key in props) {
        titles.push(<ColumnTitle title={key.toUpperCase()} />)
    }

    return <div className="tableHeader">
        {titles}
    </div>
}