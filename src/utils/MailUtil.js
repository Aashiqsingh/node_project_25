const mailer = require("nodemailer");

const sendingMail = async(to,subject,text)=>{

    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"aashiqsingh56789@gmail.com",
            pass:"zolc gcyf piyg vcnm"
        }
    })

    const mailOptions = {
        from:"aashiqsingh56789@gmail.com",
        to:to,
        subject:subject,
        // text:text
        // html:"<h1>Harsh</h1>"
        html:`<h1>${text}</h1>`
    }

    const mailresponse = await transporter.sendMail(mailOptions)
    console.log(mailresponse);
    return mailresponse;
    
}

module.exports = {
    sendingMail
}

// sendingMail("harshru015@gmail.com","Hii test ","hii test message..");