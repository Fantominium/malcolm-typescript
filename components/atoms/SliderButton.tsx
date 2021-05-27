import { IDarkMode, useDarkMode} from '../DarkModeContext'
// import { useContext } from 'react';


type Props = {
    label ?: string
}

type DarkModeContext = IDarkMode


const SliderButton = ({label = ""} : Props) => {

    const darkMode: DarkModeContext = useDarkMode()

    return (

        <button> {darkMode.enabled ? <span>Night</span> : <span>Day `${label}`</span>}</button>
    )
}

export default SliderButton
