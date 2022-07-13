import { RestaurantImageModel, restaurantImageModel} from "../db/data-source"
import { restaurantImageInfo } from "../routers";

class RestaurantImageService {
  restaurantImageModel: RestaurantImageModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(restaurantImageModel:RestaurantImageModel) {
    this.restaurantImageModel = restaurantImageModel;
  }

  // 1. 생성
  async addRestaurantImage(restaurantImageInfo:restaurantImageInfo) {
        const createdNewCategory = await this.restaurantImageModel.create(restaurantImageInfo);
        return createdNewCategory;
      }
    
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.

  async getRestaurantImages(REGNumber:string){
    const retrievedCategory= await this.restaurantImageModel.findRestaurantImage(REGNumber);
    return retrievedCategory
  }

  async getRestaurantImageByresImgID(imageKey:string){
    const retrievedCategory= await this.restaurantImageModel.findRestaruantImagebyId(imageKey);
    return retrievedCategory
  }

  // 2. 삭제
  async removeRestaurantImage(imageKey:string) {

        const deletedCategory = await this.restaurantImageModel.deleteRestaurantImage(imageKey);
        return deletedCategory;
  }

  async setCategory(current_category:string, restaurantImageInfo:restaurantImageInfo) {

    const deletedCategory = await this.restaurantImageModel.updateCategory(current_category,restaurantImageInfo);
    return deletedCategory;
}
}

const restaurantImageService = new RestaurantImageService(restaurantImageModel);

export { restaurantImageService };
