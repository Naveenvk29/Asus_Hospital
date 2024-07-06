import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="px-24  ">
        <div className="pt-[30px] pb-[50px]">
          <h2 className="mb-8 text-gray-600">Departments</h2>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={[
              // "superLargeDesktop",
              // "desktop",
              "tablet",
              "mobile",
            ]}
          >
            {departmentsArray.map((depart, index) => {
              return (
                <div
                  key={index}
                  className="relative flex-1 flex justify-center items-end pb-4 pl-4 pr-5 min-h-[360px] my-0 mx-3"
                >
                  <div className="bg-[#e5e5e5] mb-8 text-xl justify-center p-3 left-0 h-fit font-bold">
                    {depart.name}
                  </div>
                  <img
                    src={depart.imageUrl}
                    alt="Department"
                    className="absolute w-full h-full z-[-1] top-0 left-0 "
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Departments;
