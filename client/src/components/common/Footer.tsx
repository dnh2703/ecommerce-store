import { useEffect, useState } from "react";

const Footer = () => {
  const [contactUs, setContactUs] = useState(false);
  const [categories, setCategories] = useState(false);
  const [services, setServices] = useState(false);
  const [joinUs, setJoinUs] = useState(false);
  const ToggleContactUs = () => {
    setContactUs(!contactUs);
  };
  const ToggleCategories = () => {
    setCategories(!categories);
  };
  const ToggleServices = () => {
    setServices(!services);
  };
  const ToggleJoinUs = () => {
    setJoinUs(!joinUs);
  };
  useEffect(() => {
    const handleResize = () => {
      // Hide the contactUs div if the window width is smaller than the medium breakpoint
      if (window.innerWidth < 768) {
        setContactUs(true);
        setCategories(true);
        setServices(true);
        setJoinUs(true);
      } else {
        setContactUs(false);
        setCategories(false);
        setServices(false);
        setJoinUs(false);
      }
    };

    // Add the event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-300">
      <div className="container mx-auto py-8 px-10">
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <div
              className="flex items-center justify-between mb-5"
              onClick={ToggleContactUs}
            >
              <h4 className="text-base uppercase">Contact Us</h4>
              <span className=" md:hidden">
                {contactUs ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            <div className={`${contactUs ? "hidden" : "block"}`}>
              <p className="mb-4">
                <span className="font-semibold">Add</span> : 17 Duy Tan, Cau
                Giay, Hanoi, Vietnam
              </p>
              <p className="mb-4">
                <span className="font-semibold">Tell</span> : 866.453.4748
              </p>
              <p className="mb-4">
                <span className="font-semibold">HR Fax </span>: 810.222.5439
              </p>
              <p className="mb-4">
                <span className="font-semibold">Email</span> : sales@demati.com
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <div
              className="flex items-center justify-between mb-5"
              onClick={ToggleCategories}
            >
              <h4 className="text-base uppercase">Categories</h4>
              <span className=" md:hidden">
                {categories ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            <div className={` ${categories ? "hidden" : "block"}`}>
              <p className="mb-4">Furniture</p>
              <p className="mb-4">Tables</p>
              <p className="mb-4">Seating</p>
              <p className="mb-4">Desk & office</p>
              <p className="mb-4">Storage</p>
              <p className="mb-4">Bed and Bath</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <div
              className="flex items-center justify-between mb-5"
              onClick={ToggleServices}
            >
              <h4 className="text-base uppercase">Service</h4>
              <span className=" md:hidden">
                {services ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            <div className={` ${services ? "hidden" : "block"}`}>
              <p className="mb-4">Sale</p>
              <p className="mb-4">Quick ship</p>
              <p className="mb-4">New Designs</p>
              <p className="mb-4">Accidental Fabric Protection</p>
              <p className="mb-4">Furniture Care</p>
              <p className="mb-4">Gift Cards</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
            <div
              className="flex items-center justify-between mb-5"
              onClick={ToggleJoinUs}
            >
              <h4 className="text-base uppercase">Join Us</h4>
              <span className=" md:hidden">
                {joinUs ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            <div className={` ${joinUs ? "hidden" : "block"}`}>
              <p className="pb-5">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <div className="flex items-center mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-300  px-4 py-2 w-64 focus:outline-none "
                />
                <button className="bg-yellow-800 text-white px-4 py-2 ml-2 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm">
          <p className="mb-2">Copyright © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
