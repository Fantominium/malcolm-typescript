import styled from "styled-components"
import {ChildrenNodeProps, IContext} from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const BodyStyles = styled.div `
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;
    padding: .5rem;
    background: #b4b4b43a;

  @media (min-width: 1350px) {
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;

  }
`
const Content = ({children}:ChildrenNodeProps) => {
    const themeContext = useContext<IContext>(DarkModeContext)

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    return (
        <BodyStyles>
            {children}
        </BodyStyles>
    )
}

export default Content
