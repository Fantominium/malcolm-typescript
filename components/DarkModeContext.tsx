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


