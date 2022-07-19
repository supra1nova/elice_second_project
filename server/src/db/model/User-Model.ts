import { PlainObjectToNewEntityTransformer } from "typeorm/query-builder/transformer/PlainObjectToNewEntityTransformer";
import { updateUserInfo, userInfo } from "../../routers";
import {AppDataSource} from "../data-source"
import {User} from '../entity/User'

/**
 * Loads all posts from the database.
 */
export class UserModel{
  
  async findUserbyEmail(email:string) {
    const userRepository= AppDataSource.getRepository(User);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
    email: email
    })
    return (user);
  }
  async findUserbyNickName(nickName:string) {
    const userRepository= AppDataSource.getRepository(User);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
    nickName: nickName
    })
    return (user);
  }

  async create(userInfo:userInfo){
    // const {email, name,password, nickName, phoneNumber,REGNumber}= userInfo;
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        userInfo
    ])
    .execute()
  }
  async deleteUser(email:string){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('email = :email',{email:email})
    .execute()
  }

  async countAll() {
    const userRepository= AppDataSource.getRepository(User);
    const count = await userRepository.count({
    })
    return count;
  }

  // 4. 특정 범위(페이지) 위치한 제품 정보 조회
  async getInRange(page:number, perPage:number) {
    const userRepository= AppDataSource.getRepository(User);

    const usersInRange = await userRepository.find({
      order:{
        createdAt:"ASC"
      },
      skip:perPage*(page-1),
      take:perPage
    });
    return usersInRange;
  }

  async updateUser(userEmail: string, updateUserInfo: updateUserInfo) {
    const userRepository = AppDataSource.getRepository(User)
    const { currentPassword, ...others } = updateUserInfo;
    const updated = await userRepository.update(userEmail, others);
    return updated.affected
  }
}

const userModel= new UserModel();
export{userModel};