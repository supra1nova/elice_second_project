import { ReserveButton } from '../../../atoms/ReserveButton'
import { useState, useEffect } from 'react';
import * as API from '../../../../api/api'
import LikeReviewNum from '../../../atoms/LikeReviewNum'
import * as UI from './style';
import PopupReserve from './template/PopupReserve';
import LikeBtn from '../../../atoms/LikeButton/LikeBtn'
import { useNavigate } from 'react-router-dom';

const RestaurantTitle = () => {
    const REGNumber = window.location.href.split('/')[5];
    const navigate = useNavigate();

    const [role, setRole] = useState<string | null | undefined>(null)
    const isNotUser = role === undefined
    const isUser = role === 'user' || role === 'USER'

    const [name, setName] = useState<string>("")
    const [gpa, setGpa] = useState<string | null>(null) //toFixed를 하면 string으로 됨
    const [likeNum, setLikeNum] = useState<number>(0)
    const [reviewNum, setReviewNum] = useState<number>(0)
    const [openPopupReserve, setOpenPopupReserve] = useState(false);
    const [wishes, setWishes] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const isWished = wishes
            .map((e: any) => e.REGNumber)
            .includes(REGNumber);

    // 회원이 예약하기 눌렀을때 핸들러
    const handleOpenPopupReserve = (e: any) => {
        e.preventDefault();
        setOpenPopupReserve(true);
    };

    // 팝업창 닫기 핸들러
    const handleClosePopupReserve = (e: any) => {
        e.preventDefault();
        setOpenPopupReserve(!openPopupReserve);
    };

    // 예약하기 버튼 눌렀을때 Form Submit 핸들러
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            //이게 뭐지..? 예약하기 폼인가??
            await API.delete('/api/reviews/users');
            console.log('예약완료')
        } catch (err: any) {
            console.error(err);
        }
    };

    const getWished = async () => {
        const email = await API.userGet('/api/users/user').then((res) => {
            if(res) {
                setUserEmail(res.email);
                return res.email;
            }
        });
        await API.get(`/api/wishes/${email}`).then((res) => setWishes(res));
    };

    useEffect(() => {
        API.userGet('/api/users/user').then((res) => {
            if(res === undefined) {
              setRole(undefined)
            } else {
              setRole(res.role)
            }
        });

        // 레스토랑명
        API.get(`/api/restaurants/${REGNumber}`).then((res) => {
            setName(cur => cur = res.name)
        })

        // 리뷰개수
        API.get(`/api/reviews/${REGNumber}`).then((res) => {
            const reviews = res.reviews

            if(reviews.length > 0) {
                let rating = 0

                reviews.map((review: any):any => {
                    rating += review.rating
                })

                const averageRating = (rating / reviews.length).toFixed(1)
                setGpa(averageRating)

                setReviewNum(reviews.length)
            }
        })

        // 찜 개수
        API.get(`/api/wishes/total/${REGNumber}`).then((res) => {
            setLikeNum(res)
        })
        getWished()
    }, [])

    return (
        <>
        <UI.InfoContainer>
                <UI.TitleBox>
                    <div>
                        <UI.RestaurantName>{name}</UI.RestaurantName>
                        <UI.GPA>{gpa}</UI.GPA>
                    </div>
                    {   
                        isNotUser
                        ? <ReserveButton onClick={() => navigate('/users/login')}>예약하기</ReserveButton>
                        : isUser
                        ? <ReserveButton onClick={handleOpenPopupReserve}>예약하기</ReserveButton>
                        : null
                    }
                </UI.TitleBox>
                <UI.Bottom>
                    <LikeReviewNum
                        likeNum={likeNum}
                        reviewNum={reviewNum}
                    />
                    {
                        isNotUser || isUser
                        ? <UI.Like>
                            <LikeBtn
                                regNumber={REGNumber}
                                email={userEmail}
                                isWished={isWished}
                                position={'static'}
                            />
                            <p>찜하기</p>
                        </UI.Like>
                        : null
                    }
                </UI.Bottom>
        </UI.InfoContainer>
        <PopupReserve
                open={openPopupReserve}
                onClose={handleClosePopupReserve}
                onClick={handleSubmit}
                width={'427'}
                titleColor={true}
                title={name}
        />
        </>
    );
};

export default RestaurantTitle;