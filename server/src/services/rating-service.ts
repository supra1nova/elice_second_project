import { RatingModel, ratingModel} from "../db/data-source"
import { ratingInfo } from "src/routers";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class RatingService {
  ratingModel: RatingModel
  // 본 파일의 맨 아래에서, new ReviewService(ratingModel) 하면, 이 함수의 인자로 전달됨
  constructor(ratingModel:RatingModel) {
    this.ratingModel = ratingModel;
  }
  
  // 1. 별점 생성(초깃값 세팅)
  async addRating(ratingInfo: ratingInfo) {
    const createdRating = await this.ratingModel.create(ratingInfo);
    return createdRating;
  }
  
// 2. 특정 상호 별점 전체 조회 - 사업자 등록번호 기준
  async getRatingsByREGNumber(REGNumber: string) {
    const ratingInfo = await this.ratingModel.findRatingsByREGNumber(REGNumber);
    return ratingInfo;
  }


  // 3. 삭제
  async removeRating(ratingInfo:ratingInfo){
    const { REGNumber }= ratingInfo;
    let rating = await this.ratingModel.findRatingsByREGNumber(REGNumber);
    if (rating == null) {
      throw new Error('존재하지 않는 리뷰입니다.')
    };
    try{
      await this.ratingModel.deleteRating( REGNumber );
    }
    catch(error) {
      throw new Error(
        '삭제에 실패했습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return rating;
  }

  // // 전체 리뷰 숫자 카운트
  // async countReviews() {
  //   const reviewsNumber = await this.ratingModel.countAll();
  //   return reviewsNumber;
  // }
  
  // // 특정 업체 리뷰 숫자 카운트
  // async countReviewsByREGNumber(REGNumber: string) {
  //   const reviewsNumber = await this.ratingModel.countAllByREGNumber(REGNumber);
  //   return reviewsNumber;
  // }
  
  // // 4-1. 특정 범위(페이지) 위치한 리뷰 조회
  // async getRangedReviewsByREGNumber(REGNumber:string, page:number,perPage:number) {
  //   const rangedReviewsInfo = await this.ratingModel.getInRangeByREGNumber(REGNumber, page, perPage);
  //   return rangedReviewsInfo;
  // }

  // // 4-2. 특정 범위(페이지) 위치한 리뷰 조회
  // async getRangedReviews(page:number,perPage:number) {
  //   const rangedReviewsInfo = await this.ratingModel.getInRange(page, perPage);
  //   return rangedReviewsInfo;
  // }

}

const ratingService = new RatingService(ratingModel);

export { ratingService };
