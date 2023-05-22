import * as React from "react";

export default function Heading() {
  return (
    <div>
      <p className="text-center text-[40px] pb-16">Shopping Cart</p>
      <div className="text-center">
        <div className="flex justify-center items-center ">
          <div className="rounded-lg h-1 w-1/2 bg-gray-200 relative">
            <div className="rounded-lg h-1 w-full animate-way bg-[#6e2f1b]"></div>
            <div className="animate-truck border-[#6e2f1b] right-[-3%] text-[#6e2f1b] absolute top-[-370%]  p-2 rounded-full border bg-white">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 mb-12 text-center text-gray-500 text-sm">
        Congratulations , you've got free shipping!
      </p>
    </div>
  );
}
