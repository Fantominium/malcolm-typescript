import {ReactNode} from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const LinkStyle = styled.div`
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  color: #717171;
  font-weight: 800;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  margin: 0.75em;
  a:link{
      color:#717171
  }
  a:visited{
      color:#552b58
  }
`

type Props = {
    label : string | ReactNode
    href : string
}
const LinksAtom = ({label = "", href=""}:Props) => {
    return (
        <LinkStyle>
            <Link href={href} >
                <a>{label}</a>
            </Link>
        </LinkStyle>
    )
}

export default LinksAtom
