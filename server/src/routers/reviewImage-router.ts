import { Router, Request, Response, NextFunction } from 'express';
import { adminRequired } from 'src/middlewares';
// import { ownerRequired, loginRequired, adminRequired } from '../middlewares';
import { reviewImageService} from '../services';
import {upload,s3} from "../config/upload"
// import {uploadProductsImages} from '../config/multipleupload'
const reviewImageRouter = Router();
////////////////////////////////////


// // 1. 카테고리 생성
// reviewImageRouter.post('/create', adminRequired, async (req: Request, res:Response, next:NextFunction) => {
reviewImageRouter.post('/', upload.array('image',6),async (req: Request, res:Response, next:NextFunction)=> {
  try {
    let reviewImageInfo:reviewImageInfo   = req.body;
    if(req.files==undefined) throw new Error("file not retrieved");
    console.log(req.files);
    const files= (req.files  as Express.Multer.File[])
    let reviewArray=[];
    for(let i=0; i<files.length; i++){
    reviewImageInfo.image=(files[i] as any).location;
    reviewImageInfo.imageKey=(files[i] as any).key;
    const newReview = await reviewImageService.addReviewImage(reviewImageInfo);
    reviewArray.push(newReview)
    }
    res.status(201).json(reviewArray);
  } catch (error) {
    next(error);
  }
});

// // 2. 특정 리뷰 사잔 조회
// reviewImageRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
reviewImageRouter.get('/:reserveId', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const reserveId = Number(req.params.reserveId);
    const categories = await reviewImageService.getReviewImages(reserveId);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

//3. 카테고리 수정
// reviewImageRouter.patch('/', adminRequired, async function (req: Request, res:Response, next:NextFunction) {
// reviewImageRouter.patch('/:category', async function (req: Request, res:Response, next:NextFunction) {
//   try {

//     const current_category = req.params.category;
//     const reviewImageInfo  =req.body;

//     // 사용자 정보를 업데이트.
//     const updatedCategory= await reviewImageservice.setCategory(current_category,reviewImageInfo
    
//        );
//     res.status(200).json(updatedCategory);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 리뷰 사진 삭제
reviewImageRouter.delete('/', async (req, res, next) => {
  try {
    let imageKey= (req.body.imageKey);
    const retrieved= await reviewImageService.getReviewImagebyId(imageKey);
    console.log(retrieved);
    if(retrieved==undefined) throw new Error("지우려는 값이 존재하지 않습니다.")
    const result = await reviewImageService.removeReviewImage(imageKey);
    s3.deleteObject({
      Bucket: 'matjip',
      Key: retrieved.imageKey
    },function(err,data){});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface reviewImageInfo{
  reserveId?:number,
  image?:string
  imageKey?:string
}
export { reviewImageRouter };
