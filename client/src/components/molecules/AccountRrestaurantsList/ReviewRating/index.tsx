import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api'

type reviewLengthObject = {
    total: number; 
    ratingFive: number;
    ratingFour: number;
    ratingThree: number;
    ratingTwo: number;
    ratingOne: number;
}

const Rating = () => {
    const [reviewLength, setReviewLength] = useState<reviewLengthObject>({
        total: 0,
        ratingFive: 0,
        ratingFour: 0,
        ratingThree: 0,
        ratingTwo: 0,
        ratingOne: 0,
    })

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];
            // API.get(`/api/reviews/:${REGNumber}`).then((res) => {
            //     const reviews = res.data.reviews
            //     console.log(res)
                
            //     let ratingFive = 0;
            //     let ratingFour = 0;
            //     let ratingThree = 0;
            //     let ratingTwo = 0;
            //     let ratingOne = 0;

            //     reviews.map((el:any) => {
            //         if(el.rating >= 5) {
            //             ratingFive++
            //         } else if(el.rating >= 4) {
            //             ratingFour++
            //         } else if(el.rating >= 3) {
            //             ratingThree++
            //         } else if(el.rating >= 2) {
            //             ratingTwo++
            //         } else {
            //             ratingOne++
            //         }
            //   });

            //     setReviewLength({
            //         total: reviews.length,
            //         ratingFive: ratingFive,
            //         ratingFour: ratingFour,
            //         ratingThree: ratingThree,
            //         ratingTwo: ratingTwo,
            //         ratingOne: ratingOne,
            //     })
            // })
        }, []
    )

    return (
        <StyledTitle>
            <div>리뷰 ({reviewLength.total})</div>
            <div>
                <span>전체({reviewLength.total})</span>
                <span>5점({reviewLength.ratingFive})</span>
                <span>4점({reviewLength.ratingFour})</span>
                <span>3점({reviewLength.ratingThree})</span>
                <span>2점({reviewLength.ratingTwo})</span>
                <span>1점({reviewLength.ratingOne})</span>
            </div>
        </StyledTitle>
    );
};
  
export default Rating;

const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.font.subtitle1};
    margin-bottom: 10px;

    div > span {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        margin-left: 10px;
    }
`
