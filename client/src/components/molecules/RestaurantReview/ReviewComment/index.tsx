import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import ReviewPage from './ReviewPage/ReviewPage';
import UserReviewPage from './ReviewPage/UserReviewPage';
import OwnerReviewPage from './ReviewPage/OwnerReviewPage';
import AdminReviewPage from './ReviewPage/AdminReviewPage';
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
  const isUser = role === 'user' || role === 'USER'
  const isOwner = role === 'owner' || role === 'OWNER'
  const isAdmin = role === 'admin' || role === 'ADMIN'

  console.log(role)
  console.log(`isNotUser: ${isNotUser}`)
  console.log(`isUser: ${isUser}`)
  console.log(`isOwner: ${isOwner}`)
  console.log(`isAdmin: ${isAdmin}`)

  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      if(res === undefined) {
        setRole(undefined)
      } else {
        setRole(res.role)
      }
    });

    const REGNumber = window.location.href.split('/')[5];

    API.get(`/api/reviews/${REGNumber}`).then((res) => {
      const reviews = res.reviews;
      setComment(reviews);
    });
  }, []);
  
  // role을 체크해서 undefined일경우 -> ReviewDetail
  // role을 체크해서 유저일경우 -> UserReviewDetail
  // role을 체크해서 사장님일경우 -> OwnerReviewDetail
  // role을 체크해서 관리자일경우 -> AdminReviewDetail
  return (
    <UI.StyledContent>
      {
        isNotUser
        ? <ReviewPage />
        : isUser
        ? <UserReviewPage />
        : isOwner
        ? <OwnerReviewPage />
        : isAdmin
        ? <AdminReviewPage />
        : null
      }
    </UI.StyledContent>
  );
};

export default ReviewComment;
