import { useContext, useEffect } from "react"
import styled, {ThemeProvider} from "styled-components"
import { ChildrenNodeProps, IContext, IProps } from "../../interfaces/Types"
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
  background-image:  ${(props:IProps) => props.theme.color};
  /* background-color: ${(props:IProps) => props.theme.color}; */



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
        color: themeValue ? 
        `linear-gradient(60deg, 
            rgba(0, 179, 255, 0.209), 
            rgba(77, 255, 0, 0.209));` : `linear-gradient(60deg, rgba(60, 129, 143, 0.492), 
            rgba(97, 139, 74, 0.402));`
            //bg image don't take simple colors
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