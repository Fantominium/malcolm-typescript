import styled, {ThemeProvider} from "styled-components"
import { IProps, IState } from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";


const FooterStyle = styled.footer`

    /* background: rgba(248, 248, 248, 0.292); */
    background: ${(props:IProps) => props.theme.color};
    min-height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
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
    const themeContext = useContext<IState>(DarkModeContext)

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.value])

    const theme = { //use context here to influence the color of the banner
        // color: themeContext.value ? "blue" : "yellow"
    }
    return(
        <ThemeProvider theme={theme}>
            <FooterStyle>
                <span>I'm here to stay (Footer)</span>
            </FooterStyle>
      </ThemeProvider>
    )
}
export default Footer