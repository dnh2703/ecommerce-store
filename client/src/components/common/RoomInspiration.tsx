import { useState } from "react";

const RoomInspiration = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };
  return (
    <div className="flex flex-col md:flex-row pt-10">
      <div className="md:w-2/5 bg-gray-800 text-white pl-10  ">
        <div className="h-full flex flex-col justify-center my-5">
          <h3 className="text-5xl pb-5">Room </h3>
          <h3 className="text-5xl pb-5">Inspiration</h3>
          <p className="pb-10">
            Discover fresh ideas from our in-house stylists and other Funiro
            customers to transform your own room.
          </p>
          <button
            className={`w-40 h-10 bg-black text-white duration-300`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? "Discovery" : "->"}
          </button>
        </div>
      </div>
      <div className=" md:w-3/5">
        <img
          src="https://cdn.shopify.com/s/files/1/0136/8467/0523/files/lookbook-1.jpg?v=1657155987"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default RoomInspiration;
