import * as UI from './style';
import { Link } from 'react-router-dom';

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
          <UI.Img></UI.Img>
          <UI.InfoWrapper>
            <UI.Title>{title}</UI.Title>
            <UI.SubTitle>{address}</UI.SubTitle>
            <UI.Description>{description}</UI.Description>
          </UI.InfoWrapper>
        </UI.CardWrapperHorizon>
      </Link>
      <UI.DividerLine />
    </div>
  );
};

WeekBestCard.defaultProps = {
  title: 'week best shop',
  address: 'seoul, Korea',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit harum nostrum explicabo',
};

export default WeekBestCard;
