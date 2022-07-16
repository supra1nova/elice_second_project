import styled from 'styled-components';
import {MapViewButton} from '../../atoms/MapViewButton/index';
import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api'

type infoObject = {
    address1: any; 
    postalcode: number;
    address2: string;
    phoneNumber: string;
    category: string;
}

type menuObject = {
    name: string; 
    price: number;
}

const RestaurantInfo = () => {
    const [infoInputs, setInfoInputs] = useState<infoObject>({
        address1: "",
        postalcode: 0,
        address2: "",
        phoneNumber: "",
        category: "",
    })
    const [menuInputs, setMenuInputs] = useState<menuObject>({
        name: "",
        price: 0,
    })

    const [menuPrice, setMenuPrice] = useState<any>('')

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];
            API.get(`/api/restaurants/${REGNumber}`).then((res) => {
                setInfoInputs(res)
            })
            API.get(`/api/menus/${REGNumber}`).then((res) => {
                if(res.length > 0) {
                    const data = res[0]
                    setMenuInputs(data)
                }
            })

        }, []
    )
    
    // 메뉴 가격 천단위 콤마
    useEffect(() => {
        setMenuPrice(menuInputs.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }, [menuInputs])
    
    return (
      <StyledRestaurantInfo>
        <StyledInfo>
            <StyledInfoTitle>주소</StyledInfoTitle>
            <div>
                <StyledInfoDescription>{infoInputs.address1}</StyledInfoDescription>
                <StyledInfoCaption>({infoInputs.postalcode}) {infoInputs.address2}</StyledInfoCaption>
            </div>
            {/* <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton> */}
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>전화번호</StyledInfoTitle>
            <StyledInfoDescription>{infoInputs.phoneNumber}</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>음식 종류</StyledInfoTitle>
            <StyledInfoDescription>{infoInputs.category}</StyledInfoDescription>
        </StyledInfo>
        <StyledInfo>
            <StyledInfoTitle>메뉴</StyledInfoTitle>
            <StyledInfoDescription>
                <StyledInfoMenu>{menuInputs.name}</StyledInfoMenu>
                <StyledInfoPrice>{menuPrice}원</StyledInfoPrice>
            </StyledInfoDescription>
        </StyledInfo>
      </StyledRestaurantInfo>
    );
  };
  
  export default RestaurantInfo;


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
    padding-left: 20px;
`
const StyledInfoMenu = styled.div`
    padding-bottom: 5px;
`