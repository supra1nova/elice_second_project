import styled from 'styled-components';
import {MapViewButton} from '../../atoms/MapViewButton/index';
import React, { useState, useEffect } from 'react';
import axios from "axios";

type infoObject = {
    address: any; 
    postalCode: number;
    detailAddress: string;
    phoneNumber: string;
    category: string;
}

type menuObject = {
    menuName: string; 
    menuPrice: number;
}

const RestaurantInfo = () => {
    const [infoInputs, setInfoInputs] = useState<infoObject>({
        address: "",
        postalCode: 0,
        detailAddress: "",
        phoneNumber: "",
        category: "",
    })
    const [menuInputs, setMenuInputs] = useState<menuObject>({
        menuName: "",
        menuPrice: 0,
    })

    useEffect(
        () => {
            const REGNumber = window.location.href.split('/')[5];

            axios({
                url: `/api/restaurants/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                const datas = res.data
                setInfoInputs({
                    address: datas.address1,
                    postalCode:datas.postalcode,
                    detailAddress: datas.address2,
                    phoneNumber: datas.phoneNumber,
                    category: datas.category,
                })
            })
            axios({
                url: `/api/menus/${REGNumber}`,
                method: 'GET'
            }).then((res) => {
                const datas = res.data
                setMenuInputs({menuName: datas[0].name, menuPrice: datas[0].price})
            })
        }, []
    )
    
    return (
      <StyledRestaurantInfo>
        <StyledInfo>
            <StyledInfoTitle>주소</StyledInfoTitle>
            <div>
                <StyledInfoDescription>{infoInputs.address}</StyledInfoDescription>
                <StyledInfoCaption>({infoInputs.postalCode}) {infoInputs.detailAddress}</StyledInfoCaption>
            </div>
            <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton>
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
                <StyledInfoMenu>{menuInputs.menuName}</StyledInfoMenu>
                <StyledInfoPrice>{menuInputs.menuPrice}</StyledInfoPrice>
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
    padding-left: 10px;
`
const StyledInfoMenu = styled.div`
    padding-bottom: 5px;
`