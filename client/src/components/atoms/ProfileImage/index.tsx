import * as Icon from '../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../api/api'
import * as UI from './style';

interface CommentListsProps {
    email: string,
}

const ProfileImage = ({
    email,
}: CommentListsProps) => {
    const [imageUrl, setImageUrl] = useState<string>('')

    useEffect(() => {
        API.get(`/api/users/user/${email}`).then((res) => {
            if(res){
                const data = res.image
                setImageUrl(data)
            }
        })
    }, [])
    
    return (
        <>
            {
                imageUrl !== '' ?
                <UI.StyledProfileImage src={imageUrl} alt={imageUrl}/> :
                <Icon.Profile fill={'#64AD57'} width={'50px'} height={'50px'}/>
            }
        </>
    )
}

export default ProfileImage;