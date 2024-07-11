// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutPatientMutation } from "../redux/api/usersApi";
import { logout } from "../redux/features/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  // const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const [logoutPatient] = useLogoutPatientMutation();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutPatient();
      dispatch(logout());
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <nav
        className=" container flex w-full justify-evenly items-center  py-5 absolute z-20 
      "
      >
        <div className="flex items-center text-4xl">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div>
          <div className="flex gap-6">
            <Link
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
              to={"/"}
            >
              Home
            </Link>
            <Link
              to={"/appointment"}
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
            >
              Appointment
            </Link>
            <Link
              to={"/aboutus"}
              className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
            >
              About Us
            </Link>
          </div>
        </div>
        <div>
          {isAuthenticated && (
            <div>
              <button
                className="bg-green-500 text-white text-lg px-4 py-2 rounded cursor-pointer my-[1rem] hover:bg-green-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div>
          {isAuthenticated?.role === "Admin" && (
            <div>
              <button
                className="bg-green-500 text-white text-lg px-4 py-2 rounded cursor-pointer my-[1rem] hover:bg-green-800"
                onClick={handleLogout}
              >
                <Link
                  className="text-xl font-semibold tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
                  to={"/admin/dashboard"}
                >
                  {" "}
                  Dashboard{" "}
                </Link>
              </button>
            </div>
          )}
        </div>
        {!isAuthenticated && (
          <button className="text-xl font-semibold  bg-green-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem] hover:bg-green-800">
            <Link
              className="tracking-[2px] hover:text-slate-500 hover:cursor-pointer hover:underline"
              to={"/signin"}
            >
              Login
            </Link>
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
