import Signup1 from "./Signup1";
import Signup2 from "./Signup2";

const SignUp = () => {
  return (
    <>
      <main className="">
        <div className="h-screen relative ">
          <div className="bg-black h-screen w-full opacity-60 "></div>
          <div className=" bg-white  border-gray-600 rounded-lg z-50 h-fit absolute top-14  left-20   w-10/12 grid grid-cols-2">
            <Signup1 />
            <Signup2 />
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
