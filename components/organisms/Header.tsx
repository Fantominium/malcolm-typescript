import ProfilePic from "../atoms/ProfilePic";
import styled from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"
// import {useContext} from "react"
// import {DarkModeContext} from "../Layout"

// const darkmode = useContext(DarkModeContext)

const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
    background:{ darkmode ? rgba(234, 225, 255, 0.5) : rgba(255, 255, 255, 0.5};
    min-height: 150px;
    margin: 1.5em;
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



const Header = () => {
    return (
        <HeaderStyle>
            <ProfilePic url="/images/profile.jpg" alt="profile picture"/>
            <HeaderLinks/>
        </HeaderStyle>
    )
}

export default Header
