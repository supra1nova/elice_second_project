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

  // async reply(menuId:number, ownerComment:string){
  //   await AppDataSource
  //     .createQueryBuilder()
  //     .update(Menu)
  //     .set({ ownerComment: ownerComment})
  //     .where("menuId = :menuId", { menuId: menuId })
  //     .execute()
  // }

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