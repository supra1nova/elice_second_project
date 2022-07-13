import ShopListCard from '../../molecules/Card/MainCardWithoutReview';
import * as UI from './style';
import { dummy } from './MockData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as API from '../../../api/api';

const postData = {
  email: '동철Test',
  name: 'ddd',
  password: 'asdf',
  nickName: 'nick',
  phoneNumber: '12345678',
  role: 'ADMIN',
};

const MainShopList = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    // API.get('/api/users').then((res) => setData(res));
    API.post('/api/users/register', '', postData);
  }, []);
  return (
    <UI.Container>
      <UI.Title>추천 맛집 List!</UI.Title>
      <UI.SubTitle>알 수 없는 알고리즘에 의한 추천</UI.SubTitle>
      <UI.GridContainer>
        {dummy.map((item, idx) => {
          return (
            <>
              <ShopListCard
                key={`${item.shopName}-${idx}`}
                title={item.shopName}
                address={item.shopAddress}
                category={item.shopCategory}
                likeCount={item.shopLikeCount.toLocaleString()}
                reviewCount={item.shopReviewCount}
                shopImg={item.shopImg}
                large={true}
              />
            </>
          );
        })}
      </UI.GridContainer>
    </UI.Container>
  );
};

export default MainShopList;
