import styled from 'styled-components';
import * as Icon from '../../../../../assets/svg';

interface CommentListsProps {
    email: string,
    createdAt: string,
    comment: string,
    rating: number,
    ownerComment: null | string
  }
  const CommentLists = ({
    email,
    createdAt,
    comment,
    rating,
    ownerComment
  }: CommentListsProps) => {
    return (
      <>
        <StyledReviewBox>
                <StyledReviwerProfile>
                    <Icon.Profile fill={'#64AD57'} width={'50px'} height={'50px'}/>
                    <StyledNameDate>
                        <StyledReviewerProfileName>{email}</StyledReviewerProfileName>
                        <StyledReviewDate>{createdAt}</StyledReviewDate>
                    </StyledNameDate>
                </StyledReviwerProfile>
                <StyledReviewRight>
                    <StyledGPA>평점 {rating}</StyledGPA>
                    <div>수정</div>
                    <div>삭제</div>
                </StyledReviewRight>
            </StyledReviewBox>
            <StyledReviewInner>
                <StyledDescription>
                    {comment}
                </StyledDescription>
                <div>
                    {/* 리뷰 이미지 들어가는 곳 */}
                </div>
            </StyledReviewInner>
            <StyledOwnerReview>
                <StyledReviwerProfile>
                    <Icon.Profile fill={'#64AD57'} width={'30px'} height={'30px'}/>
                    <StyledOwnerName>홍길동</StyledOwnerName>
                </StyledReviwerProfile>
                <StyledOwnerDescription>
                {ownerComment}
                </StyledOwnerDescription>
            </StyledOwnerReview>
      </>
    );
  };
  
  export default CommentLists;

  const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.font.subtitle1};
    margin-bottom: 10px;

    div > span {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        margin-left: 10px;
    }
`
const StyledReviewBox = styled.div`
    padding: 20px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledReviwerProfile = styled.div`
    display: flex;
    align-items: center;
`
const StyledReviewerProfileName = styled.div`
    ${(props) => props.theme.font.subtitle2};
`
const StyledReviewDate = styled.div`
    ${(props) => props.theme.font.description2};
    margin-top: 4px;
`
const StyledNameDate = styled.div`
    margin-left: 10px;
`
const StyledReviewRight = styled.div`
    display: flex;
    ${(props) => props.theme.font.subtitle1};
    color: ${(props) => props.theme.colors.font3}; 

    div {
        margin-left: 10px;
    }
`
const StyledGPA = styled.div`
    color: ${(props) => props.theme.colors.fontMain};
`
const StyledReviewInner = styled.div`
    padding-left: 60px;

    div > img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }
`
const StyledDescription = styled.div`
    ${(props) => props.theme.font.description2};
    color: ${(props) => props.theme.colors.font2}; 
    line-height: 20px;
    padding-bottom: 20px;
`
const StyledOwnerReview = styled.div`
    background-color: ${(props) => props.theme.colors.main4};
    padding: 10px;
    margin: 20px 0 20px 60px;
`
const StyledOwnerName = styled.div`
    ${(props) => props.theme.font.subtitle2};
    padding-left: 10px;
`
const StyledOwnerDescription = styled.div`
    ${(props) => props.theme.font.description2};
    padding-left: 40px;
`
