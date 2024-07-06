import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Department";
import MessageForm from "../components/MessageForm";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ASUS Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"./hero.png"}
      />
      <Biography imageUrl={"./about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
