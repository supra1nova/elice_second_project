import styled from 'styled-components';
import { ReserveButton } from '../../atoms/ReserveButton/index'
import * as Icon from '../../../assets/svg';

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
const StyledBranch = styled.p`
    ${(props) => props.theme.font.subtitle1};
    color: ${(props) => props.theme.colors.font3};
    padding-top: 12px;
`
const StyledBottom = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const StyledLikeReview = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledLikeReviewText = styled.div`
    color: ${(props) => props.theme.colors.font3};
    padding: 0 20px 0 10px;
`
const StyledLike = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledCaption = styled.p`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font2};
    padding-top: 5px;
`

const RestaurantTitle = () => {
    return (
      <StyledInfoContainer>
            <StyledTitleBox>
                <div>
                    <StyledRestaurantName>울프강스테이크하우스</StyledRestaurantName>
                    <StyledGPA>4.3</StyledGPA>
                    <StyledBranch>청담점</StyledBranch>
                </div>
                <ReserveButton>예약하기</ReserveButton>
            </StyledTitleBox>
            <StyledBottom>
                <StyledLikeReview>
                    <Icon.Heart fill={'#A6A8A3'}/>
                    <StyledLikeReviewText>2,123</StyledLikeReviewText>
                    <Icon.Review />
                    <StyledLikeReviewText>123</StyledLikeReviewText>
                </StyledLikeReview>
                <StyledLike>
                    <Icon.Heart fill={'none'} width={'23.69px'} height={'22px'} />
                    <StyledCaption>찜하기</StyledCaption>
                </StyledLike>
            </StyledBottom>
      </StyledInfoContainer>
    );
  };
  
  export default RestaurantTitle;