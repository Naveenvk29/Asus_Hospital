import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <hr className="text-sm" />
      <Footer />
    </>
  );
};

export default App;
