import {DarkModeReducer, initialState, EnableAction, DisableAction} from '../DarkModeReducer'
import { useReducer } from "react";


// type Props = {
//     label ?: string
// }

// type DarkModeContext = IDarkMode


const SliderButton = () => {

    const [state, dispatch] = useReducer(DarkModeReducer, initialState)
    return (
        <>
            {<button onClick={()=>dispatch(EnableAction)}> Night </button>}
            Where the sate is {state.value}
            {<button onClick={()=>dispatch(DisableAction)}> Day </button>}
        </>
    )
}

export default SliderButton
