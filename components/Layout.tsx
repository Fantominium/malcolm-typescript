import { ReactNode, useReducer, createContext } from 'react'
import Head from 'next/head'
import Header from "./organisms/Header"
import {DarkModeReducer, EnableAction, DisableAction} from './DarkModeReducer'

type Props = {
  children?: ReactNode
  title?: string
}
export const DarkModeContext = createContext({})

// const enabled = createContext<IDarkMode>({enabled:false})

export const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const [state, dispatch] = useReducer(DarkModeReducer, {value:false})
  // const DarkModeContext = createContext(state)


  return (
    <DarkModeContext.Provider value = {state}>

      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {<button onClick={()=>dispatch(EnableAction)}> Night </button>}
          Where the Dark Mode is {state.value ? "Enabled" : "Disabled" }   
        {<button onClick={()=>dispatch(DisableAction)}> Day </button>}

          <Header/>
          
          {children}
          <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
          </footer>
      </div>
    </DarkModeContext.Provider>

  )

}

// export default Layout
