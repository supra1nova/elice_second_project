import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import UserReviewDetail from './ReviewDetail/UserReviewDetail';
import * as UI from './style';

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
    <UI.StyledContent>
      {comments.map((item: any, index: any) => {
        return (
          // role을 체크해서 유저일경우 -> UserReviewDetail
          // role을 체크해서 사장님일경우 -> OwnerReviewDetail
          // role을 체크해서 관리자일경우 -> AdminReviewDetail
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
    </UI.StyledContent>
  );
};

export default ReviewComment;
