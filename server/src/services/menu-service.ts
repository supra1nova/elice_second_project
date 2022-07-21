import { MenuModel, menuModel, restaurantModel} from "../db/data-source"
import { menuInfo } from "../routers";

class MenuService {
  menuModel: MenuModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(menuModel:MenuModel) {
    this.menuModel = menuModel;
  }

  // 1. 메뉴 생성
  async addMenu(menuInfo: menuInfo) {
    const newMenu = await this.menuModel.create(menuInfo);
    return newMenu;
  }
  
  // 2. 상호 관련 전체 메뉴 목록 조회
  async getMenus(REGNumber:string){
    const menus= await menuModel.findMenuByREGNumber(REGNumber);
    return menus;
  }
  
  // 3. 메뉴 상세 보기
  async getMenu(menuId:number){
    const menu= await this.menuModel.findMenuByMenuId(menuId);
    if(!menu){
      throw new Error(
        '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return menu;
  }
  
  // 4. 메뉴 업데이트
  async setMenu(menuId:number, menuInfo:menuInfo){
    const updatedMenu =await menuModel.updateMenu(menuId,menuInfo);
    return updatedMenu;
  }
  
  // 5. 메뉴 삭제
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
