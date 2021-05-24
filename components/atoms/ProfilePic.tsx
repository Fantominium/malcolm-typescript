import Image from 'next/image'
import styled from 'styled-components'
type Props = {
    url : string| undefined
    alt : string | undefined
}

const ImageSpace = styled.div `

    padding: .5em;
    display: inline-block; 
`

const ProfilePic = ({url = "", alt = ""}: Props) => {
    return (
        <ImageSpace>
            <Image
            height={80}
            width ={80}
            className= "imageStyle"
            src={url}
            alt={alt}
            /> 
            <style jsx global>{`
            .imageStyle {
                border-radius: 999px;
            }
            `}</style>
        </ImageSpace>
    )
}

export default ProfilePic
