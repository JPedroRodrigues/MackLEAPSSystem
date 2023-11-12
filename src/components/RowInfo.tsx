type RowInfoProps = {
    info: string
}

export default function RowInfo({ info }: RowInfoProps) {
    return <div className="text-center rounded-[3.125em] pt-2 pb-2 pl-5 pr-5 bg-muted text-card-foreground h-18">{info}</div>
}