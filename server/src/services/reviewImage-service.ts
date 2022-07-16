import { ReviewImageModel, reviewImageModel} from "../db/data-source"
import { reviewImageInfo } from "../routers";

class ReviewImageService {
  reviewImageModel: ReviewImageModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(reviewImageModel:ReviewImageModel) {
    this.reviewImageModel = reviewImageModel;
  }

  // 1. 생성
  async addReviewImage(reviewImageInfo:reviewImageInfo) {
        const createdNewCategory = await this.reviewImageModel.create(reviewImageInfo);
        return createdNewCategory;
      }
    
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.

  async getReviewImages(reserveId:number){
    const retrievedCategory= await this.reviewImageModel.findReviewImage(reserveId);
    return retrievedCategory
  }

  async getReviewImagebyId(imageKey:string){
    const retrievedCategory= await this.reviewImageModel.findReviewImagebyId(imageKey);
    return retrievedCategory
  }

  // 2. 삭제
  async removeReviewImage(imageKey:string) {

        const deletedCategory = await this.reviewImageModel.deleteReviewImage(imageKey);
        return deletedCategory;
  }

}

const reviewImageService = new ReviewImageService(reviewImageModel);

export { reviewImageService };
