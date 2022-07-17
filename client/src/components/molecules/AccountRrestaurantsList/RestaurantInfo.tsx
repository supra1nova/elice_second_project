import {MapViewButton} from '../../atoms/MapViewButton/index';
import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api'
import * as UI from './style';

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
      <UI.StyledRestaurantInfo>
        <UI.StyledInfo>
            <UI.StyledInfoTitle>주소</UI.StyledInfoTitle>
            <div>
                <UI.StyledInfoDescription>{infoInputs.address1}</UI.StyledInfoDescription>
                <UI.StyledInfoCaption>({infoInputs.postalcode}) {infoInputs.address2}</UI.StyledInfoCaption>
            </div>
            {/* <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton> */}
        </UI.StyledInfo>
        <UI.StyledInfo>
            <UI.StyledInfoTitle>전화번호</UI.StyledInfoTitle>
            <UI.StyledInfoDescription>{infoInputs.phoneNumber}</UI.StyledInfoDescription>
        </UI.StyledInfo>
        <UI.StyledInfo>
            <UI.StyledInfoTitle>음식 종류</UI.StyledInfoTitle>
            <UI.StyledInfoDescription>{infoInputs.category}</UI.StyledInfoDescription>
        </UI.StyledInfo>
        <UI.StyledInfo>
            <UI.StyledInfoTitle>메뉴</UI.StyledInfoTitle>
            <UI.StyledInfoDescription>
                <UI.StyledInfoMenu>{menuInputs.name}</UI.StyledInfoMenu>
                <UI.StyledInfoPrice>{menuPrice}원</UI.StyledInfoPrice>
            </UI.StyledInfoDescription>
        </UI.StyledInfo>
      </UI.StyledRestaurantInfo>
    );
};

export default RestaurantInfo;