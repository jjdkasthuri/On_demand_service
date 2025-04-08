import { sendEmail } from "../email.js"
import { Booking } from "../models/booking.model.js";
import { Provider } from "../models/provider.model.js";
import { User } from "../models/user.model.js";
const sendmailController = async(req,res) =>{
    const { senderMail, receiverMail ,bookingid } = req.body;

    if (!senderMail || !receiverMail ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const booking = await Booking.findById(bookingid);
    const user = await User.findOne({email : booking.who});
    const provider = await Provider.findOne({number : booking.whom});

    const sendContent  = `Dear ${user.name},

    We are pleased to confirm that your slot has been successfully booked. Here are the details of your booking:
    
    Time: ${booking.hour}
    Price: Rs ${provider.price} per hour 
    Provider: ${provider.name}
    If you have any questions or need assistance, feel free to contact us. We look forward to serving you!
    
    Thank you for choosing us.`

    const result = sendEmail(senderMail, receiverMail, sendContent);
    
        return res.status(200).json({ message: 'Mail sended' });
    
}

const emailToMeController = async(req,res)=>{

    const {name , email , message} = req.body;
    if(!name || !email || !message){
        return res.status(400).json({ message: 'All fields are required' });
    }
    const receiverMail = "a921@gmail.com";
    const result = sendEmail(email, receiverMail, message);
    return res.status(200).json({ message: 'Mail sended' });


}

export {sendmailController , emailToMeController}