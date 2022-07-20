import * as Icon from '../../../../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../../../../api/api'
import ProfileImage from '../../../../../atoms/ProfileImage'
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
const OwnerReviewDetail = ({
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
    const [openPopupDeleteConfirm, setOpenPopupDeleteConfirm] = useState(false);
    const reserveIdData = {reserveId: reserveId }

    const handleOpenPopupDeleteConfirm = (e: any) => {
        e.preventDefault();
        setOpenPopupDeleteConfirm(true);
      };
    
      const handleClosePopupDeleteConfirm = (e: any) => {
        e.preventDefault();
        setOpenPopupDeleteConfirm(!openPopupDeleteConfirm);
      };

    const handleSubmit = () => {
        try {
            API.delete('/api/reviews/owner', '', reserveIdData);
            console.log('삭제완료')
            setOpenPopupDeleteConfirm(false);
            window.location.replace(`/account/restaurants/${REGNumber}`);
        } catch (err: any) {
            console.error(err);
        }
    };

    useEffect(() => {
        API.get(`/api/restaurants/${REGNumber}`).then((res) => {
            if(res) {
                setOwnerName(res.name)
            }
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
            <PopupDeleteConfirm
                open={openPopupDeleteConfirm}
                onClose={handleClosePopupDeleteConfirm}
                onClick={handleSubmit}
            />
        </>
    );
};

export default OwnerReviewDetail;
