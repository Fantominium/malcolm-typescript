import { useReducer, createContext } from 'react'
import Head from 'next/head'
import Header from "./organisms/Header"
import Content from "./organisms/Content"
import Footer from './organisms/Footer'
import {DarkModeReducer, ToggleAction} from '../interfaces/DarkModeReducer'
import{ChildrenNodeProps, IState} from "../interfaces/Types"
import LayoutStyle from "./organisms/LayoutStyle"

export const DarkModeContext = createContext<IState>({})

export const Layout = ({ children, title = 'This is the default title' }: ChildrenNodeProps) => {

  const [state, dispatch] = useReducer(DarkModeReducer, {value:false})


  return (
    <DarkModeContext.Provider value = {state}>
      <LayoutStyle>
        <div>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header>
            {state.value ? <button onClick={()=>dispatch(ToggleAction)}> Day </button> : <button onClick={()=>dispatch(ToggleAction)}> Night </button>}
          </Header>
            <Content>
              {children}
            </Content>
            <Footer/>
        </div>
      </LayoutStyle>
    </DarkModeContext.Provider>
  )

}

export default Layout
