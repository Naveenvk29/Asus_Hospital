import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className="px-24 pb-8  ">
        <hr className="mb-8" />
        <div className="flex justify-between gap-5 ">
          <div className="flex">
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 ">
              <Link
                className="text-gray-700 hover:text-[#8570ed] hover:tranition-0.3s"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="text-gray-700 hover:text-[#8570ed] hover:tranition-0.3s"
                to={"/appointment"}
              >
                Appointment
              </Link>
              <Link
                className="text-gray-700 hover:text-[#8570ed] hover:tranition-0.3s"
                to={"/about"}
              >
                About
              </Link>
            </ul>
          </div>
          <div className="flex-2">
            <div className="flex justify-around ">
              <h4 className="font-bold pr-14 mb-5">Working days</h4>
              <h4 className="font-bold mb-5"> Hours</h4>
            </div>
            <ul className="flex flex-col gap-3 ">
              {hours.map((element) => (
                <li key={element.id}>
                  <span className="w-40 inline-block  ">{element.day}</span>
                  <span className="w-40 inline-block">{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=" ">
            <h4 className="font-bold mb-5">Contact</h4>
            <div className="flex items-center gap-3 mb-3">
              <FaPhone className="text-2xl" />
              <span className="w-40 inline-block  ">999-999-9999</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <MdEmail className="text-2xl" />
              <span className="w-40 inline-block  ">Client@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow className="text-2xl" />
              <span className="w-40 inline-block  ">KPHB,Hyderabad</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
