import { reviewInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Menu} from '../entity/Menu'
import {menuInfo} from '../../routers'
/**
 * Loads all posts from the database.
 */
export class MenuModel{
  
  async findMenuByMenuId(menuId:number) {
    const reviewRepository= AppDataSource.getRepository(Menu);
    // get a post repository to perform operations with post
    const review = await reviewRepository.findOneBy({
      menuId: menuId
    })
    return (review);
  }

  async findMenuByREGNumber(REGNumber:string) {
    const reviewRepository= AppDataSource.getRepository(Menu);
    // get a post repository to perform operations with post
    const review = await reviewRepository.find({
      where: {REGNumber: REGNumber}
    })
    return (review);
  }

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

  async updateMenu(menuId:number, menuInfo:menuInfo){
    await AppDataSource
      .createQueryBuilder()
      .update(Menu)
      .set(menuInfo)
      .where("menuId = :menuId", { menuId: menuId })
      .execute()
  }

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