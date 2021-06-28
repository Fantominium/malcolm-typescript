import ProfilePic from "../atoms/ProfilePic";
import styled, {ThemeProvider} from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"

// import {useContext} from "react"
// import {DarkModeContext} from "../DarkModeReducer"

type IProps = {
    theme: {
        color: string
    }
}

const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
    /* background: rgba(255, 255, 255, 0.5); */
    background: ${(props:IProps) => props.theme.color};
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
HeaderStyle.defaultProps = {
    theme: {
        color: "black"
    }
}



const Header = () => {
    const theme = { //use context here to influence the color of the banner as a start
        color:"blue"
    }
    return (
        <ThemeProvider theme={theme}>
            <HeaderStyle>
                <ProfilePic url="/images/profile.jpg" alt="profile picture"/>
                <HeaderLinks/>
            </HeaderStyle>
        </ThemeProvider>
    )
}

export default Header
