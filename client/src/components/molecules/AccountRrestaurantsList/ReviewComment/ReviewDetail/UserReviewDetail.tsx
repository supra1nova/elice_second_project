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
const UserReviewDetail = ({
    key,
    email,
    createdAt,
    comment,
    rating,
    ownerComment,
    reserveId
}: CommentListsProps) => {
    const [reviewImgs, setReviewImgs] = useState<any>([
        {
            image: ''
        }
    ])
    const [ownerName, setOwnerName] = useState<string>('')
    const [myReview, setMyReview] = useState<boolean>(false)
    const [openPopupDeleteConfirm, setOpenPopupDeleteConfirm] = useState(false);

    const handleOpenPopupDeleteConfirm = (e: any) => {
        e.preventDefault();
        setOpenPopupDeleteConfirm(true);
      };
    
      const handleClosePopupDeleteConfirm = (e: any) => {
        e.preventDefault();
        setOpenPopupDeleteConfirm(!openPopupDeleteConfirm);
      };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await API.delete('/api/reviews');
            console.log('삭제완료')
        } catch (err: any) {
            console.error(err);
        }
    };

    useEffect(() => {
        const REGNumber = window.location.href.split('/')[5];

        API.get(`/api/restaurants/${REGNumber}`).then((res) => {
            setOwnerName(res.name)
        })

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
                    <button>수정</button>
                    <button onClick={handleOpenPopupDeleteConfirm}>삭제</button>
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
                    <UI.StyledReviwerProfile>
                        <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                        <UI.StyledOwnerName>{ownerName}</UI.StyledOwnerName>
                    </UI.StyledReviwerProfile>
                    <UI.StyledOwnerDescription>
                    {ownerComment}
                    </UI.StyledOwnerDescription>
                </UI.StyledOwnerReview>
            }
            <PopupDeleteConfirm
                open={openPopupDeleteConfirm}
                onClose={handleClosePopupDeleteConfirm}
                onClick={handleSubmit}
            />
        </>
    );
};

export default UserReviewDetail;
