import ProfilePic from "../atoms/ProfilePic";
import styled from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"
import {useContext, useEffect} from "react"
import { ChildrenNodeProps, IContext } from "../../interfaces/Types";
import { DarkModeContext } from "../Layout";
import { useSession } from 'next-auth/client'

const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
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

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    return (
        <HeaderStyle>
            <ProfilePic url="/images/profile.jpg" alt="profile picture"/>
            <HeaderLinks>
            {children}
            </HeaderLinks>
        </HeaderStyle>
    )
}

export default Header
