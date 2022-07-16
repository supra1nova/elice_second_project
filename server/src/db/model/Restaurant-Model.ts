import { restaurantInfo, updateRestaurantInfo } from "../../routers";
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

  async findRestaurantByOwnerEmail(ownerEmail:string){
    const restaurantRepository= AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.findOneBy({
    ownerEmail: ownerEmail
    })
    return (restaurant);
  }

  async findRestaurantByREGNumber(REGNumber:string) {
    const restaurantRepository= AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.findOneBy({
      REGNumber: REGNumber
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

  async countAll() {
    const restaurantRepository= AppDataSource.getRepository(Restaurant);
    const count = await restaurantRepository.count({
    })
    return count;
  }

  // 4. 특정 범위(페이지) 위치한 제품 정보 조회
  async getInRange(criteria: string, page:number, perPage:number) {
    const restaurantRepository= AppDataSource.getRepository(Restaurant);
    
    if (criteria === 'default') {
      const restaurantsInRange = await restaurantRepository.find({
        order:{
          createdAt:"ASC"
        },
        skip:perPage*(page-1),
        take:perPage
      });
      return restaurantsInRange;
    } 
    else {
      const restaurantsInRange = await restaurantRepository.find({
        order:{
          average: 'DESC',
          createdAt: "ASC"
        },
        skip:perPage*(page-1),
        take:perPage
      });
      return restaurantsInRange;
    }
  }
  
  async updateRestaurant(REGNumber:string, updateRestaurantInfo:updateRestaurantInfo){
    const restaurantRepository=AppDataSource.getRepository(Restaurant)
    const updated= await restaurantRepository.update(REGNumber, updateRestaurantInfo)
    return updated.affected
  }


  // 4. 평점 추가
  async updateWisherNumber(isAddition:boolean, REGNumber: string) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.find({
      where: { REGNumber: REGNumber },
    });
    if (isAddition) {
      restaurant[0].wishers += 1;
    } else {
      restaurant[0].wishers -= 1;
    }
    const ratingUpdatedRestaurant = await restaurantRepository.update(REGNumber, restaurant[0]);
    return ratingUpdatedRestaurant;
  }
}


const restaurantModel= new RestaurantModel();
export{restaurantModel};