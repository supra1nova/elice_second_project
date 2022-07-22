import { useState, useEffect } from 'react';
import * as API from '../../../../../api/api';
import ReviewDetail from './../ReviewPage/ReviewDetail/ReviewDetail';

const ReviewPage = () => {
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
    <>
      {comments.map((item: any, index: any) => {
        return (
          <ReviewDetail
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
    </>
  );
};

export default ReviewPage;
