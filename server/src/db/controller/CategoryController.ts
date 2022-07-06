import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Category} from "../entity/index";

/**
 * Loads all posts from the database.
 */
export class CategoryController{
  async postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const CategoryRepository = getManager().getRepository(Category);

    // load posts
    const posts = await CategoryRepository.find();

    // return loaded posts
    response.send(posts);
  }

}

const categoryController= new CategoryController();
export{categoryController};