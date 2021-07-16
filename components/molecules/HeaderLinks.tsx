import styled from "styled-components"
import LinkAtom from "../atoms/LinksAtom"
import {ReactNode} from "react"

const LinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  margin: .7em;
  align-items: center;

  @media(min-width: 1350px){
    flex-direction: row;
    max-width: 30%;
    margin-right: 3em;
  }
`

type Props = {
  children?: ReactNode
  title?: string
}

const HeaderLinks = ({ children }: Props) => {
    return (
        <LinkStyle>
            <LinkAtom label="About Me" href="/about"/>
            <LinkAtom label="Users List" href="/users"/>
            <LinkAtom label="github" href="https://github.com/Fantominium"/>
            {children}
        </LinkStyle>
    )
}

export default HeaderLinks
