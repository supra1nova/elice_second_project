import {MapViewButton} from '../../../atoms/MapViewButton/index';
import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api'
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
      <UI.RestaurantInfo>
        <UI.Info>
            <UI.InfoTitle>주소</UI.InfoTitle>
            <div>
                <UI.InfoDescription>{infoInputs.address1}</UI.InfoDescription>
                <UI.InfoCaption>({infoInputs.postalcode}) {infoInputs.address2}</UI.InfoCaption>
            </div>
            {/* <MapViewButton style={{marginLeft: '30px'}}>지도로 보기</MapViewButton> */}
        </UI.Info>
        <UI.Info>
            <UI.InfoTitle>전화번호</UI.InfoTitle>
            <UI.InfoDescription>{infoInputs.phoneNumber}</UI.InfoDescription>
        </UI.Info>
        <UI.Info>
            <UI.InfoTitle>음식 종류</UI.InfoTitle>
            <UI.InfoDescription>{infoInputs.category}</UI.InfoDescription>
        </UI.Info>
        <UI.Info>
            <UI.InfoTitle>메뉴</UI.InfoTitle>
            <UI.InfoDescription>
                <UI.InfoMenu>{menuInputs.name}</UI.InfoMenu>
                <UI.InfoPrice>{menuPrice}원</UI.InfoPrice>
            </UI.InfoDescription>
        </UI.Info>
      </UI.RestaurantInfo>
    );
};

export default RestaurantInfo;