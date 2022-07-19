import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../../atoms/Grade';
import * as Icon from '../../../../assets/svg';
import { useEffect, useState } from 'react';
import * as API from '../../../../api/api';

// heart가 interative 하게 만들어야 함
// // 클릭 > 색이 생기고, 유저의 찜리스트에 해당 shop 추가
// 링크는 각 리스트 아이템의 shop detail로 갈 수 있도록
// grade는 계산된 shop의 데이터 가져오기 (atoms/grade)
// description 의 내용은 해당 shop의 가장 최신 리뷰를 들고 와야함.
// 리뷰의 profile은 리뷰작성자의 정보를 가져와야 함

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
      console.log(res);
      const randomNumber = Math.floor(Math.random() * res.reviews.length);
      const comment = res.reviews[randomNumber].comment;
      setReviewComment(comment);
    });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <Link to={`/account/restaurants/${regNumber}`}>
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
