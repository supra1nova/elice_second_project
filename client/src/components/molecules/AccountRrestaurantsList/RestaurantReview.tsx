import styled from 'styled-components';
import * as Icon from '../../../assets/svg';

const StyledRestaurantReview = styled.div`
    margin: 0 40px;
    color: ${(props) => props.theme.colors.font1};
`
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.font.subtitle1};
    margin-bottom: 10px;
`
const StyledGPAFilter = styled.span`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font3};

    & + & {
        margin-left: 10px;
    }
`
const StyledReviewBox = styled.div`
    padding: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledReviwerProfile = styled.div`
    display: flex;
    align-items: center;
`
const StyledReviewerProfileName = styled.div`
    ${(props) => props.theme.font.subtitle2};
`
const StyledReviewDate = styled.div`
    ${(props) => props.theme.font.description2};
    margin-top: 4px;
`
const StyledNameDate = styled.div`
    margin-left: 10px;
`
const StyledReviewRight = styled.div`
    display: flex;
    ${(props) => props.theme.font.subtitle1};
    color: ${(props) => props.theme.colors.font3}; 
`
const StyledGPA = styled.div`
    color: ${(props) => props.theme.colors.fontMain};
    padding-right: 10px;
`
const StyledUD = styled.div`
    & + & {
        margin-left: 10px;
    }
`
const StyledReviewInner = styled.div`
    padding-left: 60px;
`
const StyledDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font2}; 
    line-height: 20px;
    padding-bottom: 20px;
`
const StyledReviewImg = styled.img`
    width: 80px;
    height: 80px;

    & + & {
        margin-left: 10px;
    }
`
const StyledContent = styled.div`
    border-bottom: 1px solid #E5E5E5;
`
const StyledOwnerReview = styled.div`
    background-color: ${(props) => props.theme.colors.main4};
    padding: 10px;
    margin: 20px 0 20px 60px;
`
const StyledOwnerName = styled.div`
    ${(props) => props.theme.font.subtitle2};
    padding-left: 10px;
`
const StyledOwnerDescription = styled.div`
    ${(props) => props.theme.font.description2};
    padding-left: 40px;
`

const RestaurantReview = () => {
    return (
      <StyledRestaurantReview>
        <StyledTitle>
            <div>리뷰 (122)</div>
            <div>
                <StyledGPAFilter>전체(122)</StyledGPAFilter>
                <StyledGPAFilter>5점(122)</StyledGPAFilter>
                <StyledGPAFilter>4점(122)</StyledGPAFilter>
                <StyledGPAFilter>3점(122)</StyledGPAFilter>
                <StyledGPAFilter>2점(122)</StyledGPAFilter>
                <StyledGPAFilter>1점(122)</StyledGPAFilter>
            </div>
        </StyledTitle>
        <StyledContent>
            <StyledReviewBox>
                <StyledReviwerProfile>
                    <Icon.Profile fill={'#64AD57'} width={'50px'} height={'50px'}/>
                    <StyledNameDate>
                        <StyledReviewerProfileName>홍길동</StyledReviewerProfileName>
                        <StyledReviewDate>2022-07-14</StyledReviewDate>
                    </StyledNameDate>
                </StyledReviwerProfile>
                <StyledReviewRight>
                    <StyledGPA>평점 4.3</StyledGPA>
                    <StyledUD>수정</StyledUD>
                    <StyledUD>삭제</StyledUD>
                </StyledReviewRight>
            </StyledReviewBox>
            <StyledReviewInner>
                <StyledDescription>
                    유명한 스테이크 집인 이유가 있다 굽기도 좋았고 직원들도 친절했다 울프강 특제 스테이크 소스도 미국의 맛이 느껴져서 좋았다 식전빵도 좋았으나 개인적으로 양파가 들어간 식전빵은 양파향이 너무 강해서 개인적으론 별로였다 
하지만 스테이크는 그냥 맛있다 다만 조금 부족한점은 내가 방문 했을때 그날은 간이 전반적으로 짜서 조금 먹기가
                </StyledDescription>
                <div>
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33314" alt="" />
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33319" alt="" />
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33317" alt="" />
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33337" alt="" />
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33341" alt="" />
                    <StyledReviewImg src="https://mp-seoul-image-production-s3.mangoplate.com/10248/601525_1629129399205_33342" alt="" />
                </div>
            </StyledReviewInner>
            <StyledOwnerReview>
                <StyledReviwerProfile>
                    <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                    <StyledOwnerName>홍길동</StyledOwnerName>
                </StyledReviwerProfile>
                <StyledOwnerDescription>
                안녕하세요 미식가되고픈피티킴님 ^^ 리뷰 남겨주셔서 감사합니다.
                </StyledOwnerDescription>
            </StyledOwnerReview>
        </StyledContent>
      </StyledRestaurantReview>
    );
  };
  
  export default RestaurantReview;