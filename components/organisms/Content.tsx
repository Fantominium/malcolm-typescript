import styled, {ThemeProvider} from "styled-components"
import {IProps, ChildrenNodeProps, IState} from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const BodyStyles = styled.div `
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;
    background: ${(props:IProps) => props.theme.color};

  @media (min-width: 1350px) {
    min-height: 100vh;
    flex-grow: 1;
    margin: 0;

  }
`
const Content = ({children}:ChildrenNodeProps) => {
    const themeContext = useContext<IState>(DarkModeContext)
    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.value])

    const theme = { //use context here to influence the color of the banner
        color: themeContext.value ? "rgba(71, 120, 127, 0.135)" : "rgba(177, 180, 134, 0.183)"
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
