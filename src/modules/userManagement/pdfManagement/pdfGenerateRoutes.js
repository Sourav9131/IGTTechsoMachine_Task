import express from 'express';
import * as pdfController from './pdfgenerateContoller.js'; 

const pdfGenerateRoutes = express.Router(); 

// PDF generation route
pdfGenerateRoutes.post("/generate-pdf", pdfController.generatePdf); 

export default pdfGenerateRoutes;
