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
          // console.log(file);
          cb(null, Date.now()+file.originalname)
        },
    }),
});

export {upload,s3}