import Rating from '../../../molecules/RestaurantReview/ReviewRating'
import ReviewComment from '../../../molecules/RestaurantReview/ReviewComment'
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



