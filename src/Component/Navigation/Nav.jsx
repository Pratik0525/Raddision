import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
const reservations = [
  {
    title: "Destinations",
    // path: "/",
  },
  {
    title: "Resorts",
    // path: "/",
  },
  {
    title: "Meetings & Events",
    // path: "/",
  },
  {
    title: "Deals",
    // path: "/",
  },
  {
    title: "My reservation",
    // path: "/",
  },
];
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="flex justify-between items-center px-4 ">
          <div>
            <RxHamburgerMenu className="w-16 h-10" />
          </div>
          <div>
            <img src={logo} alt="logo of an image" className="w-44 h-20" />
          </div>
          <div className="flex gap-4">
            {reservations.map((val, i) => {
              return (
                <>
                  <a
                    href="/"
                    key={i}
                    className="uppercase font-bold text-sm hover:underline"
                  >
                    {val.title}
                  </a>
                </>
              );
            })}
          </div>
          <div className="flex gap-5">
            <button className="w-fit h-fit px-3 py-2 border-2 border-black bg-white hover:bg-black hover:text-white font-semibold rounded-3xl">
              Registration
            </button>
            <button
              onClick={() => navigate("/signupss")}
              className=" bg-[#68478d] flex w-fit h-fit px-3 py-2 justify-center items-center gap-2  rounded-3xl text-white font-semibold text-md"
            >
              <CgProfile />
              <p>Sign in</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
