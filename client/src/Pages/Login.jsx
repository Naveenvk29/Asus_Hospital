import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/api/usersApi";
import { login } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Patient");

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password, role });
      dispatch(login({ ...data }));
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div>
      <section className="px-[5rem] flex justify-center h-[100vh] ">
        <div className="mr-[10rem] mt-[10rem]">
          <h1 className="text-2xl  font-bold mb-4">Sign In</h1>

          <form className="container w-[50rem]" onSubmit={handleLogin}>
            <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-l font-semibold text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-fuchsia-900 rounded w-full"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-l font-semibold text-block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-fuchsia-900 rounded w-full"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="flex-1 text-lg py-3 pr-2 pl-[40px] rounded-lg border-gray-700"
              >
                <option value="">Whos loginng</option>
                <option value="Patient">Patient</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="flex text-xl justify-center gap-3">
              <p className="font-semibold">Need to register? {""}</p>
              <Link
                to={"/register"}
                className="font-semibold hover:text-gray-500 hover:underline"
              >
                Register
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white text-lg px-4 py-2 rounded cursor-pointer my-[1rem] hover:bg-green-800"
              >
                {isLoading ? "Signing In ..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
