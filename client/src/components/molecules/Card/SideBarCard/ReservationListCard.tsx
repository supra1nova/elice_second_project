import * as UI from './style';
import { Link } from 'react-router-dom';
import Img from '../../../atoms/Img';
import * as Icon from '../../../../assets/svg';

// name , timestamp 불러오기

interface ReservationListCardProps {
  title: String;
  reservationTime: String;
}
const ReservationListCard = ({
  title,
  reservationTime,
}: ReservationListCardProps) => {
  return (
    <div>
      <Link to=''>
        <UI.Container review={false}>
          <UI.ImgWrapper review={false}>
            <Img></Img>
          </UI.ImgWrapper>
          <UI.InfoWrapper>
            <UI.Title>{title}</UI.Title>
            <UI.Caption>
              <Icon.Calender />
              {reservationTime}
            </UI.Caption>
          </UI.InfoWrapper>
        </UI.Container>
      </Link>
    </div>
  );
};

const d: Date = new Date();

ReservationListCard.defaultProps = {
  title: '오츠에스프레소',
  reservationTime: '2022.7.19 오전 10:00',
};

export default ReservationListCard;
