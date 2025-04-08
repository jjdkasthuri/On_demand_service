import React from "react";
import Rating from '@mui/material/Rating';
import PersonIcon from '@mui/icons-material/Person'; // Icon for Person
import DateRangeIcon from '@mui/icons-material/DateRange'; // Icon for Date
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Icon for Location
import WorkIcon from '@mui/icons-material/Work'; // Icon for Job Title
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // Icon for Service Type

const Testinomial = () => {
  return (
    <>
      <section className="testimonials bg-gradient-to-r from-[#f9f9f9] to-[#fff7e1] py-20">
        <h1 className="heading text-5xl text-center font-bold text-[#2f4f4f] py-4">Testimonials 📋</h1>
        <section className="container sm:p-12 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Surbhi Sikkema",
              image: "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "This company has been fantastic in providing reliable workers for our business. The cleaners, electricians, and mechanics they sent over were highly professional and always on time.",
              rating: 4.5,
              date: "March 10, 2025",
              location: "Colombo, Sri Lanka",
              company: "ABC Corp",
              title: "Operations Manager",
              serviceType: "Cleaning & Maintenance",
            },
            {
              name: "Nimal Perera",
              image: "https://img.freepik.com/free-photo/portrait-young-sri-lankan-man_23-2148484272.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "The services provided were exceptional. The team was punctual and very professional. Highly recommended!",
              rating: 5,
              date: "March 12, 2025",
              location: "Kandy, Sri Lanka",
              company: "XYZ Ltd.",
              title: "Project Coordinator",
              serviceType: "Project Management",
            },
            {
              name: "Kavinda Fernando",
              image: "https://img.freepik.com/free-photo/portrait-happy-young-sri-lankan-woman_23-2148484273.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "I was impressed by the quality of work and the dedication shown by the staff. They truly care about their clients.",
              rating: 4.5,
              date: "March 14, 2025",
              location: "Galle, Sri Lanka",
              company: "LMN Services",
              title: "Customer Relations",
              serviceType: "Customer Support",
            },
            {
              name: "Dilani Jayasinghe",
              image: "https://img.freepik.com/free-photo/portrait-young-sri-lankan-woman_23-2148484274.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "This company has made a significant impact on our operations. Their workers are skilled and reliable.",
              rating: 4.8,
              date: "March 15, 2025",
              location: "Negombo, Sri Lanka",
              company: "PQR Industries",
              title: "Facility Manager",
              serviceType: "Facilities Management",
            },
            {
              name: "Ravi Kumar",
              image: "https://img.freepik.com/free-photo/portrait-young-sri-lankan-man_23-2148484275.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "The team was incredibly helpful and responsive. They understood our needs and delivered perfectly.",
              rating: 5,
              date: "March 16, 2025",
              location: "Jaffna, Sri Lanka",
              company: "Tech Solutions",
              title: "IT Manager",
              serviceType: "IT Services",
            },
            {
              name: "Anjali Fernando",
              image: "https://img.freepik.com/free-photo/portrait-young-sri-lankan-woman_23-2148484276.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_incoming",
              testimonial: "I highly recommend their services. They are professional, efficient, and always meet deadlines.",
              rating: 4.9,
              date: "March 17, 2025",
              location: "Batticaloa, Sri Lanka",
              company: "Design Studio",
              title: "Creative Director",
              serviceType: "Design Services",
            },
          ].map((item, index) => (
            <div key={index} className="item rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-x-[10px] hover:shadow-2xl flex flex-col items-center p-5 bg-white">
              <img
                src={item.image}
                alt={`Picture of ${item.name}`}
                className="image-testimonial rounded-full w-24 h-24 mb-4 object-cover border-2 border-yellow-500"
              />
              <div className="name flex items-center">
                <PersonIcon className="mr-2 text-yellow-500" />
                <span className="text-xl font-semibold text-gray-800">{item.name}</span>
              </div>
              <div className="title flex items-center mt-1 text-gray-600">
                <WorkIcon className="mr-1" />
                <span>{item.title}</span>
              </div>
              <div className="company flex items-center mt-1 text-gray-600">
                <span className="font-semibold">{item.company}</span>
              </div>
              <div className="service-type flex items-center mt-1 text-gray-500">
                <BusinessCenterIcon className="mr-1" />
                <span>{item.serviceType}</span>
              </div>
              <div className="description text-center mt-2 text-gray-600">
                {item.testimonial}
              </div>
              <div className="rating mt-4 flex items-center">
                <Rating name="read-only" value={item.rating} readOnly precision={0.5} />
                <span className="ml-2 text-gray-700">{item.rating}</span>
              </div>
              <div className="flex items-center mt-2 text-gray-500">
                <DateRangeIcon className="mr-1" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center mt-1 text-gray-500">
                <LocationOnIcon className="mr-1" />
                <span>{item.location}</span>
              </div>
              {/* Add a horizontal line to separate cards */}
              {index < 5 && <hr className="my-4 border-gray-300" />}
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Testinomial;
