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

type Props  =  String
type  options = {
    method: string;
    headers: {
        'Content-Type': string;
    };
    body: string;
}

const Footer = () => {
    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click, if the state is set
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 60%, 20%)" : "hsl(215, 60%, 20%)"
    }

    async function handleClick (url:Props) {
        const options:options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: 'cors',
            body: JSON.stringify({url})
        }
        const response = await fetch("../api/oauth/redirect/", options)

        const data = await response.json()
        if(data.code === "200"){
            console.log(`success ${data.value}`)
        } else {
            console.log(`something wrong: ${data.code}`)
            
        }
    }
    const github = 'https://github.com/login/oauth/authorize?client_id=5290d6a01e8cb6526397&redirect_uri=http://localhost:3000/oauth/redirect'
    // const google = ''

    return(
        <ThemeProvider theme={theme}>
            <FooterStyle>
            {/* <a href ="https://github.com/login/oauth/authorize?client_id=5290d6a01e8cb6526397&redirect_uri=http://localhost:3000/oauth/redirect" > */}
                <button onClick={()=>handleClick(github)}>Login with Github</button>
            {/* </a> */}
            </FooterStyle>
      </ThemeProvider>
    )
}
export default Footer