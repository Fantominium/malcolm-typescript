import { ReactNode, useReducer, createContext } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from "./organisms/Header"
import Content from "./organisms/Content"
import {DarkModeReducer, EnableAction, DisableAction} from '../interfaces/DarkModeReducer'
import{IState} from "../interfaces/Types"

type Props = {
  children?: ReactNode
  title?: string
}
export const DarkModeContext = createContext<IState>({})

const LayoutTest = styled.body `
  
  margin: 0 auto;

  @media (min-width: 1350px) {
    margin: 0 auto;
  }

`

export const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const [state, dispatch] = useReducer(DarkModeReducer, {value:false})


  return (
    <LayoutTest>
    <DarkModeContext.Provider value = {state}>

      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <Header>
          {state.value ? <button onClick={()=>dispatch(DisableAction)}> Day </button> : <button onClick={()=>dispatch(EnableAction)}> Night </button>}
        </Header>
          <Content>
            {children}
          </Content>
          
          <footer>
            <span>I'm here to stay (Footer)</span>
          </footer>
      </div>
    </DarkModeContext.Provider>
    </LayoutTest>
  )

}

export default Layout
