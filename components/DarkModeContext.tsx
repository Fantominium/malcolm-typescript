import { createContext, useContext } from "react";

export interface IDarkMode {
    enabled: boolean
    // toggle ?: Function
}
const enabledDefault: boolean = false


export const DarkMode = createContext<IDarkMode>({
    enabled: enabledDefault
})

DarkMode.displayName = "DarkModeContext"

export const useDarkMode = () => useContext<IDarkMode>(DarkMode)


//why not create the state for holding dark mode in here? Atomising this functionality.
//Instead of having it on the layout level, have this on the organism level