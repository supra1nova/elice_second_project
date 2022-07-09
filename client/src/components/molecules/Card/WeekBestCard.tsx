import * as UI from './style';
import { Link } from 'react-router-dom';
import Grade from '../../atoms/Grade';
import SeeMore from '../../atoms/SeeMore';
import Img from '../../atoms/Img';
import * as Icon from '../../../assets/svg';
interface WeekBestCardProps {
  title: String;
  address: String;
  description: String;
}
const WeekBestCard = ({ title, address, description }: WeekBestCardProps) => {
  return (
    <div>
      <Link to=''>
        <UI.CardWrapperHorizon>
          <UI.ImgWrapper>
            <Img></Img>
          </UI.ImgWrapper>
          <UI.InfoWrapper>
            <UI.Title>
              {title}
              <Grade />
              <Icon.Heart width={23.69} height={22} />
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
        </UI.CardWrapperHorizon>
      </Link>
    </div>
  );
};

WeekBestCard.defaultProps = {
  title: '오츠에스프레소',
  address: '서울특별시 마포구 독막로14길 32',
  description:
    '무려 망고플레이트 별점 4.7의 오츠 에스프레소! 역시 믿고 가는 망플 픽이라는 생각을 했네요. 정말 맛있었습니다. 아인슈페너 한잔 마...',
};

export default WeekBestCard;
