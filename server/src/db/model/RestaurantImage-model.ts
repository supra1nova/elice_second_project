import { restaurantImageInfo } from "../../routers";
import {AppDataSource} from "../data-source"
import {RestaurantImage} from '../entity/RestaurantImage'

/**
 * Loads all posts from the database.
 */
export class RestaurantImageModel{
  
  async findRestaruantImagebyId(imageKey:string) {
    const userRepository= AppDataSource.getRepository(RestaurantImage);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
      imageKey: imageKey
  })
    return (user);
  }

  async create(restaurantImageInfo:restaurantImageInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(RestaurantImage)
    .values([
      restaurantImageInfo
    ])
    .execute()
  }

  async deleteRestaurantImage(imageKey:string){
    const deleted =await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(RestaurantImage)
    .where('imageKey = :imageKey',{imageKey:imageKey})
    .execute()

    return deleted
  }

  async findRestaurantImage( ){
    const categoryRepository= AppDataSource.getRepository(RestaurantImage)
    const categories= await categoryRepository.find()
    
    return categories
  }
  async updateCategory(current_category:string, restaurantImageInfo:restaurantImageInfo){
    await AppDataSource
      .createQueryBuilder()
      .update(RestaurantImage)
      .set(restaurantImageInfo)
      .where("category = :category", { category: current_category })
      .execute()
  }
}

const restaurantImageModel= new RestaurantImageModel();
export{restaurantImageModel};