import { ownerReviewInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {OwnerReview} from '../entity/OwnerReview'

/**
 * Loads all posts from the database.
 */
export class OwnerReviewModel{
  
  async findOwnerReviewByReserveId(reserveId:number) {
    const ownerReviewRepository= AppDataSource.getRepository(OwnerReview);
    // get a post repository to perform operations with post
    const ownerReview = await ownerReviewRepository.findOneBy({
      reserveId: reserveId
    })
    return (ownerReview);
  }

  async create(ownerReviewInfo:ownerReviewInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(OwnerReview)
    .values([
        ownerReviewInfo
    ])
    .execute()
  }

  async deleteOwnerReview(reserveId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(OwnerReview)
    .where('reserveId = :reserveId',{reserveId:reserveId})
    .execute()
  }
}

const ownerReviewModel= new OwnerReviewModel();
export{ownerReviewModel};