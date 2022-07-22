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
    const [owner, setOwner] = useState<{name: string, email: string}>({
        name: '',
        email: ''
    })
    const [inputValue, setInputValue] = useState<any>(null);
    const [openPopupDeleteConfirm, setOpenPopupDeleteConfirm] = useState(false);
    const [roleEmail, setRoleEmail] = useState<string | null | undefined>(null)
    const reserveIdData = {reserveId: reserveId }
    const OwnerCommentData = {
        reserveId: reserveId,
        ownerComment: inputValue
    }
    const isOwner = roleEmail === owner.email

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
            setOpenPopupDeleteConfirm(false);
            window.location.replace(`/restaurants/view/${REGNumber}`);
        } catch (err: any) {
            console.error(err);
        }
    };

    const handleCommentSubmit = (e: any) => {
        e.preventDefault()
        if(inputValue !== null) {
            try {
                API.post('/api/reviews/owner', '', OwnerCommentData);
                window.location.replace(`/restaurants/view/${REGNumber}`);
            } catch (err: any) {
                console.error(err);
            }
        } else {
            alert('댓글을 입력해주세요.')
        }
    };

    const onChangeHandler = (event:any) => {
        setInputValue(event.target.value);
     };

    useEffect(() => {
        API.get(`/api/restaurants/${REGNumber}`).then((res) => {
            if(res) {
                setOwner({name: res.name, email: res.ownerEmail})
            }
        })

        // 리뷰 이미지 가져오기
        API.get(`/api/reviewImages/${reserveId}`).then((res: any) => {
            let copy:any = [...reviewImgs]
            copy = []
            copy = res
            setReviewImgs(copy)
        })

        API.userGet('/api/users/user').then((res) => {
            if(res === undefined) {
              setRoleEmail(undefined)
            } else {
              setRoleEmail(res.email)
            }
        });
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
            {ownerComment !== null 
                ? <UI.StyledOwnerReview>
                    <UI.StyledOwnerReviwerProfile>
                        <div>
                            <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                            <UI.StyledOwnerName>{owner.name}</UI.StyledOwnerName>
                        </div>
                        {
                            //변수 a -> token email === review emaill -> true면
                            //button 보여주고, false면 null
                            isOwner
                            ? <button onClick={handleOpenPopupDeleteConfirm}>삭제</button>
                            : null
                        }
                    </UI.StyledOwnerReviwerProfile>
                    <UI.StyledOwnerDescription>
                    {ownerComment}
                    </UI.StyledOwnerDescription>
                </UI.StyledOwnerReview>
                : !isOwner
                ? null
                : <UI.StyledOwnerReview>
                    <UI.OwnerComment>
                        <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                        <form onSubmit={handleCommentSubmit}>
                            <input 
                                type="text" 
                                placeholder='댓글을 입력하세요' 
                                onChange={onChangeHandler}
                                value={inputValue}
                            />
                            <input type="submit" value="등록" />
                        </form>
                    </UI.OwnerComment>
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
