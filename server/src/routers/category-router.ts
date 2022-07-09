import { Router, Request, Response, NextFunction } from 'express';
// import { ownerRequired, loginRequired, adminRequired } from '../middlewares';
import { categoryService } from '../services';
const categoryRouter = Router();


// // 1. 카테고리 생성
// categoryRouter.post('/create', adminRequired, async (req: Request, res:Response, next:NextFunction) => {
categoryRouter.post('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    let categoryInfo:categoryInfo= req.body;
    const newCategory = await categoryService.addCategory(categoryInfo);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

// // 2. 카테고리 목록 조회 (배열 형태로 반환)
// categoryRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const categories = await categoryService.getCategories();
//     res.status(200).json(categories);
//   } catch (error) {
//     next(error);
//   }
// });

// // 3. 카테고리 상세 정보 조회
// categoryRouter.get('/:category', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { category } = req.params;
//     const categoryInfo = await categoryService.findCategory(category);
//     res.status(200).json(categoryInfo);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 카테고리 정보 삭제
categoryRouter.delete('/', async (req, res, next) => {
  try {
    let {category}= req.body;
    const result = await categoryService.removeCategory(category);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface categoryInfo{
  category:string,
  image:string
}
export { categoryRouter };
