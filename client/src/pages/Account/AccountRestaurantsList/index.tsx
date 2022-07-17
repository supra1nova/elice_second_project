import SliderImg from '../../../components/molecules/AccountRrestaurantsList/Slider/SliderImg'
import RestaurantTitle from '../../../components/oranisms/AccountRestaurantsList/RestaurantTitle/RestaurantTitle'
import RestaurantInfo from '../../../components/oranisms/AccountRestaurantsList/RestaurantInfo/RestaurantInfo'
import RestaurantReview from '../../../components/oranisms/AccountRestaurantsList/RestaurantReview/RestaurantReview'

const AccountRestaurantsList = () => {
  return (
    <>
        <SliderImg />
        <RestaurantTitle />
        <RestaurantInfo />
        <RestaurantReview />
    </>
  );
};

export default AccountRestaurantsList;