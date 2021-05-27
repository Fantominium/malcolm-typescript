import { ReactNode, createContext } from 'react'
import Head from 'next/head'
import Header from "./organisms/Header"
import { DarkMode, useDarkMode } from "./DarkModeContext";
import SliderButton from "./atoms/SliderButton"


type Props = {
  children?: ReactNode
  title?: string
}


// const enabled = createContext<IDarkMode>({enabled:false})

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <DarkMode.Provider value={useDarkMode()}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <SliderButton/>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  </DarkMode.Provider>
)

export default Layout
