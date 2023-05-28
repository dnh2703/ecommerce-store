import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-screen py-5">
      <div className="h-full flex items-center justify-center px-6 lg:px-0 flex-col ">
        <div className="h-auto sm:max-w-sm">
          <img
            src="https://flowbite.com/application-ui/demo/images/illustrations/500.svg"
            alt="astronaut image"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold lg:text-5xl md:text-4xl text-white mb-3">
            Something has gone seriously wrong
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            It's always time for a coffee break. We should be back by the time
            you finish your coffee.
          </p>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="py-2.5 px-5 rounded-lg inline-flex mr-3 text-sm font-medium items-center decoration-inherit bg-blue-600 text-white justify-center mt-2 d8_fVOcgDmbt7UdpfeLK WuKugQzwTT7o1wwBck2R _ZsTMX_gz275093orLWM"
          >
            <svg
              className="h-5 w-5 -ml-1 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p>Go back home</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
