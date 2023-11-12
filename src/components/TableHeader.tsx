import ColumnTitle from "./ColumnTitle";

export default function TableHeader(props: any) {
    let titles = [];

    for (const key in props) {
        if (key.toUpperCase() != 'ID') {
            titles.push(<ColumnTitle title={key.toUpperCase()} key={key.toUpperCase()}/>)
        }
    }

    return <div className="grid grid-cols-[1fr_1fr_1fr_1fr_40px] items-center justify-center">
        {titles}
    </div>
}