const button = [
  {
    buttons: "Amsterdam",
  },
  {
    buttons: "Bangkok",
  },
  {
    buttons: "Bengaluru",
  },
  {
    buttons: "Berlin",
  },
  {
    buttons: "Budapest",
  },
  {
    buttons: "Copenhagen",
  },
  {
    buttons: "Dubai",
  },
  {
    buttons: "Dublin",
  },
  {
    buttons: "Gran Canaria",
  },
  {
    buttons: "Istanbul",
  },
  {
    buttons: "London",
  },
  {
    buttons: "Manchester",
  },
  {
    buttons: "Milan",
  },
  {
    buttons: "New Delhi",
  },
  {
    buttons: "Oslo",
  },
  {
    buttons: "Paris",
  },
  {
    buttons: "Riga",
  },
  {
    buttons: "Shanghai",
  },
  {
    buttons: "Stockholm",
  },
  {
    buttons: "Sydney",
  },
  {
    buttons: "Zurich",
  },
];

const Hotdestinations = () => {
  return (
    <>
      <div className="border-[1px] border-white py-3">
        <div className="h-fit text-white w-10/12 mx-auto">
          <div className="m-2 text-lg  ">
            <p>Hot Destinations</p>
          </div>
          <div>
            {button.map((val, i) => {
              return (
                <>
                  <button
                    key={i}
                    className=" m-2 w-fit h-fit px-3 py-2  rounded-full border-2 border-white font-extralight hover:bg-white hover:text-[#343a40]"
                  >
                    {val.buttons}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotdestinations;
