import {IState, IActions} from "./Types"

export const Actions = {
    ENABLE : "enable",
    DISABLE : "disable"
}


export const EnableAction: IActions = {
    type: Actions.ENABLE,
    payload: true
}
export const DisableAction: IActions = {
    type: Actions.DISABLE,
    payload: false
}

export const initialState: IState = {
    value: false
}

export function DarkModeReducer(state: IState, actions:IActions): IState {

    const {type} = actions


    switch(type){

        case Actions.ENABLE :
        return {
            ...state,
            value: true,
        }

        case Actions.DISABLE :
        return {
            ...state,
            value: false,
        }

        default:
        return initialState
    }
}

//May need to make this a toggle and not two separate functions
