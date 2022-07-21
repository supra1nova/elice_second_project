import { restaurantInfo, updateRestaurantInfo } from '../routers';
import { RestaurantModel,restaurantModel } from '../db/data-source';


class RestaurantService {
  restaurantModel: RestaurantModel
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(restaurantModel:RestaurantModel) {
    this.restaurantModel = restaurantModel;
  }
  //구현필요
  

  async getRestaurant(REGNumber:string){
    const restaurant= await this.restaurantModel.findRestaurantByREGNumber(REGNumber);
    if(!restaurant){
      throw new Error(
        '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return restaurant;
  }

  async getRestaurantByEmail(email: string) {
    const restaurant= await this.restaurantModel.findRestaurantByOwnerEmail(email);
    if(!restaurant){
      throw new Error(
        '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return restaurant;
  }

  async addRestaurant (restaurantInfo:restaurantInfo){
    const createdproduct = await this.restaurantModel.create(restaurantInfo);
    return createdproduct;
  }

  async removeRestaurant (REGNumber:string, email:string){

    const restaurant = await restaurantModel.findRestaurantByOwnerEmail(email);

    let a: string | undefined = restaurant?.REGNumber
    console.log(restaurant);
    if(a===undefined) throw new Error("권한이 없습니다") // 자기소유의 restaurant없음
    else if (a !== REGNumber) { 
      console.log(a);
      console.log(REGNumber);
      throw new Error("권한이 없슴");
    } else {
      const deletedRestaurant= await this.restaurantModel.deleteRestaurant(REGNumber);
      return deletedRestaurant;
    }
  }
  
  async countRestaurants() {
    const userCount = await this.restaurantModel.countAll();
    return userCount;
  }

  // 4. 특정 범위(페이지) 위치한 제품 정보 조회
  async getRangedRestaurants(criteria: string, page:number,perPage:number) {
    const rangedProductsInfo = await this.restaurantModel.getInRange(criteria, page, perPage);
    return rangedProductsInfo;
  }

  async setRestaurant(REGNumber:string,updateRestaurantInfo:updateRestaurantInfo) {
    const updatedRestaurant = await this.restaurantModel.updateRestaurant(REGNumber,updateRestaurantInfo);
    return updatedRestaurant;
  }
}



const restaurantService = new RestaurantService(restaurantModel);

export { restaurantService };
