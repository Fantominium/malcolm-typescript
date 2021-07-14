import {ToggleAction} from '../../interfaces/DarkModeReducer'
import { useContext, useEffect } from "react";
import { IContext } from '../../interfaces/Types';
import { DarkModeContext } from "../Layout"



const SliderButton = (Props:IContext ) => {

    const themeContext = useContext<IContext>(DarkModeContext)
    const themeValue = themeContext.state?.value

    useEffect(() => {
        //using the side effect to change color with each click
    }, [themeContext.state?.value])

    return (
        <>
            {themeValue ? 
            <button onClick={()=>Props.dispatch? Props.dispatch(ToggleAction): ''}> Day </button> : 
            <button onClick={()=>Props.dispatch? Props.dispatch(ToggleAction): ''}> Night </button>}
        </>
    )
}

export default SliderButton
