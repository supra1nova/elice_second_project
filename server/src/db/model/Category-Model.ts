import {AppDataSource} from "../data-source"
import {User} from '../entity/User'

/**
 * Loads all posts from the database.
 */
export class CategoryModel{
  
  async findUserbyEmail(email:string) {
    const userRepository= AppDataSource.getRepository(User);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
    email: email
  })
    return (user);
  }

}

const categoryModel= new CategoryModel();
export{categoryModel};