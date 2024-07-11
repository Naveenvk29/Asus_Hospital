import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth/");
  };

  return (
    <>
      <nav
        className=" container flex w-full justify-around items-center  py-5 z-20 
      "
      >
        <div className="flex items-center text-4xl">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="flex gap-6">
            <Link
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
              to={"/"}
              onClick={() => setShow(!show)}
            >
              Home
            </Link>
            <Link
              to={"/appointment"}
              onClick={() => setShow(!show)}
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
            >
              Appointment
            </Link>
            <Link
              to={"/aboutus"}
              onClick={() => setShow(!show)}
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
            >
              About Us
            </Link>
          </div>
        </div>
        <div>
          <button
            className=" py-2 px-5 text-[#e5e5e5]  border-none  rounded-full text-sm font-semibold z-10 bg-black "
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        {/* <div className=" disabled:" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;