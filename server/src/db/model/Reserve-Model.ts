import {AppDataSource} from "../data-source"
import {Reserve} from '../entity/Reserve'
import { reserveInfo } from "src/routers/reserve-Router";
/**
 * Loads all posts from the database.
 */
export class ReserveModel{
  
  async findReserveByReserveId(reserveId:number) {
    const reserveRepository= AppDataSource.getRepository(Reserve);
    // get a post repository to perform operations with post
    const reserve = await reserveRepository.findOneBy({
      reserveId: reserveId
    })
    return (reserve);
  }

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