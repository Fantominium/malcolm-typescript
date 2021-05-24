
type Props = {
    label ?: string
}


const SliderButton = ({label = ""} : Props) => {
    return (
        <button>
            {label}
        </button>
    )
}

export default SliderButton
