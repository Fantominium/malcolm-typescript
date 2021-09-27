import Image from 'next/image'
import styled from 'styled-components'
import { useSession } from 'next-auth/client';

type Props = {
    url : string| undefined
    alt : string | undefined
}

const ImageSpace = styled.div`
    /* padding: .5em;
    display: inline-block;  */
    padding: .5em;
    display: flex;
    flex-direction: column;
`

const ProfilePic = ({url = "", alt = ""}: Props) => {
    const [session] = useSession();

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
                    <p>Please Log in</p>
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
                    <p>{session?.user?.email}</p>
                </>
              )}
        </ImageSpace>
    )
}

export default ProfilePic
