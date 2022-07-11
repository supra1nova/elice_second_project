import styled from 'styled-components';
import {MapViewButton} from '../../atoms/MapViewButton/index';

const StyledRestaurantInfo = styled.div`
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    margin: 20px 40px;
    padding: 20px 0;
`
const StyledInfo = styled.div`
    display: flex;
    align-items: flex-start;
    padding-bottom: 14px;

    &:last-child {
        padding-bottom: 0;
    }
`
const StyledInfoTitle = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font3};
    width: 125px;
`
const StyledInfoDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font1};
    display: flex;
`
const StyledInfoCaption = styled.div`
    ${(props) => props.theme.font.caption};
    color: ${(props) => props.theme.colors.font3};
    padding-top: 5px;
`
const StyledInfoPrice = styled.div`
    text-align: right;
    width: 100px;
`
const StyledInfoMenu = styled.div`
    width: 180px;
    padding-bottom: 5px;
`

const RestaurantInfo = () => {
    return (
      <StyledRestaurantInfo>
        <StyledInfo>
            <StyledInfoTitle>주소</StyledInfoTitle>
            <div>
                <StyledInfoDescription>서울특별시 강남구 선릉로152길 21</StyledInfoDescription>
                <StyledInfoCaption>(지번) 서울시 강남구 청담동 89-6</StyledInfoCaption>
            </div>
            <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>전화번호</StyledInfoTitle>
            <StyledInfoDescription>02-556-8700</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>음식 종류</StyledInfoTitle>
            <StyledInfoDescription>스테이크 / 바베큐</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>가격대</StyledInfoTitle>
            <StyledInfoDescription>4만원 이상</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>주차</StyledInfoTitle>
            <StyledInfoDescription>발렛</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>영업시간</StyledInfoTitle>
            <StyledInfoDescription>오전 11:00 - 오후 10:00</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>마지막주문</StyledInfoTitle>
            <StyledInfoDescription>오후 9:00</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>메뉴</StyledInfoTitle>
            <div>
                <StyledInfoDescription>
                    <StyledInfoMenu>포터하우스 스테이크 (1000g)</StyledInfoMenu>
                    <StyledInfoPrice>253,000원</StyledInfoPrice>
                </StyledInfoDescription>
                <StyledInfoDescription>
                    <StyledInfoMenu>오늘의 생선</StyledInfoMenu>
                    <StyledInfoPrice>46,000원</StyledInfoPrice>
                </StyledInfoDescription>
                <StyledInfoDescription>
                    <StyledInfoMenu>독일식 포테이토</StyledInfoMenu>
                    <StyledInfoPrice>16,000원</StyledInfoPrice>
                </StyledInfoDescription>
            </div>
        </StyledInfo>
      </StyledRestaurantInfo>
    );
  };
  
  export default RestaurantInfo;