import { WishModel, wishModel, restaurantModel} from "../db/data-source"

class WishService {
  wishModel: WishModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(wishModel:WishModel) {
    this.wishModel = wishModel;
  }

  // 1. 찜 생성 - 사용자 찜 추가(return 값으로 찜한 전체 인원수 반환)
  async addWish(email:string, REGNumber:string) {
    await this.wishModel.create(email, REGNumber);
    await restaurantModel.updateWisherNumber(true, REGNumber);
    const restaurant = await restaurantModel.findRestaurantByREGNumber(REGNumber);
    const wishersNumber = restaurant?.wishers;
    return wishersNumber;
  }
  
  // 2. 특정 상호 관련 찜한 손님 전체 조회 - 이메일 기준
  async getWishesByEmail(email:string){
  // async getWishesByEmail(criteria: string, email:string){
    const menus= await wishModel.findWishByEmail(email);
    // const menus= await wishModel.findWishByEmail(criteria, email);
    return menus;
  }

  // 3. 특정 상호 관련 찜한 손님 전체 조회 - 상호 기준
  async getWishesByREGNumber(REGNumber:string){
    const wishes = await wishModel.findWishByREGNumber(REGNumber);
    return wishes;
  }
    
  // 4. 찜 삭제 - 사용자 찜 삭제(return 값으로 찜한 전체 인원수 반환)
  async removeWish(email: string, REGNumber:string) {
    await this.wishModel.deleteWish(email, REGNumber);
    await restaurantModel.updateWisherNumber(false, REGNumber);
    const restaurant = await restaurantModel.findRestaurantByREGNumber(REGNumber);
    const wishersNumber = restaurant?.wishers;
    console.log(wishersNumber);
    return wishersNumber;
  }
  
}

const wishService = new WishService(wishModel);

export { wishService };
