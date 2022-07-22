import * as UI from './style';
import MainCardWithReview from '../../molecules/Card/MainCardWithReview';
import MainCardWithoutReview from '../../molecules/Card/SearchShopList';
import { useEffect, useState } from 'react';
import * as API from '../../../api/api';
import { Link } from 'react-router-dom';
import LikeBtn from '../../atoms/LikeButton/LikeBtn';

const HomeList = () => {
  const [recommendShop, setRecommendShop] = useState<any>([]);
  const [topGradeShop, setTopGradeShop] = useState([]);
  const [recentCreated, setRecentCreated] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [wishes, setWishes] = useState<any>([]);

  // 중복없이 랜덤한 레스토랑 6개 가져오기
  const getRecommentRandomData = async () => {
    const result = await API.get('/api/restaurants').then((res) => {
      return res.restaurants;
    });
    const randomShop = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = result[Math.floor(Math.random() * result.length)];
      if (randomShop.indexOf(randomNum) === -1) {
        randomShop.push(randomNum);
      } else {
        i--;
      }
    }
    setRecommendShop(randomShop);
    const sortRestaurantsByGrade = result.sort((a: any, b: any) => {
      if (a.average > b.average) {
        return -1;
      }
      if (a.average < b.average) {
        return 1;
      }
      return 0;
    });
    const topGradeData = sortRestaurantsByGrade.slice(0, 7);
    setTopGradeShop(topGradeData);

    const sortRestaurantsByCreateTime = result.sort((a: any, b: any) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
    const recentCreatedData = sortRestaurantsByCreateTime.slice(0, 7);
    setRecentCreated(recentCreatedData);
  };

  //기존 찜한 목록 가져오기
  const getWished = async () => {
    if (localStorage.getItem('token')) {
      const email = await API.userGet('/api/users/user').then((res) => {
        setUserEmail(res.email);
        return res.email;
      });
      await API.get(`/api/wishes/${email}`).then((res) => {
        setWishes(res);
      });
    }
  };

  useEffect(() => {
    getRecommentRandomData();
    getWished();
  }, []);

  return (
    <UI.Container>
      <UI.Title style={{ marginTop: '50px' }}>추천 맛집!</UI.Title>
      <UI.SubTitle>알수없는 알고리즘에 의한 추천 맛집</UI.SubTitle>
      <UI.GridContainer>
        {recommendShop.map((item: any, idx: number) => {
          const checkWished = wishes
            .map((e: { REGNumber: any }) => e.REGNumber)
            .includes(item.REGNumber);
          return (
            <div
              style={{
                position: 'relative',
                boxShadow: '1px 1px  8px #dfdfdf',
                borderRadius: '8px',
              }}
              key={`${idx}-${item.REGNumber}`}
            >
              <LikeBtn
                regNumber={item.REGNumber}
                email={userEmail}
                isWished={checkWished}
              />
              <MainCardWithReview
                title={item.name}
                address={item.address1 + ' ' + item.address2}
                regNumber={item.REGNumber}
              />
            </div>
          );
        })}
      </UI.GridContainer>
      <UI.Divider />

      <UI.Title>평점이 높은 인기 식당</UI.Title>
      <UI.SubTitle>방문자들이 평가한 높은 평점의 식당을 만나보세요</UI.SubTitle>
      <UI.FlexContainer>
        {topGradeShop.map((item: any, idx: number) => {
          const checkWished = wishes
            .map((e: { REGNumber: any }) => e.REGNumber)
            .includes(item.REGNumber);
          return (
            <div
              style={{
                position: 'relative',
              }}
              key={`${idx}-${item.REGNumber}`}
            >
              <LikeBtn
                regNumber={item.REGNumber}
                email={userEmail}
                isWished={checkWished}
              />
              <Link to={`/restaurants/view/${item.REGNumber}`}>
                <MainCardWithoutReview
                  regNumber={item.REGNumber}
                  large={false}
                  title={item.name}
                  address={item.address1}
                  likeCount={item.wishers}
                  shopImg={item.image}
                  category={item.category}
                />
              </Link>
            </div>
          );
        })}
      </UI.FlexContainer>

      <UI.Divider />
      <UI.Title>신규 오픈!</UI.Title>
      <UI.SubTitle>신규 오픈한 식당을 만나보세요</UI.SubTitle>
      <UI.FlexContainer>
        {recentCreated.map((item: any, idx: number) => {
          const checkWished = wishes
            .map((e: { REGNumber: any }) => e.REGNumber)
            .includes(item.REGNumber);
          return (
            <div
              style={{
                position: 'relative',
              }}
              key={`${idx}-${item.REGNumber}`}
            >
              <LikeBtn
                regNumber={item.REGNumber}
                email={userEmail}
                isWished={checkWished}
              />
              <Link to={`/restaurants/view/${item.REGNumber}`}>
                <MainCardWithoutReview
                  regNumber={item.REGNumber}
                  large={false}
                  title={item.name}
                  address={item.address1}
                  likeCount={item.wishers}
                  shopImg={item.image}
                  category={item.category}
                />
              </Link>
            </div>
          );
        })}
      </UI.FlexContainer>
    </UI.Container>
  );
};

export default HomeList;
