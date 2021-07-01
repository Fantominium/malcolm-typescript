import styled, {ThemeProvider} from "styled-components"
import {IProps, ChildrenNodeProps, IState} from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const BodyStyles = styled.div `

  margin: 1em;
  background: ${(props:IProps) => props.theme.color};
  min-height: 100%;
`
const Content = ({children}:ChildrenNodeProps) => {
    const themeContext = useContext<IState>(DarkModeContext)
    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.value])

    const theme = { //use context here to influence the color of the banner
        color: themeContext.value ? "blue" : "yellow"
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
