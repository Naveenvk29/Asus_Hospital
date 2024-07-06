import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <section className="px-[5rem] flex justify-center h-[100vh] ">
        <div className="mr-[10rem] mt-[10rem]">
          <h1 className="text-2xl  font-bold mb-4">Sign In</h1>

          <form className="container w-[50rem]">
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
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
