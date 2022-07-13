import ShopListCard from '../../molecules/Card/MainCardWithoutReview';
import * as UI from './style';
import { dummy } from './MockData';
import { useEffect } from 'react';
import axios from 'axios';

const MainShopList = () => {
  const REGNumber = '12314-1214';
  // const getData = async () => {
  //   const res = await axios.get(`http://localhost:3001/api/restaurants`);
  //   console.log(res);
  // };
  useEffect(() => {
    axios({
      url: `http://localhost:3001/api/restaurants/${REGNumber}`,
      method: 'GET',
    }).then((res) => {
      console.log(res.data);
    });
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
