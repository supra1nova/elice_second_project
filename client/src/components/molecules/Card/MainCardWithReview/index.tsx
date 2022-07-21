import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../../atoms/Grade';
import * as Icon from '../../../../assets/svg';
import { useEffect, useState } from 'react';
import * as API from '../../../../api/api';

interface MainCardWithReviewProps {
  title: String;
  address: String;
  shopImg: any;
  regNumber: string;
}
const MainCardWithReview = ({
  title,
  address,
  shopImg,
  regNumber,
}: MainCardWithReviewProps) => {
  const [reviewComment, setReviewComment] = useState('');
  const getReviewData = async () => {
    const result = await API.get(`/api/reviews/${regNumber}`).then((res) => {
      const randomNumber = Math.floor(Math.random() * res.reviews.length);
      const comment = res.reviews[randomNumber].comment;
      setReviewComment(comment);
    });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <Link to={`/restaurants/view/${regNumber}`}>
      <UI.Container>
        <UI.ImgWrapper>
          <img src={shopImg}></img>
        </UI.ImgWrapper>
        <UI.InfoWrapper>
          <UI.Title>
            {title}
            <Grade regNumber={regNumber} />
          </UI.Title>
          <UI.SubTitle>{address}</UI.SubTitle>
          <UI.descriptionWrapper>
            <Icon.Profile width={24} height={24} />
            <UI.Description>{reviewComment}</UI.Description>
          </UI.descriptionWrapper>
          <UI.SeeDetails>
            {title} 더보기
            <Icon.Arrow />
          </UI.SeeDetails>
        </UI.InfoWrapper>
      </UI.Container>
    </Link>
  );
};

MainCardWithReview.defaultProps = {
  title: '오츠에스프레소',
  address: '서울특별시 마포구 독막로14길 32',
  reviewComment: '방문 후 첫 리뷰를 작성해보세요!',
  shopImg: process.env.PUBLIC_URL + '/images/testImg.png',
};

export default MainCardWithReview;
