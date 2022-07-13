import { WishModel, wishModel, restaurantModel} from "../db/data-source"

class WishService {
  wishModel: WishModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(wishModel:WishModel) {
    this.wishModel = wishModel;
  }

  // 1. 메뉴 생성
  async addWish(email:string, REGNumber:string) {
    const createdNewReserve = await this.wishModel.create(email,REGNumber);
    return createdNewReserve;
  }
  
  // 2. 특정 상호 관련 찜한 손님 전체 조회 - 이메일 기준
  async getWishesByEmail(email:string){
    const menus= await wishModel.findWishByEmail(email);
    return menus;
  }

  // 3. 특정 상호 관련 찜한 손님 전체 조회 - 상호 기준
  async getWishesByREGNumber(REGNumber:string){
    const wishes = await wishModel.findWishByREGNumber(REGNumber);
    return wishes;
  }
  
  // 3. 메뉴 상세 보기

  

  
  // 5. 메뉴 삭제
  async removeWish(wishId:number) {

        const deletedMenu = await this.wishModel.deleteWish(wishId);
        return deletedMenu;
        }
      
    
  
}

const wishService = new WishService(wishModel);

export { wishService };
