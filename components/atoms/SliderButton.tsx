import {DarkMode, IDarkMode, useDarkMode} from '../DarkModeContext'
import { useContext } from 'react';


type Props = {
    label ?: string
}

const SliderButton = ({label = ""} : Props) => {

    const dm = useDarkMode()

    return (

        <button>enabled: {console.log(dm.enabled)}</button>
    )
}

export default SliderButton
