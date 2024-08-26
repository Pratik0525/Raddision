import { FaArrowRight } from "react-icons/fa";

const Signup1 = () => {
  return (
    <>
      <div className=" grid gap-10 px-10 py-10 border-r-[1px] h-fit">
        <div>
          <h1 className="text-[#68478d] text-3xl">
            Welcome to Radisson Rewards{" "}
          </h1>
        </div>
        <div className="grid gap-8">
          <div>
            <p className="text-xl font-semibold">Sign into Your Account</p>
          </div>
          <div className="grid gap-5 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email/Radission Reward Number"
              className="w-full h-10 border-[1px] border-gray-400 rounded-lg px-2"
              required
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              className="w-full h-10 border-[1px] border-gray-400 rounded-lg px-2"
            />
          </div>
          <div>
            <button className="w-full h-10 bg-[#68478d] hover:bg-[#51376d] text-white  rounded-full font-bold">
              SIGN IN
            </button>
          </div>
          <div>
            <p className="flex justify-center items-center gap-1">
              <span>Activate Your Account</span> <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup1;
