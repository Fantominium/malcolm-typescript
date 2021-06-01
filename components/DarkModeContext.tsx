import { useReducer } from "react";

type IState = {
    isEnabled: boolean

}
type IActions = {
    type : {}
}

const Actions = {
    ENABLE : "enable",
    DISABLE: "disable"
}

const initialState: IState = {
    isEnabled: false
}

function reducer(state: IState, actions:IActions) {
    
    switch(actions.type){

        case Actions.ENABLE :
        return {
            ...state,
            isEnabled: true,
        }

        case Actions.DISABLE :
        return {
            ...state,
            isEnabled: false,
        }

        default: 
        return initialState
    }
}


export const DarkModeContext = () => {

    const [state, dispatch]  = useReducer(reducer, {isEnabled : false})


    return (
        
        <button>
            here without err
        </button>
    )
}

// export default DarkModeContext
