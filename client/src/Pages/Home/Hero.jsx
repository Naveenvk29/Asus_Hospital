const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className=" container relative flex gap-12 px-24  py-32 ">
        <div className="flex flex-col w-[41rem] scroll-none ">
          <h1 className="text-3xl tracking-widest font-extrabold mb-6 ">
            {title}
          </h1>
          <p className="text-xl tracking-wide ">
            ZeeCare Medical Institute is a state-of-the-art facility dedicateds
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="flex">
          <img src={imageUrl} alt="hero" className="" />
          <span className=" absolute right-[-300px] top-[-300px] -z-10  ">
            <img src={imageUrl} alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
