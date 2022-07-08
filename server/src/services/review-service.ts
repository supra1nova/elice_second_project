import { ReviewModel, reviewModel} from "../db/data-source"
import { reviewInfo } from "src/routers";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class ReviewService {
  reviewModel: ReviewModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(reviewModel:ReviewModel) {
    this.reviewModel = reviewModel;
  }

  // 1. 생성
  async addReview(reviewInfo:reviewInfo) {
    const newReviewInfo:reviewInfo = reviewInfo;
    const createdNewReview = await this.reviewModel.create(newReviewInfo);
    return createdNewReview;
  }

  // 1. 생성
  async addOwnerReview(reserveId:number, ownerComment:string) {
    const createdNewReview = await this.reviewModel.reply(reserveId, ownerComment);
    return createdNewReview;
  }

  // 2. 삭제
  async removeReview(reviewInfo:reviewInfo){
    const {reserveId}= reviewInfo;
    let review = await this.reviewModel.findReviewByReserveId(reserveId);
    if (review == null) {
      throw new Error('존재하지 않는 리뷰입니다.')
    };
    try{
      await this.reviewModel.deleteReview( reserveId );
    }
    catch(error) {
      throw new Error(
        '삭제에 실패했습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return review;

  }
}

const reviewService = new ReviewService(reviewModel);

export { reviewService };
