import * as UI from './style';
import { Link } from 'react-router-dom';
import * as CategoryIcon from '../../../assets/svg/categoryIcon';
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
          <UI.Img></UI.Img>
          <UI.InfoWrapper>
            <UI.Title>{title}</UI.Title>
            <UI.SubTitle>{address}</UI.SubTitle>
            <UI.Description>{description}</UI.Description>
          </UI.InfoWrapper>
        </UI.CardWrapperHorizon>
      </Link>
      <UI.DividerLine />
      <CategoryIcon.KFood />
      <CategoryIcon.Meat />
      <CategoryIcon.Brunch />
      <CategoryIcon.Buffet />
      <CategoryIcon.Cafe />
      <CategoryIcon.Chicken />
      <CategoryIcon.CourseMeal />
      <CategoryIcon.DiningBar />
      <CategoryIcon.Family />
      <CategoryIcon.Noodle />
      <CategoryIcon.Pasta />
      <CategoryIcon.Pizza />
      <CategoryIcon.SeaFood />
      <CategoryIcon.Vegan />
      <p></p>
      <Icon.Calender />
      <Icon.Close />
      <Icon.Exit />
      <Icon.Heart />
      <Icon.Review />
      <Icon.Search />
      <Icon.Setting />
      <Icon.Clock />
      <Icon.Person />
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
