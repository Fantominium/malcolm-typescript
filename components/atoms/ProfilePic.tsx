import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
type Props = {
    location ?: string| undefined
    alt ?: string | undefined
}

const ImageSpace = styled.div `
    padding: .4em;
    display: inline-block;

`
// cannot use style components here to round the image, but i can use it to space the image

const ProfilePic = ({location = "", alt = ""}: Props) => {
    return (
        <ImageSpace>
            <Image
            height={80}
            width ={80}
            className= "imageStyle"
            src={location}
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
