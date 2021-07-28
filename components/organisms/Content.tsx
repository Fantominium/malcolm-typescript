import styled, {ThemeProvider} from "styled-components"
import {IProps, ChildrenNodeProps, IContext} from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const BodyStyles = styled.div `
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;
    padding: .5rem;
    /* background: ${(props:IProps) => props.theme.color}; */

  @media (min-width: 1350px) {
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;

  }
`
const Content = ({children}:ChildrenNodeProps) => {
    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 60%, 45%)" : "hsl(205, 70%, 80%)"
    }
    return (
        <ThemeProvider theme={theme}>
            <BodyStyles>
                {children}
            </BodyStyles>
        </ThemeProvider>
    )
}

export default Content
