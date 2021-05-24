import styled from "styled-components"
import LinkAtom from "../atoms/LinksAtom"

const LinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  margin: .7em;
  /* justify-content: space-between; */
  align-items: center;

  @media(min-width: 1350px){
    flex-direction: row;
    max-width: 30%;
    margin-right: 3em;
  }
`



const HeaderLinks = () => {
    return (
        <LinkStyle>
            <LinkAtom label="About Me" href="/about"/>
            <LinkAtom label="Users List" href="/users"/>
            <LinkAtom label="github" href="https://github.com/Fantominium"/>

        </LinkStyle>
    )
}

export default HeaderLinks
