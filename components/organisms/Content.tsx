import styled, {ThemeProvider} from "styled-components"
import {IProps, ChildrenNodeProps, IState} from "../../interfaces/Types"
import {useContext} from "react"
import { DarkModeContext } from "../Layout";


const BodyStyles = styled.div `

  margin: 1em;
  background: ${(props:IProps) => props.theme.color};

`
const Content = ({children}:ChildrenNodeProps) => {
    const themeContext = useContext<IState>(DarkModeContext)

    return (
        <ThemeProvider theme={themeContext}>
            <BodyStyles>
                {children}
            </BodyStyles>
        </ThemeProvider>
    )
}

export default Content
