type ColumnTitleType = {
    title: string
}

export default function ColumnTitle({ title }: ColumnTitleType) {
    return <div className="justify-self-center">{title}</div>
}