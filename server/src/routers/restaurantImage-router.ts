import { Router, Request, Response, NextFunction } from 'express';
import { adminRequired } from 'src/middlewares';
// import { ownerRequired, loginRequired, adminRequired } from '../middlewares';
import { restaurantImageService} from '../services';
import {upload,s3} from "../config/upload"
// import {uploadProductsImages} from '../config/multipleupload'
const restaurantImageRouter = Router();
////////////////////////////////////

////////////////////////////////////

// // 1. 카테고리 생성
// restaurantImageRouter.post('/create', adminRequired, async (req: Request, res:Response, next:NextFunction) => {
restaurantImageRouter.post('/', upload.array('image',6),async (req: Request, res:Response, next:NextFunction)=> {
  try {
    let restaurantImageInfo:restaurantImageInfo = req.body;
    if(req.files==undefined) throw new Error("file not retrieved");
    console.log(req.files);
    const files= (req.files  as Express.Multer.File[])
    let categoryArray=[];
    for(let i=0; i<files.length; i++){
    restaurantImageInfo.image=(files[i] as any).location;
    restaurantImageInfo.imageKey=(files[i] as any).key;
    const newCategory = await restaurantImageService.addRestaurantImage(restaurantImageInfo);
      categoryArray.push(newCategory)
    }
    res.status(201).json(categoryArray);
  } catch (error) {
    next(error);
  }
});

// // 2. 카테고리 목록 조회 (배열 형태로 반환)
// restaurantImageRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
restaurantImageRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const categories = await restaurantImageService.getRestaurantImages();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

//3. 카테고리 수정
// restaurantImageRouter.patch('/', adminRequired, async function (req: Request, res:Response, next:NextFunction) {
restaurantImageRouter.patch('/:category', async function (req: Request, res:Response, next:NextFunction) {
  try {

    const current_category = req.params.category;
    const restaurantImageInfo=req.body;

    // 사용자 정보를 업데이트.
    const updatedCategory= await restaurantImageService.setCategory(current_category,restaurantImageInfo
       );
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

// // 4. 카테고리 정보 삭제
restaurantImageRouter.delete('/', async (req, res, next) => {
  try {
    let imageKey= (req.body.imageKey);
    const retrieved= await restaurantImageService.getRestaurantImageByresImgID(imageKey);
    if(retrieved==undefined) throw new Error("지우려는 값이 존재하지 않습니다.")
    const result = await restaurantImageService.removeRestaurantImage(imageKey);
    s3.deleteObject({
      Bucket: 'matjip',
      Key: retrieved.imageKey
    },function(err,data){});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface restaurantImageInfo{
  REGNumber?:string,
  image?:string
  imageKey?:string
}
export { restaurantImageRouter };
