import {DarkModeReducer, EnableAction, DisableAction} from '../../interfaces/DarkModeReducer'
import { useReducer } from "react";



const SliderButton = () => {

    const [state, dispatch] = useReducer(DarkModeReducer, {value:false})

    return (
        <>
            {<button onClick={()=>dispatch(EnableAction)}> Night </button>}
            Where the Dark Mode is {state.value ? "Enabled" : "Disabled" }   
            {<button onClick={()=>dispatch(DisableAction)}> Day </button>}
        </>
    )
}

export default SliderButton
