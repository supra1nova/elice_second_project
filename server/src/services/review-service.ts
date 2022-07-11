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

  // 1-1. 유저 리뷰 생성
  async addReview(reviewInfo:reviewInfo) {
    const newReviewInfo:reviewInfo = reviewInfo;
    const createdNewReview = await this.reviewModel.create(newReviewInfo);
    return createdNewReview;
  }

  // 1-2. 업주 리뷰 생성
  async addOwnerReview(reserveId:number, ownerComment:string) {
    const createdNewReview = await this.reviewModel.reply(reserveId, ownerComment);
    return createdNewReview;
  }

  // 전체 리뷰 숫자 카운트
  async countReviews() {
    const reviewsNumber = await this.reviewModel.countAll();
    return reviewsNumber;
  }

  // 특정 업체 리뷰 숫자 카운트
  async countReviewsByREGNumber(REGNumber: string) {
    const reviewsNumber = await this.reviewModel.countAllByREGNumber(REGNumber);
    return reviewsNumber;
  }
  
  // 4-1. 특정 범위(페이지) 위치한 리뷰 조회
  async getRangedReviewsByREGNumber(REGNumber:string, page:number,perPage:number) {
    const rangedReviewsInfo = await this.reviewModel.getInRangeByREGNumber(REGNumber, page, perPage);
    return rangedReviewsInfo;
  }

  // 4-2. 특정 범위(페이지) 위치한 리뷰 조회
  async getRangedReviews(page:number,perPage:number) {
    const rangedReviewsInfo = await this.reviewModel.getInRange(page, perPage);
    return rangedReviewsInfo;
  }
  
  // 5. 특정 리뷰 조회
  async findReview(reserveId: number) {
    const rangedReviewsInfo = await this.reviewModel.findReviewByReserveId(reserveId);
    return rangedReviewsInfo;
  }

  // 3. 삭제
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
