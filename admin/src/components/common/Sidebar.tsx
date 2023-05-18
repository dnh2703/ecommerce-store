import useComponentVisible from "../../hooks/useComponentVisible";
import { NavLink, useNavigate } from "react-router-dom";
import appRoutes from "../../routes/appRoutes";
import authApi from "../../api/authApi";

const Sidebar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const navigate = useNavigate();
  const logout = () => {
    authApi
      .logout()
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => alert("123"));
  };

  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsComponentVisible(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isComponentVisible && "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
        ref={ref}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            id="dropdownUserNameButton"
            data-dropdown-toggle="dropdownUserName"
            className="flex items-center justify-between my-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <div className="flex items-center">
              <img
                src="https://i1.sndcdn.com/avatars-000304411295-zx2krs-t500x500.jpg"
                className="w-8 h-8 rounded-full mr-3"
                alt="Bonnie avatar"
              />
              <div className="text-left">
                <div className="font-bold">Batman</div>
                <div className="text-sm text-gray-400 ">
                  admin@gmail.com
                </div>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <form className="mb-4">
            <label
              htmlFor="default-search"
              className=" text-md font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ..."
                required
              />
            </div>
          </form>

          <ul className="space-y-2 font-medium">
            {appRoutes.map((route, index) => {
              return (
                <li key={route.sidebarProps?.displayText}>
                  <NavLink to={`${route.path}`}>
                    {({ isActive, isPending }) => (
                      <div
                        className={
                          isActive
                            ? "bg-gray-700 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                            : "flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                        }
                      >
                        <div
                          className={`transition duration-75 ${
                            isActive ? "dark:text-white" : "dark:text-gray-400"
                          } group-hover:text-gray-900 dark:group-hover:text-white`}
                        >
                          {route.sidebarProps?.icon}
                        </div>
                        <span className="ml-3">
                          {route.sidebarProps?.displayText}
                        </span>
                      </div>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <div className="cursor-pointer flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <div className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <i className="ri-file-text-fill"></i>
                </div>
                <span className="ml-3">Documentation</span>
              </div>
            </li>
            <li>
              <div
                onClick={logout}
                className="cursor-pointer flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <div className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <i className="ri-logout-box-r-fill "></i>
                </div>
                <span className="ml-3">Sign out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
