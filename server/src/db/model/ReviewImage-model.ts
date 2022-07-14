import { reviewImageInfo } from "../../routers";
import {AppDataSource} from "../data-source"
import {ReviewImage} from '../entity/ReviewImage'

/**
 * Loads all posts from the database.
 */
export class ReviewImageModel{
  
  async findReviewImagebyId(imageKey:string) {
    const userRepository= AppDataSource.getRepository(ReviewImage);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
      imageKey: imageKey
  })
    return (user);
  }

  async create(reviewImageInfo:reviewImageInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(ReviewImage)
    .values([
      reviewImageInfo
    ])
    .execute()
  }

  async deleteReviewImage(imageKey:string){
    const deleted =await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(ReviewImage)
    .where('imageKey = :imageKey',{imageKey:imageKey})
    .execute()

    return deleted
  }

  async findReviewImage(reserveId:number ){
    const categoryRepository= AppDataSource.getRepository(ReviewImage)
    const categories= await categoryRepository.find({
      where:{
        reserveId:reserveId
    }})
    return categories    
  }

}

const reviewImageModel= new ReviewImageModel();
export{reviewImageModel};