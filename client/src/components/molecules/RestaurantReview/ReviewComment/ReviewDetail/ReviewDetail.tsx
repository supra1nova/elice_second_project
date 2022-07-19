import * as Icon from '../../../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../../../api/api'
import ProfileImage from '../../../../atoms/ProfileImage'
import * as UI from './style';
import PopupDeleteConfirm from './template/PopupDeleteConfirm';

interface CommentListsProps {
    key: number,
    email: string,
    createdAt: string,
    comment: string,
    rating: number,
    ownerComment: null | string,
    reserveId: number
}
const ReviewDetail = ({
    key,
    email,
    createdAt,
    comment,
    rating,
    ownerComment,
    reserveId
}: CommentListsProps) => {
    const REGNumber = window.location.href.split('/')[5];

    const [reviewImgs, setReviewImgs] = useState<any>([
        {
            image: ''
        }
    ])
    const [ownerName, setOwnerName] = useState<string>('')

    useEffect(() => {
        API.get(`/api/restaurants/${REGNumber}`).then((res) => {
            setOwnerName(res.name)
        })

        API.userGet('/api/users/user').then((res) => {
            if(res) {
                setOwnerName(res.name)
            }
            // 여기 email이랑 리뷰 email이링 값이 같으면 삭제버튼을 보여주고
        });

        // 리뷰 이미지 가져오기
        API.get(`/api/reviewImages/${reserveId}`).then((res: any) => {
            let copy:any = [...reviewImgs]
            copy = []
            copy = res
            setReviewImgs(copy)
        })
    }, [])

    return (
        <>
        <UI.StyledReviewBox>
                <UI.StyledReviwerProfile>
                    <ProfileImage email={email} />
                    <UI.StyledNameDate>
                        <UI.StyledReviewerProfileName>{email.split(/[@]/)[0]}</UI.StyledReviewerProfileName>
                        <UI.StyledReviewDate>{createdAt.substring(0, 10)}</UI.StyledReviewDate>
                    </UI.StyledNameDate>
                </UI.StyledReviwerProfile>
                <UI.StyledReviewRight>
                    <UI.StyledGPA>평점 {rating}</UI.StyledGPA>
                </UI.StyledReviewRight>
            </UI.StyledReviewBox>
            <UI.StyledReviewInner>
                <UI.StyledDescription>
                    {comment}
                </UI.StyledDescription>
                <div>
                    {
                        reviewImgs.map((item:any, index:number) => {
                            return <img src={item.image} alt={`리뷰이미지${index + 1}`} />
                        })
                    }
                    
                </div>
            </UI.StyledReviewInner>
            {ownerComment === null ? null :
                <UI.StyledOwnerReview>
                    <UI.StyledOwnerReviwerProfile>
                        <div>
                            <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                            <UI.StyledOwnerName>{ownerName}</UI.StyledOwnerName>
                        </div>
                    </UI.StyledOwnerReviwerProfile>
                    <UI.StyledOwnerDescription>
                    {ownerComment}
                    </UI.StyledOwnerDescription>
                </UI.StyledOwnerReview>
            }
        </>
    );
};

export default ReviewDetail;
