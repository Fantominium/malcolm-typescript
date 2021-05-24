import ProfilePic from "../atoms/ProfilePic";
import styled from "styled-components"
import HeaderLinks from "../molecules/HeaderLinks"


const HeaderStyle = styled.div `

    padding: .5em;
    width: 100%;
    background: rgba(255, 255, 255, 0.004);
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

type Props = {
    
}

const Header = (props: Props) => {
    return (
        <HeaderStyle>
            <ProfilePic url="/images/profile.jpg" alt="profile picture"/>
            <HeaderLinks/>
            
        </HeaderStyle>
    )
}

export default Header
