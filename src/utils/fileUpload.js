// import multer from 'multer';
// import path from 'path'; 
// import fs from 'fs';
// import { fileURLToPath } from 'url';

// const store =multer.diskStorage({
//     destination:(req,res,cb)=>{ cb(null,"./public/profileImage") },
//     filename:(req,file,cb)=>{ cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)) }
// })

// export const upload =multer({
//     storage:store,
//     fileFilter:(req,res,cb)=>{ cb(null,true) }
// })


















// // export const deleteImage = (imagePath) => {
   
// //     const __filename = fileURLToPath(import.meta.url);
// //     const __dirname = path.dirname(__filename);
    
// //     const publicDirectory = path.join(__dirname, '..', '..'); 
// //     console.log(publicDirectory,"dd")
// //     const imageDirectory = path.join(publicDirectory, 'public'); // Adjust the path to your image directory
// //     const fullPath= path.join(imageDirectory, imagePath);
    
// //     fs.unlink(fullPath, (err) => {
// //       if (err) {
// //         console.error("Error deleting the image:", err);
// //         return;
// //       }
// //       console.log("Image deleted successfully");
// //     //   return;
// //     });
// //   };