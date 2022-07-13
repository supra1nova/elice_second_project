// import multer from 'multer'
// import multerS3 from "multer-s3"
// import aws  from'aws-sdk'
// import {Request, Response} from 'express'
// aws.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region : 'ap-northeast-2'
// });

// const s3= new aws.S3()
// // const s3 = new S3Client({"region":"ap-northeast-2"});//"region":"ap-northeast-2"
  
// const uploadS3 = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'matjip',
//         key: function(req:any, file:any, cb:any) {
//           console.log(file);
//           cb(null, Date.now()+file.originalname)
//         },
//     }),
// }).array('images',6);

// const uploadProductsImages = async (req:Request, res:Response) => {


//   uploadS3(req, res, (error) => {
//       console.log('files', req.files);
//       if (error) {
//           console.log('errors', error);
//           res.status(500).json({
//               status: 'fail',
//               error: error
//           });
//       } else {
//           // If File not found
//           if (req.files === undefined) {
//               console.log('uploadProductsImages Error: No File Selected!');
//               res.status(500).json({
//                   status: 'fail',
//                   message: 'Error: No File Selected'
//               });
//           } else {
//               // If Success
//               let fileArray = req.files,
//                   fileLocation;
//               const images = [];
//               for (let i:number = 0; i < fileArray.length; i++) {
//                   fileLocation = fileArray[i].location;
//                   console.log('filenm', fileLocation);
//                   images.push(fileLocation)
//               }
//               // Save the file name into database
//               return res.status(200).json({
//                   status: 'ok',
//                   filesArray: fileArray,
//                   locationArray: images
//               });

//           }
//       }
//   })
// };
// export {uploadS3,s3,uploadProductsImages}

import multer from 'multer'
import multerS3 from "multer-s3"
import aws  from'aws-sdk'

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region : 'ap-northeast-2'
});

const s3= new aws.S3()
// const s3 = new S3Client({"region":"ap-northeast-2"});//"region":"ap-northeast-2"
  
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'matjip',
        key: function(req:any, file:any, cb:any) {
          console.log(file);
          cb(null, Date.now()+file.originalname)
        },
    }),
});

export {upload,s3}