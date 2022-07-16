import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as API from '../../../../api/api';
import CommentLists from './CommentLists/index';

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
    console.log(REGNumber);
    API.get(`/api/reviews/${REGNumber}`).then((res) => {
      const reviews = res.reviews;
      setComment(reviews);
    });

    // // 리뷰 유저 닉네임 가져오기
    // API.get(`/api/users/user/${comments.email}`).then((res) => {
    //     console.log(res)
    // })
  }, []);

  return (
    <StyledContent>
      {comments.map((item: any, index: any) => {
        return (
          <CommentLists
            key={index}
            email={item.email}
            createdAt={item.createdAt}
            comment={item.comment}
            rating={item.rating}
            ownerComment={item.ownerComment}
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
