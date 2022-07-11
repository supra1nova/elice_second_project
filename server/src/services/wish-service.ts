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
  
  // 2. 상호 관련 전체 메뉴 목록 조회
  async getWishes(email:string){
    const menus= await wishModel.findWishByEmail(email);
    return menus;
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
