// import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
const linkss = [
  {
    title: "Best Online rate Guarantee",
  },
  {
    title: "Blog",
  },
  {
    title: "Destinations",
  },
  {
    title: "New and upcoming hotels",
  },
  {
    title: "Radisson Hotels APP",
  },
  {
    title: "Sports Approved hotels",
  },
  {
    title: "Family Friendly Hotels",
  },
  {
    title: "Health & Safety",
  },
];
const travel = [
  {
    title: "Partners",
  },
  {
    title: "Travel Agents",
  },
];
const corporate = [
  {
    title: "Radisson Hotel Group",
  },
  {
    title: "Media",
  },
  {
    title: "Careers RHG",
  },
  {
    title: "Careers PPHE",
  },
  {
    title: "Careers EHL",
  },
  {
    title: "Development",
  },
  {
    title: "Oppotunities",
  },
  {
    title: "Responsible Business",
  },
  {
    title: "Procurement",
  },
];
const legal = [
  {
    title: "Privacy Center",
  },
  {
    title: "Legal notice",
  },
  {
    title: "Radisson Rewards terms and conditions",
  },
  {
    title: "Site usage agreement",
  },
  {
    title: "Digital Accessibility",
  },
  {
    title: "Modern Slavery Statement",
  },
  {
    title: "Digital Accessibility",
  },
];
const help = [
  {
    title: "Consumer alerts",
  },
  {
    title: "Contact",
  },
  {
    title: "Complaints",
  },
  {
    title: "FAQ",
  },
  {
    title: "Sitemap",
  },
];

const Quicklinks = () => {
  return (
    <>
      <main className="border-b-[1px] border-white">
        <div className="text-white w-10/12 mx-auto flex justify-between py-4 gap-4">
          <div className="  w-full grid gap-5 h-fit ">
            <div className="border-b-[1px] border-white py-2">
              <h1 className="text-lg ">Quick links</h1>
            </div>
            <div className="text-md grid gap-1">
              {linkss.map((val, i) => {
                return (
                  <a key={i} className="cursor-pointer hover:underline">
                    {val.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" w-full grid gap-5 h-24">
            <div className="border-b-[1px] border-white py-2">
              <h1 className="text-lg ">Travel professionals</h1>
            </div>
            <div className="text-md grid gap-1">
              {travel.map((val, i) => {
                return (
                  <a key={i} className="cursor-pointer hover:underline">
                    {val.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" w-full grid gap-5 h-fit">
            <div className="border-b-[1px] border-white py-2">
              <h1 className="text-lg ">Corporate</h1>
            </div>
            <div className="text-md grid gap-1">
              {corporate.map((val, i) => {
                return (
                  <a key={i} className="cursor-pointer hover:underline">
                    {val.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" w-full grid gap-5 h-fit ">
            <div className="border-b-[1px] border-white py-2">
              <h1 className="text-lg ">Legal</h1>
            </div>
            <div className="text-md grid gap-1 ">
              {legal.map((val, i) => {
                return (
                  <a key={i} className="cursor-pointer hover:underline">
                    {val.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" w-full grid gap-5 h-fit ">
            <div className="border-b-[1px] border-white py-2">
              <h1 className="text-lg ">Help</h1>
            </div>
            <div className="text-md grid gap-1">
              {help.map((val, i) => {
                return (
                  <a key={i} className="cursor-pointer hover:underline">
                    {val.title}
                  </a>
                );
              })}
            </div>
            <div className="">
              <div className="flex gap-2 justify-start items-center ">
                <label>
                  {" "}
                  <IoCallOutline className="text-lg" />
                </label>
                <select
                  name="cars"
                  id="cars"
                  className="text-white bg-transparent text-md "
                >
                  <option value="volvo" className="text-black">
                    +1234562739 (SIN)
                  </option>
                  <option value="saab" className="text-black">
                    +1234562739 (CHN)
                  </option>
                  <option value="opel" className="text-black">
                    +1234562739 (RUS)
                  </option>
                  <option value="audi" className="text-black">
                    +1234562739 (NEP)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Quicklinks;
