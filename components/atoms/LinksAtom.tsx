import {ReactNode} from 'react'
import Link from 'next/link'


type Props = {
    label ?: string | ReactNode
    href ?: string
    desc ?: string
}
const LinksAtom = ({label = "", href="", desc=""}:Props) => {
    return (
        <Link href={href} >
            <a>{label}</a>
        </Link>
    )
}

export default LinksAtom
