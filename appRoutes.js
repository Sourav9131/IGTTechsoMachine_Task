import express from 'express';
import pdfGenerateRoutes from './src/modules/userManagement/pdfManagement/pdfGenerateRoutes.js'; 

const appRoutes = express.Router();

//----------------- Generate PDF ---------------------------//
appRoutes.use("/api/v1", pdfGenerateRoutes); 

export default appRoutes;
