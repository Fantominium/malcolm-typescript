import Image from 'next/image'
import styled from 'styled-components'
import { useSession } from 'next-auth/client';

type Props = {
    url : string| undefined
    alt : string | undefined
}

const ImageSpace = styled.div `

    padding: .5em;
    display: inline-block; 
`

const ProfilePic = ({url = "", alt = ""}: Props) => {
    const [session, loading] = useSession();

    return (
        <ImageSpace>
            {!session && (
                <>
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
                </>
            )}
            {session && (
                <>
                    <img
                    height={80}
                    width ={80}
                    className= "imageStyle"
                    src={session?.user?.image!}
                    alt={alt}
                    /> 
                    <style jsx global>{`
                    .imageStyle {
                        border-radius: 999px;
                    }
                    `}</style>
                </>
              )}
        </ImageSpace>
    )
}

export default ProfilePic
