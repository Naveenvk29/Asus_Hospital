import Hero from "./Home/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Department";
import MessageForm from "../components/MessageForm";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ASUSCare Medical Institute | Your Trusted Healthcare Provider"
        }
      />
      <Biography />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
