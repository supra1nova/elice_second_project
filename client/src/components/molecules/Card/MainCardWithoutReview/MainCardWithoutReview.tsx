import * as UI from './style';
import { Link } from 'react-router-dom';
import Img from '../../../atoms/Img';
import * as Icon from '../../../../assets/svg';
import LikeBtn from '../../../atoms/LikeButton/LikeBtn';
import Grade from '../../../atoms/Grade';

// heart가 interative 하게 만들어야 함
// // 클릭 > 색이 생기고, 유저의 찜리스트에 해당 shop 추가 (atom/LikeBtn)
// 링크는 각 리스트 아이템의 shop detail로 갈 수 있도록
// grade는 계산된 shop의 데이터 가져오기 (atoms/grade)
// likeCount, reviewCount 도 atoms로 빼는게 좋겠음 (shop detail에서도 사용)
// util에 toLocaleString 추가?

// large props를 이용 (large(true) => searchList , large(false) => main2card)

interface MainCardWithoutReviewProps {
  title: String;
  address: String;
  description: String;
  foodType: String;
  large: boolean;
  // Number를 어떻게.... 못받음
  likeCount?: String;
  reviewCount?: String;
}
const MainCardWithoutReview = ({
  title,
  address,
  foodType,
  large,
  likeCount,
  reviewCount,
}: MainCardWithoutReviewProps) => {
  return (
    <div>
      <Link to=''>
        <UI.Container large={large}>
          <UI.ImgWrapper large={large}>
            <Img></Img>
            <LikeBtn />
          </UI.ImgWrapper>
          <UI.InfoWrapper>
            <UI.Title large={large}>
              {title}
              {large && <Grade />}
            </UI.Title>
            <UI.SubTitle>
              {address} - {foodType}
              {large && (
                <UI.Caption>
                  <Icon.Heart fill={'gray'} />
                  {likeCount}
                  <Icon.Review />
                  {reviewCount}
                </UI.Caption>
              )}
            </UI.SubTitle>
          </UI.InfoWrapper>
        </UI.Container>
      </Link>
    </div>
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
