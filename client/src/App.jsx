import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Home/Navbar";
// import Footer from "./Pages/Home/Footer";
const App = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
