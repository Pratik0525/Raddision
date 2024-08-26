import img from "/Signup.png";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { FaMoneyCheckDollar, FaArrowUp } from "react-icons/fa6";
import { MdTableRestaurant } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
const facilities = [
  {
    logo: <RiHotelLine className="w-10 h-10 text-[#68478d]" />,
    title: "Points for hotel stays (all participating RHG properties)",
    description:
      "Earn points per US dollar spent on eligible stays and food and beverage purchases charged to your room.",
  },
  {
    logo: <FaMoneyCheckDollar className="w-10 h-10 text-[#68478d]" />,
    title: "Member Only Rate",
    description:
      "Save up to 15% more on booking directly from our website or mobile app.",
  },
  {
    logo: <RiHotelLine className="w-10 h-10 text-[#68478d]" />,
    title: "Priority Line",
    description:
      "Enjoy access to the member-only priority line for a faster check-in and check-out. Available at selected hotels only. This benefit does not apply to prizeotel.",
  },
  {
    logo: <MdTableRestaurant className="w-10 h-10 text-[#68478d]" />,
    title: "Food & Beverage discount",
    description:
      "Get discounted food and beverages at participating hotel restaurants. This benefit does not apply to prizeotel.",
  },
  {
    logo: <FaArrowUp className="w-10 h-10 text-[#68478d] font-extralight" />,
    title: "Easy Access to Premium",
    description:
      "With our refreshingly simple program structure, upgrade to Premium just after 3 stays.",
  },
  {
    logo: <IoBedOutline className="w-10 h-10 text-[#68478d]" />,
    title: "Promotions and Free Nights",
    description:
      "Get rewarded with free night stays and member-only promotions.",
  },
];
const Signup2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-5 py-5 px-5">
        <div className="flex justify-end items-end">
          <IoMdClose
            onClick={() => navigate("/")}
            className="w-8 h-8 cursor-pointer   "
          />
        </div>
        <div>
          <h1 className="text-xl font-black">
            Not yet a Radisson Rewards member?
          </h1>
        </div>
        <div>
          <img src={img} alt="" className="w-full h-36" />
        </div>
        <div className=" flex flex-col overflow-y-auto gap-5  py-5 h-48">
          {facilities.map((val, i) => {
            return (
              <>
                <div key={i} className="flex  ">
                  <div className=" w-2/12 flex justify-center items-center">
                    <div className="w-fit h-fit rounded-full bg-gray-200 px-3 py-3 ">
                      {val.logo}
                    </div>
                  </div>
                  <div className=" w-10/12 grid gap-1 pl-2 ">
                    <h1 className="font-semibold text-md">{val.title}</h1>
                    <p className="text-xs font-normal">{val.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className=" w-full">
          <button className="font-bold text-sm border-[#68478d] text-[#68478d] border-2 rounded-full w-full h-fit px-3 py-2 hover:bg-[#68478d] hover:text-white">
            JOIN US
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup2;
