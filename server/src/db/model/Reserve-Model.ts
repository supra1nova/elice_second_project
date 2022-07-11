import {AppDataSource} from "../data-source"
import {Reserve} from '../entity/Reserve'
import { reserveInfo } from "src/routers/reserve-Router";
/**
 * Loads all posts from the database.
 */
export class ReserveModel{
  
  async create(reserveInfo:reserveInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Reserve)
    .values([
      reserveInfo
    ])
    .execute()
  }
  
  async findReserveByReserveId(reserveId:number) {
    const reserveRepository= AppDataSource.getRepository(Reserve);
    // get a post repository to perform operations with post
    const reserve = await reserveRepository.findOneBy({
      reserveId: reserveId
    })
    return (reserve);
  }

  async countAll() {
    const reserveRepository= AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({
    })
    return reservesNumber;
  }
  
  async getInRange(page:number, perPage:number) {
    const reserveRepository= AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      order:{
        createdAt:"ASC"
      },
      skip:perPage*(page-1),
      take:perPage
    });
    return reservesInRange;
  }
  
  async countAllByEmail(email: string) {
    const reserveRepository= AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({
      where: { email:email }
    })
    return reservesNumber;
  }
  
  async getInRangeByEmail(email:string, page:number, perPage:number) {
    const reserveRepository= AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      where: { email:email },
      order:{
        createdAt:"ASC"
      },
      skip:perPage*(page-1),
      take:perPage
    });
    return reservesInRange;
  }

  async countAllByREGNumber(REGNumber: string) {
    const reserveRepository= AppDataSource.getRepository(Reserve);
    const reservesNumber = await reserveRepository.count({
      where: { REGNumber:REGNumber }
    })
    return reservesNumber;
  }
  
  async getInRangeByREGNumber(REGNumber:string, page:number, perPage:number) {
    const reserveRepository= AppDataSource.getRepository(Reserve);

    const reservesInRange = await reserveRepository.find({
      where: { REGNumber:REGNumber },
      order:{
        createdAt:"ASC"
      },
      skip:perPage*(page-1),
      take:perPage
    });
    return reservesInRange;
  }

  // async reply(reserveId:number, ownerComment:string){
  //   await AppDataSource
  //     .createQueryBuilder()
  //     .update(Review)
  //     .set({ ownerComment: ownerComment})
  //     .where("reserveId = :reserveId", { reserveId: reserveId })
  //     .execute()
  // }

  async deleteReserve(reserveId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Reserve)
    .where('reserveId = :reserveId',{reserveId:reserveId})
    .execute()
  }
}

const reserveModel= new ReserveModel();
export{reserveModel};