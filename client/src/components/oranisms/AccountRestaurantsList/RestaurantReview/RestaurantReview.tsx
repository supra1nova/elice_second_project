import Rating from '../../../molecules/AccountRrestaurantsList/ReviewRating'
import ReviewComment from '../../../molecules/AccountRrestaurantsList/ReviewComment'
import * as UI from './style';

const RestaurantReview = () => {
    return (
      <UI.RestaurantReview>
        <Rating />
        <ReviewComment />
      </UI.RestaurantReview>
    );
};

export default RestaurantReview;



