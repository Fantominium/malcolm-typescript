import { useReducer, createContext, useEffect } from 'react'
import Head from 'next/head'
import Header from "./organisms/Header"
import Content from "./organisms/Content"
import Footer from './organisms/Footer'
import {DarkModeReducer} from '../interfaces/DarkModeReducer'
import{ChildrenNodeProps, IContext, IState} from "../interfaces/Types"
import LayoutStyle from "./organisms/LayoutStyle"
import SliderButton from './atoms/SliderButton'

export const DarkModeContext = createContext<IContext>({})

export const Layout = ({ children, title = 'This is the default title' }: ChildrenNodeProps) => {

  const init = ():IState => localStorage.getItem('darkmode') ? JSON.parse(localStorage.getItem('darkmode')!) : { value: false }

  const [state, dispatch] = useReducer(DarkModeReducer,init())

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(state))
    
  }, [state])

  return (
    //retrieve darkmode and use it here
    
    <DarkModeContext.Provider value = {{state, dispatch}}>
      <LayoutStyle>
        <div>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header>
            <SliderButton dispatch={dispatch}/>
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
