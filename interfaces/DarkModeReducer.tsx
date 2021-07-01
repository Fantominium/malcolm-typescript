import {IState, IActions} from "./Types"


export const Actions = {
    TOGGLE: "toggle"
}


export const ToggleAction: IActions = {
    type: Actions.TOGGLE,
}

export const initialState: IState = {
    value: false
}

export function DarkModeReducer(state: IState, actions:IActions): IState {

    const {type} = actions


    switch(type){

        case Actions.TOGGLE :
            return {
                ...state,
                value: !state.value,
            }

        default:
        return initialState
    }
}

//May need to make this a toggle and not two separate functions
