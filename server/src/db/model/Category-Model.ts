import { categoryInfo } from '../../routers';
import { AppDataSource } from '../data-source';
import { Category } from '../entity/Category';

/**
 * Loads all posts from the database.
 */
export class CategoryModel {
  async findCategoryByCategory(category: string) {
    const userRepository = AppDataSource.getRepository(Category);
    // get a post repository to perform operations with post
    const user = await userRepository.findOneBy({
      category: category,
    });
    return user;
  }

  async create(categoryInfo: categoryInfo) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Category)
      .values([categoryInfo])
      .execute();
  }

  async deleteCategory(category: string) {
    const deleted = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Category)
      .where('category = :category', { category: category })
      .execute();

    return deleted;
  }

  async findCategory() {
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories = await categoryRepository.find();

    return categories;
  }
  async updateCategory(current_category: string, categoryInfo: categoryInfo) {
    await AppDataSource.createQueryBuilder()
      .update(Category)
      .set(categoryInfo)
      .where('category = :category', { category: current_category })
      .execute();
  }
}

const categoryModel = new CategoryModel();
export { categoryModel };
