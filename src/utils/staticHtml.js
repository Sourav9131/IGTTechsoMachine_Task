

export function htmlContent(data){

    const  { email, phoneNo, name, dob, gender, bloodGroup, date, time }= data;

    let htmlContent=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            height: 100vh;
        }
        
        .certificate {
            width: 800px;
            height: auto;
            padding: 20px;
            border: 10px solid #0078d4;
            background-color: white;
            text-align: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo img {
            width: 80px;
            height: auto;
        }
        
        .details p {
            margin: 0;
            text-align: right;
            font-size: 12px;
        }
        
        h1 {
            font-size: 28px;
            color: #0078d4;
            margin: 10px 0;
        }
        
        h2 {
            font-size: 18px;
            margin: 10px 0;
            font-weight: normal;
        }
        
        h3 {
            font-size: 24px;
            color: #b8860b;
            margin: 10px 0;
        }
        
        .description {
            font-size: 14px;
            margin: 20px 0;
            color: #555;
            line-height: 1.6;
        }
        
        .info {
            font-size: 14px;
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }
        
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
        
        .footer .datetime {
            margin: 0;
            font-size: 12px;
        }
        
        .seal img {
            width: 100px;
            height: auto;
        }
        
        .signature {
            margin-top: 10px;
            font-size: 12px;
            font-style: italic;
        }
        
        address {
            font-size: 12px;
            text-align: right;
            margin-top: 20px;
            line-height: 1.4;
            color: #333;
        }
        
    </style>
</head>
<body>
    <div class="certificate">
        <div class="header">
            <div class="details">
                <p>Register-Id: 12297918</p>
                <p>E-Mail: ${email}</p>
                <p>Phone No.: +91${phoneNo}</p>
            </div>
            <div class="logo">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbvlmfZ1CrowC09-m4HuHKfIx8K03GJbI3fzbVL4PB2gr4qNoX" alt="MSME Logo">
            </div>
            <address>
                Anand Farm, Sector 22<br>
                Gurugram (122016)<br>
                (Haryana) India
            </address>
        </div>
        <h1>Certificate of Half Marathon</h1>
        <h2>This Certificate Presented to</h2>
        <h3>${name}</h3>
        <p class="description">
            The certificate of achievement is awarded to individuals who have 
            demonstrated outstanding performance in their field. Here’s an example text 
            for a certificate.
        </p>
        <div class="info">
            <p>Date of Birth: ${dob}</p>
            <p>Gender: ${gender}</p>
            <p>Blood Group: ${bloodGroup}</p>
        </div>
        <div class="footer">
            <div>
                <p>${date} ${time}</p>
                <hr>
                <p class="datetime">DATE-TIME</p>
            </div>
           
            <div class="seal">
                <img src="data:image/jpeg;base64,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" alt="Certificate Seal">
            </div>
        
            <p class="signature">
                SIGNATURE</p>
        </div>
       
    </div>
</body>
</html>
`

return htmlContent;
}