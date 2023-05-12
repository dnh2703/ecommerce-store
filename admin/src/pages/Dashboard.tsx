import Chart from "../components/common/Chart";

const Dashboard = () => {
  return (
    <div className="md:p-4 ">
      <div className="  flex items-center justify-between">
        <div>
          <p className="text-white self-center text-xl font-semibold whitespace-nowrap">
            Welcome back, Johnny Dang
          </p>
          <p className="text-gray-400 text-base font-thin pt-1 pb-4">
            Here's what's happening with your store today.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col justify-between p-4 h-40 rounded bg-gray-50 dark:bg-gray-800">
          <p className="">
            <i className="text-xl ri-exchange-dollar-fill text-white bg-gray-600 inline-block rounded-full h-7 w-7 text-center mr-2"></i>
            <span className="text-white text-sm">Total sales</span>
          </p>
          <div className="mt-6">
            <p className="text-2xl  text-white font-semibold">$821,45.54</p>
            <div className="flex justify-between pt-2 text-green-400">
              <p className="">
                <i className="ri-arrow-right-up-line "></i>
                <span className="font-semibold">20.9%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 h-40 rounded bg-gray-50 dark:bg-gray-800">
          <p className="">
            <i className="text-xl ri-exchange-dollar-fill text-white bg-gray-600 inline-block rounded-full h-7 w-7 text-center mr-2"></i>
            <span className="text-white text-sm">Total sales</span>
          </p>
          <div className="mt-6">
            <p className="text-2xl  text-white font-semibold">$821,45.54</p>
            <div className="flex justify-between pt-2 text-green-400">
              <p className="">
                <i className="ri-arrow-right-up-line "></i>
                <span className="font-semibold">20.9%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 h-40 rounded bg-gray-50 dark:bg-gray-800">
          <p className="">
            <i className="text-xl ri-exchange-dollar-fill text-white bg-gray-600 inline-block rounded-full h-7 w-7 text-center mr-2"></i>
            <span className="text-white text-sm">Total sales</span>
          </p>
          <div className="mt-6">
            <p className="text-2xl  text-white font-semibold">$821,45.54</p>
            <div className="flex justify-between pt-2 text-green-400">
              <p className="">
                <i className="ri-arrow-right-up-line "></i>
                <span className="font-semibold">20.9%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 h-40 rounded bg-gray-50 dark:bg-gray-800">
          <p className="">
            <i className="text-xl ri-exchange-dollar-fill text-white bg-gray-600 inline-block rounded-full h-7 w-7 text-center mr-2"></i>
            <span className="text-white text-sm">Total sales</span>
          </p>
          <div className="mt-6">
            <p className="text-2xl  text-white font-semibold">$821,45.54</p>
            <div className="flex justify-between pt-2 text-red-400">
              <p className="">
                <i className="ri-arrow-right-down-line "></i>
                <span className="font-semibold">20.9%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[430px] mb-4 rounded bg-gray-50 dark:bg-gray-800 pb-8 pt-6 px-4">
        <p className="text-center">
          <span className="text-white text-xl font-semibold">Total sales</span>
        </p>
        <div className="pt-4">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
