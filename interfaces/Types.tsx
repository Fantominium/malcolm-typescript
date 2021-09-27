import {Dispatch, ReactNode} from "react"

export type IProps = {
    theme: {
        mode: string
    }
}

export type ChildrenNodeProps = {
    children?: ReactNode
    title?: string
}

export type IState = {
    value ?: boolean | undefined | string | null
}

export type Actions = { //may need to be remove for it is not in use
    TOGGLE ?: string
}

export type IActions = {
    type ?: string
    payload ?: boolean|undefined
}

export type IContext = {
    state ?: IState,
    dispatch ?: Dispatch<IActions>
}


