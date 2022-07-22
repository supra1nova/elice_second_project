import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../../atoms/Grade';
import * as Icon from '../../../../assets/svg';
import { useEffect, useState } from 'react';
import * as API from '../../../../api/api';
import Img from '../../../atoms/Img';

interface MainCardWithReviewProps {
  title: String;
  address: String;
  shopImg: any;
  reviwerImg: any;
  regNumber: string;
}
const MainCardWithReview = ({
  title,
  address,
  shopImg,
  regNumber,
  reviwerImg,
}: MainCardWithReviewProps) => {
  const [reviewComment, setReviewComment] = useState('첫 리뷰를 작성해주세요!');
  const [reviewer, setReviewer] = useState('');
  const [reviewerImg, setReviewerImg] = useState('');
  const [image, setImage] = useState('');
  const getReviewData = async () => {
    const result = await API.get(`/api/reviews/${regNumber}`).then((res) => {
      // setReviewer(res.reviews[0].email);
      if (res) {
        setReviewer(res.reviews[0].email);
        const randomNumber = Math.floor(Math.random() * res.reviews.length);
        const comment = res.reviews[randomNumber].comment;
        setReviewComment(comment);
      } else {
        setReviewer('');
        setReviewComment('첫 리뷰를 작성해주세요!');
      }
    });
  };

  const getImage = async () => {
    const result = await API.get(`/api/restaurantImages/${regNumber}`).then(
      (res) => {
        setImage(res[0].image);
      },
    );
  };

  const getUserImage = async () => {
    const result = await API.get(`/api/users/user/${reviewer}`);
    setReviewerImg(result.image);
  };

  useEffect(() => {
    getReviewData();
    getImage();
  }, []);

  useEffect(() => {
    getUserImage();
  }, [reviewer]);

  return (
    <Link to={`/restaurants/view/${regNumber}`}>
      <UI.Container>
        <UI.ImgWrapper>
          <Img src={image || shopImg}></Img>
        </UI.ImgWrapper>
        <UI.InfoWrapper>
          <UI.Title>
            {title}
            <Grade regNumber={regNumber} />
          </UI.Title>
          <UI.SubTitle>{address}</UI.SubTitle>
          <UI.descriptionWrapper>
            <img
              src={reviewerImg || reviwerImg}
              style={{ width: '24px', height: '24px', borderRadius: '50%' }}
            />

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
  reviwerImg: process.env.PUBLIC_URL + '/images/reviewerDefault.png',
};

export default MainCardWithReview;
