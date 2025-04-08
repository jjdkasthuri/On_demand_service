// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import ContactImage from '../assets/contact-us.png';
// import { Link } from 'react-router-dom'; 

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // console.log('Form Data:', formData);

//     try {
//       const response = await axios.post(`https://on-demand-service-m5nh.onrender.com/api/v1/send-email-me`, formData);
//       console.log('Response:', response.data);
//       alert('Message sent successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-container bg-gradient-to-br from-[#f4f6ff] to-[#ffffff] min-h-screen flex justify-center items-center p-8">
//       <div className="contact-content-container flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg">
//         {/* Left Column: Form */}
//         <div className="form-container p-8 lg:w-1/2">
//           <h1 className="text-4xl font-bold text-[#2f4f4f] text-center mb-6">Get in Touch</h1>
//           <p className="text-lg text-center text-[#666] mb-8">We’d love to hear from you. Fill out the form below to contact us.</p>
//           <form onSubmit={handleOnSubmit} className="contact-form flex flex-col gap-6">
//             <TextField
//               id="name"
//               label="Your Name"
//               variant="outlined"
//               style={{ margin: '0' }}
//               name="name"
//               required
//               onChange={handleOnChange}
//               value={formData.name}
//               className="input-field"
//               inputProps={{ style: { padding: '15px' } }}
//             />
//             <TextField
//               id="email"
//               label="Email Address"
//               variant="outlined"
//               style={{ margin: '0' }}
//               name="email"
//               type="email"
//               required
//               onChange={handleOnChange}
//               value={formData.email}
//               className="input-field"
//               inputProps={{ style: { padding: '15px' } }}
//             />
//             <TextField
//               id="message"
//               label="Your Message"
//               variant="outlined"
//               style={{ margin: '0' }}
//               name="message"
//               multiline
//               rows={4}
//               required
//               onChange={handleOnChange}
//               value={formData.message}
//               className="input-field"
//               inputProps={{ style: { padding: '15px' } }}
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               style={{
//                 margin: '1rem 0',
//                 backgroundColor: '#183354',
//                 textTransform: 'none',
//                 fontSize: '16px',
//                 padding: '12px 20px',
//                 borderRadius: '8px',
//               }}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </Button>
//           </form>

//           {/* Adding the Link under the form */}
//           <div className="text-center mt-4">
//             <p className="text-sm text-[#2f4f4f]">
//               By sending this message, you agree to our{' '}
//               <Link to="/privacy-policy" className="text-[#00aaff] underline hover:text-[#0077cc]">
//                 Privacy Policy
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Right Column: Image */}
//         <div className="image-container lg:w-1/2 flex justify-center items-center bg-[#f7f7f7] rounded-r-xl p-6">
//           <img
//             src={ContactImage}
//             alt="Contact Us"
//             className="w-full h-auto max-w-[400px] rounded-lg shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import ContactImage from '../assets/contact-us.png';
import { Link } from 'react-router-dom'; 
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import SubjectIcon from '@mui/icons-material/Subject';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const locations = [
  { value: '', label: 'Select your location' },
  { value: 'colombo', label: 'Colombo' },
  { value: 'kandy', label: 'Kandy' },
  { value: 'galle', label: 'Galle' },
  { value: 'jaffna', label: 'Jaffna' },
  { value: 'negombo', label: 'Negombo' },
  { value: 'anuradhapura', label: 'Anuradhapura' },
  { value: 'trincomalee', label: 'Trincomalee' },
  { value: 'matara', label: 'Matara' },
  { value: 'batticaloa', label: 'Batticaloa' },
  { value: 'nuwara_eliya', label: 'Nuwara Eliya' },
];

const countryCodes = [
  { code: '+94', label: 'Sri Lanka (+94)' },
  { code: '+1', label: 'USA (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+91', label: 'India (+91)' },
  // Add more country codes as needed
];

const preferredContactTimes = [
  { value: '', label: 'Select preferred contact time' },
  { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
  { value: 'evening', label: 'Evening (4 PM - 8 PM)' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: '',
    contactMethod: '',
    countryCode: '+94', // Default to Sri Lanka
    companyName: '',
    preferredContactTime: '',
    additionalComments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`https://your-api-url.com/api/v1/send-email`, formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', location: '', contactMethod: '', countryCode: '+94', companyName: '', preferredContactTime: '', additionalComments: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container flex justify-center items-center p-8 min-h-screen bg-gradient-to-br from-[#f4f6ff] to-[#ffffff]">
      <div className="contact-content-container flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="form-container p-8 lg:w-1/2">
          <h1 className="text-4xl font-bold text-[#2f4f4f] text-center mb-6">Get in Touch</h1>
          <p className="text-lg text-center text-[#666] mb-8">We’d love to hear from you. Fill out the form below to contact us.</p>
          <form onSubmit={handleOnSubmit} className="contact-form flex flex-col gap-6">
            <TextField
              label="Your Name"
              variant="outlined"
              name="name"
              required
              onChange={handleOnChange}
              value={formData.name}
              InputProps={{
                startAdornment: <ContactMailIcon className="mr-2" />
              }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              type="email"
              required
              onChange={handleOnChange}
              value={formData.email}
              InputProps={{
                startAdornment: <EmailIcon className="mr-2" />
              }}
            />
            <div className="flex gap-2">
              <TextField
                label="Country Code"
                variant="outlined"
                name="countryCode"
                select
                required
                onChange={handleOnChange}
                value={formData.countryCode}
                SelectProps={{
                  native: true,
                }}
                InputProps={{
                  startAdornment: <PhoneIcon className="mr-2" />
                }}
              >
                {countryCodes.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                label="Phone Number"
                variant="outlined"
                name="phone"
                type="tel"
                required
                onChange={handleOnChange}
                value={formData.phone}
                InputProps={{
                  startAdornment: <PhoneIcon className="mr-2" />
                }}
              />
            </div>
            
            <TextField
              label="Company Name"
              variant="outlined"
              name="companyName"
              onChange={handleOnChange}
              value={formData.companyName}
              InputProps={{
                startAdornment: <ContactMailIcon className="mr-2" />
              }}
            />
            <TextField
              label="Location"
              variant="outlined"
              name="location"
              select
              required
              onChange={handleOnChange}
              value={formData.location}
              SelectProps={{
                native: true,
              }}
              InputProps={{
                startAdornment: <LocationOnIcon className="mr-2" />
              }}
            >
              {locations.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              label="Preferred Contact Time"
              variant="outlined"
              name="preferredContactTime"
              select
              required
              onChange={handleOnChange}
              value={formData.preferredContactTime}
              SelectProps={{
                native: true,
              }}
              InputProps={{
                startAdornment: <ContactMailIcon className="mr-2" />
              }}
            >
              {preferredContactTimes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              label="Subject"
              variant="outlined"
              name="subject"
              required
              onChange={handleOnChange}
              value={formData.subject}
              InputProps={{
                startAdornment: <SubjectIcon className="mr-2" />
              }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              required
              onChange={handleOnChange}
              value={formData.message}
              InputProps={{
                startAdornment: <MessageIcon className="mr-2" />
              }}
            />
            <TextField
              label="Additional Comments"
              variant="outlined"
              name="additionalComments"
              multiline
              rows={2}
              onChange={handleOnChange}
              value={formData.additionalComments}
              InputProps={{
                startAdornment: <MessageIcon className="mr-2" />
              }}
            />
            <TextField
              label="Preferred Contact Method"
              variant="outlined"
              name="contactMethod"
              select
              required
              onChange={handleOnChange}
              value={formData.contactMethod}
              SelectProps={{
                native: true,
              }}
              InputProps={{
                startAdornment: <ContactMailIcon className="mr-2" />
              }}
            >
              <option value="">Select...</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              By sending this message, you agree to our{' '}
              <Link to="/privacy-policy" className="text-[#00aaff] underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="image-container lg:w-1/2 flex justify-center items-center bg-[#f7f7f7] rounded-r-xl p-6">
          <img src={ContactImage} alt="Contact Us" className="w-full h-auto max-w-[400px] rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
