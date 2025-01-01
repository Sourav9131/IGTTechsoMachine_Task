import mongoose from "mongoose";


const pdfSchema =mongoose.Schema({

    pdf:{
        type:String
    },
    

    createdAt:{
        type:Date,
       default:Date.now()
    }
})


const pdfModel = mongoose.model("pdf",pdfSchema);

export default pdfModel;