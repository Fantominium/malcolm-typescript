import styled, {ThemeProvider} from "styled-components"
import { IContext, IProps } from "../../interfaces/Types"
import {useContext, useEffect} from "react"
import { DarkModeContext } from "../Layout";
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';


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
    button {
          background-color: #1eb1fc;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        button:hover {
          background-color: #1b9fe2;
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
    const [session, loading] = useSession();

    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click, if the state is set
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 60%, 20%)" : "hsl(215, 60%, 20%)"
    }

    return(
        <ThemeProvider theme={theme}>


            <FooterStyle>


            {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
            <button className = "signInButton">Login</button>
            </a>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a>
                  <span
                    style={{ backgroundImage: `url(${session.user?.image})` }}
                    className="avatar"
                  />
                </a>
              </Link>
              <span className="email">{session.user?.email}</span>
              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <button className="signOutButton">Sign out</button>
              </a>
            </>
          )}
            
            </FooterStyle>
      </ThemeProvider>
    )
}
export default Footer