import {DarkModeReducer, EnableAction, DisableAction} from '../DarkModeReducer'
import { useReducer } from "react";


// type Props = {
//     label ?: string
// }

// type DarkModeContext = IDarkMode


const SliderButton = () => {

    const [state, dispatch] = useReducer(DarkModeReducer, {value:false})
    console.log(state.value)
    return (
        <>
            {<button onClick={()=>dispatch(EnableAction)}> Night </button>}
            Where the Dark Mode is {state.value ? "Enabled" : "Disabled" }   
            {<button onClick={()=>dispatch(DisableAction)}> Day </button>}
        </>
    )
}

export default SliderButton
