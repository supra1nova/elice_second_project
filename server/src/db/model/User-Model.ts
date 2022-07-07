import { userInfo } from "src/routers";
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
}

const userModel= new UserModel();
export{userModel};