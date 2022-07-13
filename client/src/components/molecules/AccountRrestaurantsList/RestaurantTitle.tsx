import styled from 'styled-components';
import { ReserveButton } from '../../atoms/ReserveButton/index'
import * as Icon from '../../../assets/svg';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const RestaurantTitle = () => {
    const [name, setName] = useState<string>("")
    const [gpa, setGpa] = useState<number>(0)

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];

            axios({
                url: `/api/restaurants/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                const datas = res.data
                setName(cur => cur = datas.name)
            })
            axios({
                url: `/api/reviews/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                const reviews = res.data.reviews
                let rating = 0
                reviews.map((review: any):any => {
                    rating += review.rating
                })
                setGpa(rating / reviews.length)
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
                <StyledLikeReview>
                    <Icon.Heart fill={'#A6A8A3'}/>
                    <div>2,123</div>
                    <Icon.Review />
                    <div>123</div>
                </StyledLikeReview>
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
const StyledLikeReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        padding: 0 10px 0 5px;
    }
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
