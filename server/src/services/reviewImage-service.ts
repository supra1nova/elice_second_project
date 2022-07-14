import { ReviewImageModel, reviewImageModel} from "../db/data-source"
import { restaurantImageInfo } from "../routers";

class ReviewImageService {
  reviewImageModel: ReviewImageModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(reviewImageModel:ReviewImageModel) {
    this.reviewImageModel = reviewImageModel;
  }

  // 1. 생성
  async addRestaurantImage(restaurantImageInfo:restaurantImageInfo) {
        const createdNewCategory = await this.reviewImageModel.create(restaurantImageInfo);
        return createdNewCategory;
      }
    
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.

  async getRestaurantImages(REGNumber:string){
    const retrievedCategory= await this.reviewImageModel.findRestaurantImage(REGNumber);
    return retrievedCategory
  }

  async getRestaurantImageByresImgID(imageKey:string){
    const retrievedCategory= await this.reviewImageModel.findRestaruantImagebyId(imageKey);
    return retrievedCategory
  }

  // 2. 삭제
  async removeRestaurantImage(imageKey:string) {

        const deletedCategory = await this.reviewImageModel.deleteRestaurantImage(imageKey);
        return deletedCategory;
  }

  async setCategory(current_category:string, restaurantImageInfo:restaurantImageInfo) {

    const deletedCategory = await this.reviewImageModel.updateCategory(current_category,restaurantImageInfo);
    return deletedCategory;
}
}

const reviewImageService = new ReviewImageService(reviewImageModel);

export { reviewImageService };
