import {AppDataSource} from "../data-source"
import {Wish} from '../entity/Wish'
/**
 * Loads all posts from the database.
 */
export class WishModel{
  
  // 1. 찜 생성
  async create(email:string ,REGNumber:string){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Wish)
    .values(
      {REGNumber:REGNumber,
      email:email}
    )
    .execute()
  }
  
  // 2. 특정 상호 관련 찜한 손님 전체 조회 - 이메일 기준
  async findWishByEmail(email: string) {
  // async findWishByEmail(criteria:string, email: string) {
    const wishRepository= AppDataSource.getRepository(Wish);
    // get a post repository to perform operations with post
    // if (criteria === 'default') {
      const wishers = await wishRepository.find({
        where: {email: email},
        order: {
          createdAt: "DESC"
        }
      });
      return (wishers);
    // } 
    // else {
    //   const wishers = await wishRepository.find({
    //     where: {email: email},
    //     order:{
    //       createdAt: "ASC"
    //     },
    //   });
    //   return (wishers);
    // }
  }

  // 3. 특정 상호 관련 찜한 손님 전체 조회 - 상호 기준
  async findWishByREGNumber(REGNumber: string) {
    const wishRepository= AppDataSource.getRepository(Wish);
    // get a post repository to perform operations with post
    const wishes = await wishRepository.find({
      where: {REGNumber: REGNumber}
    })
    return (wishes);
  }

  // 5. 찜 삭제
  async deleteWish(wishId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Wish)
    .where('wishId = :wishId',{wishId:wishId})
    .execute()
  }
}

const wishModel= new WishModel();
export{wishModel};