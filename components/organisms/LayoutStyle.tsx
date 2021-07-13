import { useContext, useEffect } from "react"
import styled, {ThemeProvider} from "styled-components"
import { ChildrenNodeProps, IProps, IState } from "../../interfaces/Types"
import { DarkModeContext } from "../Layout"

const LayoutStyles = styled.body `
  margin: 0 auto;
  min-height: 100%; 
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props:IProps) => props.theme.color};



@media (min-width: 1350px) {
  margin: 0 auto;
  min-height: 100%; 
  padding: 0;
  display: flex;
  flex-direction: column;
}

`


const LayoutStyle = ({ children }: ChildrenNodeProps) => {

    const themeContext = useContext<IState>(DarkModeContext)

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.value])

    const theme = { //use context here to influence the color of the banner
        color: themeContext.value ? "skyblue" : "green"
    }
    return (
        <ThemeProvider theme={theme}>
            <LayoutStyles>
                {children}
            </LayoutStyles>
        </ThemeProvider>
    )
}
export default LayoutStyle