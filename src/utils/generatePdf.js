

import puppeteer from 'puppeteer';


//pdf genrate function
export async function generatePDFfromHTML(htmlContent, outputPath) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: outputPath, format: 'A4' });
    await browser.close();
    return { success: true, filePath: outputPath };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
