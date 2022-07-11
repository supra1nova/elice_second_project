import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../../atoms/Grade';
import Img from '../../../atoms/Img';

// heart가 interative 하게 만들어야 함
// // 클릭 > 색이 생기고, 유저의 찜리스트에 해당 shop 추가
// 링크는 각 리스트 아이템의 shop detail로 갈 수 있도록
// grade는 계산된 shop의 데이터 가져오기 (atoms/grade)
// description 의 내용은 해당 shop의 가장 최신 리뷰를 들고 와야함.
// 리뷰의 profile은 리뷰작성자의 정보를 가져와야 함

interface RecentReviewCardProps {
  title: String;
  userId: String;
  description: String;
  dateCreated: String;
}
const RecentReviewCard = ({
  title,
  userId,
  description,
  dateCreated,
}: RecentReviewCardProps) => {
  return (
    <div>
      <Link to=''>
        <UI.Container review>
          <UI.ImgWrapper review>
            <Img></Img>
          </UI.ImgWrapper>
          <UI.InfoWrapper>
            <UI.TitleWrapper>
              <UI.Title>{title}</UI.Title>
              <UI.SubTitleWrapper>
                {userId}
                <Grade />
                <UI.Caption>{dateCreated}</UI.Caption>
              </UI.SubTitleWrapper>
            </UI.TitleWrapper>
            <UI.Caption>{description}</UI.Caption>
          </UI.InfoWrapper>
        </UI.Container>
      </Link>
    </div>
  );
};

RecentReviewCard.defaultProps = {
  title: '오츠에스프레소',
  userId: '도리안느',
  dateCreated: '1일전',
  description:
    '무려 망고플레이트 별점 4.7의 오츠 에스프레소! 역시 믿고 가는 망플 픽이라는 생각을 했네요. 정말 맛있었습니다. 아인슈페너 한잔 마...',
};

export default RecentReviewCard;
