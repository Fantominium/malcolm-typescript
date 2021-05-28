import { useReducer, useState } from "react";

export interface IDarkMode {
    enabled: boolean
    // toggle ?: Function
}

function reducer(state: boolean, action:string) {
    return {
        enabled:true
    }
}


export const DarkModeContext = () => {
    const [state, dispatch] = useReducer(reducer, {enabled:false})


    return (
        
        <button onClick={dispatch()}>
            
        </button>
    )
}

export default DarkModeContext
