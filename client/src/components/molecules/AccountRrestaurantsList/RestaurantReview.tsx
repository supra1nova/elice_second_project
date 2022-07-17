import Rating from './ReviewRating'
import ReviewComment from './ReviewComment'
import * as UI from './style';

const RestaurantReview = () => {
    return (
      <UI.StyledRestaurantReview>
        <Rating />
        <ReviewComment />
      </UI.StyledRestaurantReview>
    );
};

export default RestaurantReview;



