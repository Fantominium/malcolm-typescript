import ProfilePic from "../atoms/ProfilePic";
import styled, {ThemeProvider} from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"
import {useContext, useEffect, ReactNode} from "react"
import { IState } from "../../interfaces/Types";
import { DarkModeContext } from "../Layout";

type IProps = {
    theme: {
        color: string
    }
}

type Props = {
    children?: ReactNode
    title?: string
  }
const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
    /* background: rgba(255, 255, 255, 0.5); */
    background: ${(props:IProps) => props.theme.color};
    min-height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1350px) {
        max-height: 100px;
        margin: 0;
        flex-direction: row;
        justify-content: space-between;
    }
`
HeaderStyle.defaultProps = {
    theme: {
        color: "black"
    }
}



const Header = ({ children }: Props) => {

    const themeContext = useContext<IState>(DarkModeContext)

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.value])

    const theme = { //use context here to influence the color of the banner
        color: themeContext.value ? "blue" : "yellow"
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
