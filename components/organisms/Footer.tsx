import styled, {ThemeProvider} from "styled-components"
import { IContext, IProps } from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const FooterStyle = styled.footer`

    color: ${(props:IProps) => props.theme.color};
    min-height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;
    input {
        margin-right: .5em;
        margin-left: .5em;
    }
    @media (min-width: 1350px) {
        flex-flow: row nowrap;
        justify-content: center;
        padding-top: 2em;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
`


const Footer = () => {
    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 60%, 20%)" : "hsl(215, 60%, 20%)"
    }
    return(
        <ThemeProvider theme={theme}>
            <FooterStyle>
                <a href =""><button>I'm here to stay (Footer)</button></a>
            </FooterStyle>
      </ThemeProvider>
    )
}
export default Footer