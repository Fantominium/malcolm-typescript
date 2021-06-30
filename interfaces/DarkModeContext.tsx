import { createContext } from "react";
import { IState } from "./DarkModeReducer";


const DarkModeContext = (props:IState) => {

    const DarkMode = createContext<IState>(props)

    return (
        {DarkMode}
    )
}
export default DarkModeContext
