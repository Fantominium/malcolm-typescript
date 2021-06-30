import {ReactNode} from "react"

export type IProps = {
    theme: {
        color: string
    }
}

export type ChildrenNodeProps = {
    children?: ReactNode
    title?: string
}

export type IState = {
    value ?: boolean | undefined
}