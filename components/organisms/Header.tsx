import ProfilePic from "../atoms/ProfilePic";
import styled, {ThemeProvider} from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"
import {useContext, useEffect} from "react"
import { ChildrenNodeProps, IContext, IProps } from "../../interfaces/Types";
import { DarkModeContext } from "../Layout";

const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
    /* background: rgba(255, 255, 255, 0.5); */
    color: ${(props:IProps) => props.theme.color};
    min-height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1350px) {
        max-height: 3em;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Header = ({ children }: ChildrenNodeProps) => {

    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "blue" : "yellow"
    }
    return (
        <ThemeProvider theme={theme}>
            <HeaderStyle>
                <ProfilePic url="/images/profile.jpg" alt="profile picture"/>
                <HeaderLinks>
                {children}
                </HeaderLinks>
            </HeaderStyle>
        </ThemeProvider>
    )
}

export default Header
