import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePatientRegisterMutation } from "../redux/api/usersApi";
import { login } from "../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [registerApicall, { isLoading }] = usePatientRegisterMutation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/aboutus");
    }
  }, [navigate, isAuthenticated]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerApicall({
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        password,
      });
      dispatch(login({ ...data }));
      navigate("/");
      toast.success("Registration successful! ");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container px-[24rem] pb-[60px]  mt-[100px] mr-[20px] ">
        <h2 className="text-lg font-bold mb-5 underline">Sign Up</h2>
        <form className="flex flex-col gap-8" onSubmit={handleRegister}>
          <div className="flex gap-8 ">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1  py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <input
              type="text"
              placeholder="Email"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <input
              type="number"
              placeholder="NIC"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type={"date"}
              placeholder="Date of Birth"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex text-xl justify-center gap-3">
            <p className="font-semibold">Already Registered? {""}</p>
            <Link
              to={"/signin"}
              className="font-semibold hover:text-gray-500 hover:underline"
            >
              Login Now
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white text-lg px-4 py-2 rounded cursor-pointer my-[1rem] hover:bg-green-800"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
