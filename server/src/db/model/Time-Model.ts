// import { timeInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Time} from '../entity/Time'
import { timeInfo } from "../../routers";
/**
 * Loads all posts from the database.
 */
export class TimeModel{
  
  async findTimeByTimeId(timeId:number) {
    const timeRepository= AppDataSource.getRepository(Time);
    // get a post repository to perform operations with post
    const time = await timeRepository.findOneBy({
      timeId: timeId
    })
    
    return (time);
  }

  async create(timeInfo:timeInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Time)
    .values([
      timeInfo,
    ])
    .execute()
  }

  async updateRemainder(timeId:number, remainder:number){
    await AppDataSource
      .createQueryBuilder()
      .update(Time)
      .set({ remainder: remainder})
      .where("timeId = :timeId", { timeId: timeId })
      .execute()
  }

  async deleteTime(timeId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Time)
    .where('timeId = :timeId',{timeId:timeId})
    .execute()
  }
}

const timeModel= new TimeModel();
export{timeModel};