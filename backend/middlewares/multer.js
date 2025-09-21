import multer from 'multer'
// ab disk storage configuration add krenge
const storage=multer.diskStorage({   
filename:function(req,file,callback){
    callback(null,file.originalname)
}
})

//    instance of the this multer using diska storage
const upload=multer({storage})
export default upload