import { ReserveButton } from '../../../atoms/ReserveButton'
import * as Icon from '../../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../../api/api'
import LikeReviewNum from '../../../atoms/LikeReviewNum'
import * as UI from './style';
import PopupReserve from './template/PopupReserve';

const RestaurantTitle = () => {
    const [name, setName] = useState<string>("")
    const [gpa, setGpa] = useState<string | null>(null) //toFixed를 하면 string으로 됨
    const [likeNum, setLikeNum] = useState<number>(0)
    const [reviewNum, setReviewNum] = useState<number>(0)
    const [openPopupReserve, setOpenPopupReserve] = useState(false);

    const handleOpenPopupReserve = (e: any) => {
        e.preventDefault();
        setOpenPopupReserve(true);
    };

    const handleClosePopupReserve = (e: any) => {
        e.preventDefault();
        setOpenPopupReserve(!openPopupReserve);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await API.delete('/api/reviews/users');
            console.log('예약완료')
        } catch (err: any) {
            console.error(err);
        }
    };

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];

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
        }, []
    )

    return (
        <>
        <UI.InfoContainer>
                <UI.TitleBox>
                    <div>
                        <UI.RestaurantName>{name}</UI.RestaurantName>
                        <UI.GPA>{gpa}</UI.GPA>
                    </div>
                    <ReserveButton onClick={handleOpenPopupReserve}>예약하기</ReserveButton>
                </UI.TitleBox>
                <UI.Bottom>
                    <LikeReviewNum
                        likeNum={likeNum}
                        reviewNum={reviewNum}
                    />
                    <UI.Like>
                        <Icon.Heart fill={'none'} width={'23.69px'} height={'22px'} stroke={'#E5E5E5'}/>
                        <p>찜하기</p>
                    </UI.Like>
                </UI.Bottom>
        </UI.InfoContainer>
        <PopupReserve
                open={openPopupReserve}
                onClose={handleClosePopupReserve}
                onClick={handleSubmit}
                width={'427'}
            />
        </>
    );
};

export default RestaurantTitle;