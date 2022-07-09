import { categoryInfo } from "../../routers";
import {AppDataSource} from "../data-source"
import {Category} from '../entity/Category'

/**
 * Loads all posts from the database.
 */
export class CategoryModel{
  
  // async findUserbyEmail(email:string) {
  //   const userRepository= AppDataSource.getRepository(Category);
  //   // get a post repository to perform operations with post
  //   const user = await userRepository.findOneBy({
  //   email: email
  // })
  //   return (user);
  // }

  async create(categoryInfo:categoryInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Category)
    .values([
      categoryInfo
    ])
    .execute()
  }

  async deleteCategory(category:string){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Category)
    .where('category = :category',{category:category})
    .execute()
  }
}

const categoryModel= new CategoryModel();
export{categoryModel};