import { restaurantInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Restaurant} from '../entity'

/**
 * Loads all posts from the database.
 */
export class RestaurantModel{
  
  async findRestaurantbyEmail(email:string) {
    const restaurantRepository= AppDataSource.getRepository(Restaurant);
    // get a post repository to perform operations with post
    const restaurant = await restaurantRepository.findOneBy({
    // email: email
    })
    return (restaurant);
  }
  async findRestaurantbyNickName(nickName:string) {
    const userRepository= AppDataSource.getRepository(Restaurant);
    // get a post repository to perform operations with post
    const restaurant = await userRepository.findOneBy({
    // nickName: nickName
    })
    return (restaurant);
  }

  async create(restaurantInfo:restaurantInfo){
    // const {email, name,password, nickName, phoneNumber,REGNumber}= userInfo;
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Restaurant)
    .values([
      restaurantInfo
    ])
    .execute()
  }
  async deleteRestaurant(REGNumber:string){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Restaurant)
    .where('REGNumber = :REGNumber',{REGNumber:REGNumber})
    .execute()
  }
}

const restaurantModel= new RestaurantModel();
export{restaurantModel};