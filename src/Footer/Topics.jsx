import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
const ico = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <AiFillInstagram />,
  },
  {
    icon: <FaPinterest />,
  },
  {
    icon: <FaYoutube />,
  },
  {
    icon: <FaLinkedinIn />,
  },
];
const topic = () => {
  return (
    <>
      <main className="bg-[#343a40] w-10/12 mx-auto ">
        <div className=" flex justify-between text-white py-5">
          <div className=" ">
            <p className="uppercase text-md cursor-pointer hover:underline font-bold  ">
              NEVER MISS OUT ON OUR MOST POPULAR DEALS
            </p>
          </div>
          <div className="  ">
            <div className="flex gap-5 text-2xl text-white">
              {ico.map((val, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="cursor-pointer hover:bg-[#343a40] hover:opacity-70 transition-all ease-in-out duration-200 delay-75"
                    >
                      {val.icon}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default topic;
