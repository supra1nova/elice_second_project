import * as Icon from '../../../assets/svg';
import * as UI from './style';
interface CommentListsProps {
    likeNum: number,
    reviewNum: number,
}

const LikeReviewNum = ({
    likeNum,
    reviewNum
}: CommentListsProps) => {
    return (
        <UI.StyledLikeReview>
            <Icon.Heart fill={'#A6A8A3'}/>
            <div>{likeNum}</div>
            <Icon.Review />
            <div>{reviewNum}</div>
        </UI.StyledLikeReview>
    )
}

export default LikeReviewNum;