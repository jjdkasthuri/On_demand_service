import nodemailer from "nodemailer"
let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.USER_EMAIL, 
        pass: process.env.USER_PASS
    }
});

const sendEmail = (senderMail, receiverMail, content) => {
    let mailOptions = {
        from: senderMail,      
        to: receiverMail,       
        subject: 'Email of Confirmation for your Successful Booking',  
        text: content            
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            return { success: false, message: error };
        } else {
            console.log('Message sent:', info.response);
            return { success: true, message: 'Email sent successfully!' };
        }
    });
};

// Export the function for use in your route
export {sendEmail}