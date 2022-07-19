import * as UI from './style';
import Img from '../../../atoms/Img';
import * as Icon from '../../../../assets/svg';
import Grade from '../../../atoms/Grade';
import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';

interface MainCardWithoutReviewProps {
  title: String;
  address: String;
  description: String;
  category: String;
  large: boolean;
  // Number로 받으면 caption에 reactNode가 두개라 함..
  likeCount: any;
  shopImg: string;
  regNumber: string;
}
const MainCardWithoutReview = ({
  title,
  address,
  category,
  large,
  likeCount,
  shopImg,
  regNumber,
}: MainCardWithoutReviewProps) => {
  const [reviewCount, setReviewCount] = useState(0);
  const getReviewData = async () => {
    const result = await API.get(`/api/reviews/${regNumber}`).then((res) => {
      const count = res.reviews.length;
      console.log(count);
      setReviewCount(count);
    });
  };

  useEffect(() => {
    getReviewData();
  }, []);
  return (
    <>
      <UI.Container large={large}>
        <UI.ImgWrapper large={large}>
          <Img src={shopImg}></Img>
        </UI.ImgWrapper>
        <UI.InfoWrapper>
          <UI.Title large={large}>
            {title}
            {large && <Grade regNumber={regNumber} />}
          </UI.Title>
          <UI.SubTitle>
            {address} - {category}
            <UI.Caption large={large}>
              <Icon.Heart fill={'gray'} />
              {likeCount}
              <Icon.Review />
              {reviewCount}
            </UI.Caption>
          </UI.SubTitle>
        </UI.InfoWrapper>
      </UI.Container>
    </>
  );
};

MainCardWithoutReview.defaultProps = {
  title: '오츠에스프레소',
  address: '판교',
  foodType: '이탈리안음식',
  description:
    '무려 망고플레이트 별점 4.7의 오츠 에스프레소! 역시 믿고 가는 망플 픽이라는 생각을 했네요. 정말 맛있었습니다. 아인슈페너 한잔 마...',
  likeCount: 42511,
  reviewCount: 75,
};

export default MainCardWithoutReview;
