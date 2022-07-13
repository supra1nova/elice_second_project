import { Router, Request, Response, NextFunction } from 'express';
import { adminRequired } from 'src/middlewares';
// import { ownerRequired, loginRequired, adminRequired } from '../middlewares';
import { categoryService} from '../services';
import { S3Client } from "@aws-sdk/client-s3";
import {upload,s3} from "../config/upload"
const categoryRouter = Router();
////////////////////////////////////

////////////////////////////////////

// // 1. 카테고리 생성
// categoryRouter.post('/create', adminRequired, async (req: Request, res:Response, next:NextFunction) => {
categoryRouter.post('/', upload.single('image'),async (req: Request, res:Response, next:NextFunction)=> {
  try {
    let categoryInfo:categoryInfo= req.body;
    if(req.file==undefined) throw new Error("file not retrieved");
    categoryInfo.image=(req.file as any).location;
    categoryInfo.imageKey=(req.file as any).key;
    const newCategory = await categoryService.addCategory(categoryInfo);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

// // 2. 카테고리 목록 조회 (배열 형태로 반환)
// categoryRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
categoryRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

//3. 카테고리 수정
// categoryRouter.patch('/', adminRequired, async function (req: Request, res:Response, next:NextFunction) {
categoryRouter.patch('/:category', async function (req: Request, res:Response, next:NextFunction) {
  try {

    const current_category = req.params.category;
    const categoryInfo=req.body;

    // 사용자 정보를 업데이트.
    const updatedCategory= await categoryService.setCategory(current_category,categoryInfo );
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

// // 4. 카테고리 정보 삭제
categoryRouter.delete('/', async (req, res, next) => {
  try {
    let {category}= req.body;
    const retrieved= await categoryService.getCategoryByCategory(category);
    if(retrieved==undefined) throw new Error("지우려는 값이 존재하지 않습니다.")
    const result = await categoryService.removeCategory(category);
    s3.deleteObject({
      Bucket: 'matjip',
      Key: retrieved.imageKey
    },function(err,data){});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface categoryInfo{
  category?:string,
  image?:string
  imageKey?:string
}
export { categoryRouter };
