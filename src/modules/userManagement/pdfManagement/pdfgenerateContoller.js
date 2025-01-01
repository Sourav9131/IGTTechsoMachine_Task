import { htmlContent } from "../../../utils/staticHtml.js";
import { generatePDFfromHTML } from "../../../utils/generatePdf.js";
import pdfModel from "./pdfGenrateModel.js";



//--------generate PDF function----------//
export async function generatePdf(req, res) {
    try {
        const { email, phoneNo, name, dob, gender, bloodGroup } = req.body;

//----- Validation-------//
if (!email || !phoneNo || !name || !dob || !gender || !bloodGroup) {
    return res.status(400).send({
      status: false,
      msg: "Missing required fields"
    });
  }



        let dateStr = JSON.stringify(new Date())
        const date = dateStr.slice(1, 11);
        const time = dateStr.slice(12, 20);

        const data = { email, phoneNo, name, dob, gender, bloodGroup, date, time }

        const timestamp = Date.now();
        const fileName = `./public/certificate/${name}_certificate_${timestamp}.pdf`;

        //genrate html
        let html = await htmlContent(data)

        //genrate pdf
        const pdfResult = await generatePDFfromHTML(html, fileName);

        if (pdfResult.success) {

            //save path in datbase
            // await pdfModel.create({pdf:pdfResult?.filePath})

            return res.status(200).send({
                status: true,
                msg: "PDF generated successfully",
            });
        }
    } catch (error) {
        console.error("Error generating PDF:", error);

        return res.status(500).send({
            status: false,
            msg: "Failed to generate PDF",
            error: error.message,
        });
    }
}






