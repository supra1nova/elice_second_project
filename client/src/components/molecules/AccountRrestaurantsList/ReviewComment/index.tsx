import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import UserReviewDetail from './ReviewDetail/UserReviewDetail';

const ReviewComment = () => {
  const [comments, setComment] = useState<any>([
    {
      // image: any,
      email: '',
      createdAt: '',
      comment: '',
      rating: 0,
      reserveId: 0,
      ownerComment: null,
    },
  ]);

  useEffect(() => {
    const REGNumber = window.location.href.split('/')[5];

    API.get(`/api/reviews/${REGNumber}`).then((res) => {
      const reviews = res.reviews;
      setComment(reviews);
    });
  }, []);

  return (
    <StyledContent>
      {comments.map((item: any, index: any) => {
        return (
          <UserReviewDetail
            key={index}
            email={item.email}
            createdAt={item.createdAt}
            comment={item.comment}
            rating={item.rating}
            ownerComment={item.ownerComment}
            reserveId={item.reserveId}
          />
        );
      })}
    </StyledContent>
  );
};

export default ReviewComment;

const StyledContent = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
