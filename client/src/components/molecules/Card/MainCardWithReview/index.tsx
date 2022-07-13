import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../../atoms/Grade';
import SeeMore from '../../../atoms/SeeMore';
import Img from '../../../atoms/Img';
import * as Icon from '../../../../assets/svg';
import LikeBtn from '../../../atoms/LikeButton/LikeBtn';

// heart가 interative 하게 만들어야 함
// // 클릭 > 색이 생기고, 유저의 찜리스트에 해당 shop 추가
// 링크는 각 리스트 아이템의 shop detail로 갈 수 있도록
// grade는 계산된 shop의 데이터 가져오기 (atoms/grade)
// description 의 내용은 해당 shop의 가장 최신 리뷰를 들고 와야함.
// 리뷰의 profile은 리뷰작성자의 정보를 가져와야 함

interface MainCardWithReviewProps {
  title: String;
  address: String;
  description: String;
  shopImg: any;
}
const MainCardWithReview = ({
  title,
  address,
  description,
  shopImg,
}: MainCardWithReviewProps) => {
  return (
    <div>
      <Link to=''>
        <UI.Container>
          <UI.ImgWrapper>
            <img src={shopImg}></img>
          </UI.ImgWrapper>
          <UI.InfoWrapper>
            <UI.Title>
              {title}
              <Grade />
              <LikeBtn />
            </UI.Title>
            <UI.SubTitle>{address}</UI.SubTitle>
            <UI.descriptionWrapper>
              <Icon.Profile width={24} height={24} />
              <UI.Description>
                {description}
                <SeeMore></SeeMore>
              </UI.Description>
            </UI.descriptionWrapper>
            <UI.SeeDetails>
              {title} 더보기
              <Icon.Arrow />
            </UI.SeeDetails>
          </UI.InfoWrapper>
        </UI.Container>
      </Link>
    </div>
  );
};

MainCardWithReview.defaultProps = {
  title: '오츠에스프레소',
  address: '서울특별시 마포구 독막로14길 32',
  description:
    '무려 망고플레이트 별점 4.7의 오츠 에스프레소! 역시 믿고 가는 망플 픽이라는 생각을 했네요. 정말 맛있었습니다. 아인슈페너 한잔 마...',
};

export default MainCardWithReview;
