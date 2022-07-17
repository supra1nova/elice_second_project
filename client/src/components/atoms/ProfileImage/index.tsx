import * as Icon from '../../../assets/svg';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as API from '../../../api/api'

interface CommentListsProps {
    email: string,
}

const ProfileImage = ({
    email,
}: CommentListsProps) => {
    const [imageUrl, setImageUrl] = useState<string>('')

    useEffect(() => {
        API.get(`/api/users/user/${email}`).then((res) => {
            const data = res.image
            setImageUrl(data)
        })
    }, [])
    
    return (
        <>
            {
                imageUrl !== '' ?
                <StyledProfileImage src={imageUrl} alt={imageUrl}/> :
                <Icon.Profile fill={'#64AD57'} width={'50px'} height={'50px'}/>
            }
        </>
    )
}

export default ProfileImage;

const StyledProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`