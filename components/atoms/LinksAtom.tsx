import {ReactNode, useEffect, useContext} from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import { DarkModeContext } from '../Layout'
import { IContext, IProps } from '../../interfaces/Types'


const LinkStyle = styled.div`
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  margin: 0.75em;
  a:link{
      color:${(props:IProps) => props.theme.color};
  }
  a:visited{
    color:${(props:IProps) => props.theme.color};
  }
`

type Props = {
    label : string | ReactNode
    href : string
}
const LinksAtom = ({label = "", href=""}:Props) => {
    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    const theme = { //use context here to influence the color of the banner
        color: themeValue ? "hsl(215, 80%, 27%)" : "hsl(205, 70%, 35%)" 
    }
    return (
        <ThemeProvider theme={theme}>
            <LinkStyle>
                <Link href={href} >
                    <a>{label}</a>
                </Link>
            </LinkStyle>
        </ThemeProvider>
    )
}

export default LinksAtom
