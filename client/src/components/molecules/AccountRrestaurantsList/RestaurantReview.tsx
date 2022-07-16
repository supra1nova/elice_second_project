import styled from 'styled-components';
import Rating from './ReviewRating'
import ReviewComment from './ReviewComment'

const RestaurantReview = () => {
    return (
      <StyledRestaurantReview>
        <Rating />
        <ReviewComment />
      </StyledRestaurantReview>
    );
  };
  
  export default RestaurantReview;


const StyledRestaurantReview = styled.div`
margin: 0 40px;
color: ${(props) => props.theme.colors.font1};
`
