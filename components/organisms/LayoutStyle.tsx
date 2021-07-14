import { useContext, useEffect } from "react"
import styled, {ThemeProvider} from "styled-components"
import { ChildrenNodeProps, IContext, IProps, IState } from "../../interfaces/Types"
import { DarkModeContext } from "../Layout"

const LayoutStyles = styled.body`

 --hue: ;
 --sat: ;
 --light: ;
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

    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 60%, 50%)": "hsl(205, 70%, 50%)"
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