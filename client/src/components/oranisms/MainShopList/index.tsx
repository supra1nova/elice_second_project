import ShopListCard from '../../molecules/Card/MainCardWithoutReview';
import * as UI from './style';
import { dummy } from './MockData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as API from '../../../api/api';

const postData = {
  email: 'dcTest000',
  name: 'kdc',
  password: '93939393',
  nickName: 'adsfadsfcv',
  phoneNumber: '1292',
  role: 'OWNER',
};

const MainShopList = () => {
  const [shop, setShop] = useState([
    {
      name: '',
      address1: '',
      category: '',
      image: '',
    },
  ]);
  useEffect(() => {
    API.get('/api/restaurants').then((res) => {
      setShop(res.restaurants);
    });
  }, []);
  console.log(shop);
  return (
    <UI.Container>
      <UI.Title>추천 맛집 List!</UI.Title>
      <UI.SubTitle>알 수 없는 알고리즘에 의한 추천</UI.SubTitle>
      <UI.GridContainer>
        {shop.map((item, idx) => {
          return (
            <div key={`${item}-${idx}`}>
              <ShopListCard
                title={item.name}
                address={item.address1}
                category={item.category}
                likeCount={5}
                reviewCount={10}
                shopImg={item.image}
                large={true}
              />
            </div>
          );
        })}
      </UI.GridContainer>
    </UI.Container>
  );
};

export default MainShopList;
