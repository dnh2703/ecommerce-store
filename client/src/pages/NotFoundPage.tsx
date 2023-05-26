import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  let navigate = useNavigate();
  return (
    <main className="h-screen w-screen py-5">
      <div className="h-full flex items-center justify-center px-6 lg:px-0 flex-col ">
        <div className="h-auto sm:max-w-sm">
          <img
            src="https://flowbite.com/application-ui/demo/images/illustrations/404.svg"
            alt="astronaut image"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold lg:text-5xl md:text-4xl  mb-3">
            Page not found
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-4">
            Oops! Looks like you followed a bad link. If you think this is a
            problem with us, please tell us.
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className=" group/button leading-[40px] relative text-black border border-black text-sm "
          >
            <div className="w-0 z-0 h-full group-hover/button:w-full duration-500 bg-[#6e2f1b] absolute"></div>
            <span className="z-[1] uppercase tracking-[3px] relative px-12 group-hover/button:text-white group-hover/button:border-[#6e2f1b] duration-500">
              go back home
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
