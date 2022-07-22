import React, { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import { MapViewButton } from '../../../atoms/MapViewButton/index';
import * as UI from './style';

type infoObject = {
  address1: any;
  postalcode: number;
  address2: string;
  phoneNumber: string;
  category: string;
};

type menuObject = {
  name: string;
  price: number;
};

const RestaurantInfo = () => {
  const [infoInputs, setInfoInputs] = useState<infoObject>({
    address1: '',
    postalcode: 0,
    address2: '',
    phoneNumber: '',
    category: '',
  });
  const [menuInputs, setMenuInputs] = useState<any>([]);

  const [menuPrice, setMenuPrice] = useState<any>('');

  useEffect(() => {
    const REGNumber = window.location.href.split('/')[5];
    API.get(`/api/restaurants/${REGNumber}`).then((res) => {
      setInfoInputs(res);
    });
    const result = API.get(`/api/menus/${REGNumber}`).then((res) => {
      if (res.length > 0) {
        setMenuInputs(res);
      }
    });
  }, []);

  const moneyMark = (item: any) => {
    return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <UI.RestaurantInfo>
      <UI.Info>
        <UI.InfoTitle>주소</UI.InfoTitle>
        <div>
          <UI.InfoDescription>{infoInputs.address1}</UI.InfoDescription>
          <UI.InfoCaption>
            ({infoInputs.postalcode}) {infoInputs.address2}
          </UI.InfoCaption>
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
      {menuInputs.length > 0 ? (
        <UI.Info>
          <UI.InfoTitle>메뉴</UI.InfoTitle>
          <UI.InfoDescription>
            {menuInputs.map((item: any) => (
              <UI.InfoDescriptionItem>
                <UI.InfoMenu>{item.name}</UI.InfoMenu>
                <UI.InfoPrice>{moneyMark(item.price)}원</UI.InfoPrice>
              </UI.InfoDescriptionItem>
            ))}
          </UI.InfoDescription>
        </UI.Info>
      ) : null}
    </UI.RestaurantInfo>
  );
};

export default RestaurantInfo;
