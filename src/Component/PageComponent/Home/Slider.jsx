import React, { useEffect } from "react";
import imgs from "/fam.jpg";
import imgss from "/fam2.jpg";
import imgsss from "/fam3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const slidee = [
  {
    image: imgs,
    ptag: "Enjoy a",
    spantag: "Comfortable seat",
    description:
      "Grand Mirage Dhanbad, a member of Radisson Individuals -Premium Suite Room Enjoy a comfortable stay",
    button: " Discover more",
  },
  {
    image: imgss,
    ptag: "Enjoy a",
    spantag: "Comfortable seat",
    description:
      "Grand Mirage Dhanbad, a member of Radisson Individuals -Premium Suite Room Enjoy a comfortable stay",
    button: " Book Now",
  },
  {
    image: imgsss,
    ptag: "Enjoy a",
    spantag: "Comfortable seat",
    description:
      "Grand Mirage Dhanbad, a member of Radisson Individuals -Premium Suite Room Enjoy a comfortable stay",
    button: " Discover more",
  },
];
const Slider = () => {
  const [current, setCurrent] = React.useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrent(current + 1);
    }, 3000);
  }, [current]);

  return (
    <>
      {" "}
      <main className="w-full h-screen ">
        <div className=" relative top-1 ">
          {slidee.map((val, i) => {
            if (i == current % 3) {
              return (
                <>
                  <div key={i} className="absolute top-0 left-0 w-full">
                    <img
                      src={val.image}
                      alt="Family picture"
                      className="w-full h-[99vh] object-cover"
                    />
                    <div className="bg-black w-full h-[99vh] absolute top-0 opacity-30"></div>
                    <div className="absolute top-24 flex justify-center flex-col gap-16 w-full text-center bg-transparent text-white ">
                      <h1 className="text-6xl text-center text-white">
                        <p>{val.ptag} </p>
                        <span>{val.spantag}</span>
                      </h1>
                      <p className="text-2xl text-center w-8/12 mx-auto">
                        {val.description}
                      </p>
                      <div>
                        {" "}
                        <button className="w-fit h-fit px-3 py-2 bg-red-700 text-white rounded-xl text-xl font-semibold ">
                          {val.button}
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-80 right-10">
                      <FaArrowRight className="text-4xl text-white cursor-pointer" />
                    </div>
                    <div className="absolute top-80 left-10">
                      <FaArrowLeft className="text-4xl text-white cursor-pointer" />
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </main>
    </>
  );
};

export default Slider;
