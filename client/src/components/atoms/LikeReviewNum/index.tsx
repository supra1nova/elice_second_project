import * as Icon from '../../../assets/svg';
import styled from 'styled-components';

interface CommentListsProps {
    likeNum: number,
    reviewNum: number,
}

const LikeReviewNum = ({
    likeNum,
    reviewNum
}: CommentListsProps) => {
    return (
        <StyledLikeReview>
            <Icon.Heart fill={'#A6A8A3'}/>
            <div>{likeNum}</div>
            <Icon.Review />
            <div>{reviewNum}</div>
        </StyledLikeReview>
    )
}

export default LikeReviewNum;

const StyledLikeReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        ${(props) => props.theme.font.caption};
        color: ${(props) => props.theme.colors.font3};
        padding: 0 10px 0 5px;
    }
`