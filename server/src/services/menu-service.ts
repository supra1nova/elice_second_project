import { MenuModel, menuModel, restaurantModel} from "../db/data-source"
import { menuInfo } from "../routers";

class MenuService {
  menuModel: MenuModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(menuModel:MenuModel) {
    this.menuModel = menuModel;
  }

  // 1. 생성
  async addMenu(menuInfo:menuInfo) {
        const createdNewReserve = await this.menuModel.create(menuInfo);
        return createdNewReserve;
      }
    
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.

  


  // 2. 삭제
  async removeMenu(menuId:number, email:string) {

    const restaurant = await restaurantModel.findRestaurantByOwnerEmail(email);
    const menu= await this.menuModel.findMenuByMenuId(menuId);
    let a:string|undefined = restaurant?.REGNumber
    let b:string|undefined= menu?.REGNumber;
    if(b===undefined) throw new Error("해당 메뉴가 없습니다")
    else{ 
      if(a===undefined) throw new Error("Restaurant not found");
      else{
        if(a!==b) throw new Error("메뉴를 삭제할 권한이 없습니다.");
        else{        
        const deletedMenu = await this.menuModel.deleteMenu(menuId);
        return deletedMenu;
        }
      }
    }
  }
}

const menuService = new MenuService(menuModel);

export { menuService };
