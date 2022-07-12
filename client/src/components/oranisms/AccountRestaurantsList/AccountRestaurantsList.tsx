import SliderImg from '../../molecules/AccountRrestaurantsList/Slider/SliderImg'
import RestaurantTitle from '../../molecules/AccountRrestaurantsList/RestaurantTitle'
import RestaurantInfo from '../../molecules/AccountRrestaurantsList/RestaurantInfo'
import RestaurantReview from '../../molecules/AccountRrestaurantsList/RestaurantReview'

const AccountRestaurantsListTemplate = () => {
  return (
    <>
        <SliderImg />
        <RestaurantTitle />
        <RestaurantInfo />
        <RestaurantReview />
    </>
  );
};

export default AccountRestaurantsListTemplate;