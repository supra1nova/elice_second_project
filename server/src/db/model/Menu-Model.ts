import { reviewInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Menu} from '../entity/Menu'
import {menuInfo} from '../../routers'
/**
 * Loads all posts from the database.
 */
export class MenuModel{
  
  // 1. 메뉴 생성
  async create(menuInfo:menuInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Menu)
    .values([
      menuInfo,
    ])
    .execute()
  }
  
  // 2. 특정 상호 관련 전체 메뉴 조회
  async findMenuByREGNumber(REGNumber: string) {
    const reviewRepository= AppDataSource.getRepository(Menu);
    // get a post repository to perform operations with post
    const review = await reviewRepository.find({
      where: {REGNumber: REGNumber}
    })
    return (review);
  }

  // 3. 메뉴 상세 보기
  async findMenuByMenuId(menuId: number) {
    const reviewRepository= AppDataSource.getRepository(Menu);
    // get a post repository to perform operations with post
    const review = await reviewRepository.findOneBy({
      menuId: menuId
    })
    return (review);
  }

  // 4. 메뉴 업데이트
  async updateMenu(menuId:number, menuInfo:menuInfo){
    await AppDataSource
      .createQueryBuilder()
      .update(Menu)
      .set(menuInfo)
      .where("menuId = :menuId", { menuId: menuId })
      .execute()
  }

  // 5. 메뉴 삭제
  async deleteMenu(menuId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Menu)
    .where('menuId = :menuId',{menuId:menuId})
    .execute()
  }
}

const menuModel= new MenuModel();
export{menuModel};