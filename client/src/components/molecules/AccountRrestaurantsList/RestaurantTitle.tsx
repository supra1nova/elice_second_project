import { ReserveButton } from '../../atoms/ReserveButton/index'
import * as Icon from '../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../api/api'
import LikeReviewNum from '../../atoms/LikeReviewNum/index'
import * as UI from './style';

const RestaurantTitle = () => {
    const [name, setName] = useState<string>("")
    const [gpa, setGpa] = useState<string | null>(null) //toFixed를 하면 string으로 됨
    const [likeNum, setLikeNum] = useState<number>(0)
    const [reviewNum, setReviewNum] = useState<number>(0)

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
      <UI.StyledInfoContainer>
            <UI.StyledTitleBox>
                <div>
                    <UI.StyledRestaurantName>{name}</UI.StyledRestaurantName>
                    <UI.StyledGPA>{gpa}</UI.StyledGPA>
                </div>
                <ReserveButton>예약하기</ReserveButton>
            </UI.StyledTitleBox>
            <UI.StyledBottom>
                <LikeReviewNum
                    likeNum={likeNum}
                    reviewNum={reviewNum}
                />
                <UI.StyledLike>
                    <Icon.Heart fill={'none'} width={'23.69px'} height={'22px'} stroke={'#E5E5E5'}/>
                    <p>찜하기</p>
                </UI.StyledLike>
            </UI.StyledBottom>
      </UI.StyledInfoContainer>
    );
};

export default RestaurantTitle;