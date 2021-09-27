import { useContext, useEffect } from "react"
import styled, {ThemeProvider} from "styled-components"
import { ChildrenNodeProps, IContext, IProps } from "../../interfaces/Types"
import { DarkModeContext } from "../Layout"

const LayoutStyles = styled.body`
${(props:IProps) => props.theme}

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
    const themeValue = themeContext?.state?.value
    const dayTheme =        
        `margin : 0 auto;
        min-height : 100%;
        padding : 0;
        display : flex;
        flex-direction : column;
        background-image : linear-gradient(60deg, #aeaeff, #ffffa8);
        a:link{
            text-decoration: none;
        }
        a:hover{
            color: #ff6060;
        }
        `

    const nightTheme = 
        `margin : 0 auto;
        min-height : 100%;
        padding : 0;
        display : flex;
        flex-direction : column;
        background-image : linear-gradient(60deg, #caca85, #6d6db8);
        a{
            text-decoration: none;
        }
        a:hover{
            color: #00ff55;
        }
        `

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { 
        //use context here to influence the color of the banner
        mode : themeValue ? nightTheme
        : dayTheme
    }

    console.log(theme)
    return (
        <ThemeProvider theme={theme}>
            <LayoutStyles>
                {children}
            </LayoutStyles>
        </ThemeProvider>
    )
}
export default LayoutStyle