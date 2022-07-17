import styled from 'styled-components';
import { ReserveButton } from '../../atoms/ReserveButton/index'
import * as Icon from '../../../assets/svg';
import { useState, useEffect } from 'react';
import * as API from '../../../api/api'
import LikeReviewNum from '../../atoms/LikeReviewNum/index'

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
      <StyledInfoContainer>
            <StyledTitleBox>
                <div>
                    <StyledRestaurantName>{name}</StyledRestaurantName>
                    <StyledGPA>{gpa}</StyledGPA>
                </div>
                <ReserveButton>예약하기</ReserveButton>
            </StyledTitleBox>
            <StyledBottom>
                <LikeReviewNum
                    likeNum={likeNum}
                    reviewNum={reviewNum}
                />
                <StyledLike>
                    <Icon.Heart fill={'none'} width={'23.69px'} height={'22px'} stroke={'#E5E5E5'}/>
                    <p>찜하기</p>
                </StyledLike>
            </StyledBottom>
      </StyledInfoContainer>
    );
  };
  
  export default RestaurantTitle;


const StyledInfoContainer = styled.div`
    margin: 0 40px;
`
const StyledRestaurantName = styled.h1`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.font1};
    display: inline-block;
`
const StyledTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledGPA = styled.span`
    ${(props) => props.theme.font.title1};
    color: ${(props) => props.theme.colors.main1};
    padding-left: 10px;
`
const StyledBottom = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const StyledLike = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font2};
        padding-top: 5px;
    }
`