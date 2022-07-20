import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import ReviewDetail from './ReviewDetail/ReviewDetail';
import UserReviewDetail from './ReviewDetail/UserReviewDetail';
import OwnerReviewDetail from './ReviewDetail/OwnerReviewDetail';
import AdminReviewDetail from './ReviewDetail/AdminReviewDetail';
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
  const [role, setRole] = useState<string | null | undefined>(null)
  const isNotUser = role === undefined
  const isUser = role === 'user'
  const isOwner = role === 'owner'
  const isAdmin = role === 'admin'

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      console.log(res)
      if(res === undefined) {
        setRole(undefined)
      } else {
        setRole(res.role)
      }
      // 여기 email이랑 리뷰 email이링 값이 같으면 삭제버튼을 보여주고
  });

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
          {
            isNotUser
            // ? <ReviewDetail
            //     key={index}
            //     email={item.email}
            //     createdAt={item.createdAt}
            //     comment={item.comment}
            //     rating={item.rating}
            //     ownerComment={item.ownerComment}
            //     reserveId={item.reserveId}
            //   />
          }
          
        );
      })}
    </UI.StyledContent>
  );
};

export default ReviewComment;
