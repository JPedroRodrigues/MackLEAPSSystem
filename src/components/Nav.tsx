import Image from "next/image"
import { ModeToggle } from "./ui/ModeToggle"
import Link from "next/link"

export default function Nav() {
	return <div className="col-start-2 col-end-3 self-start flex items-center justify-between text-foreground pl-5 pr-5 pt-1 pb-1">
		<Link href="/">
			<Image src="/mackleaps-logo.svg" alt="Mackleaps logo" width={80} height={71.72} />
		</Link>
		<ul className="flex gap-[2.375em] items-center text-foreground">
			<li><Link href="/users">Usuários</Link></li>
			<li><ModeToggle /></li>
		</ul> 
	</div>
}