import * as React from "react";

export default function ProductsSkeleton() {
  return (
    <div className="animate-pulse pt-10 mt-[86.8px] px-5">
      <div className="flex items-center w-full justify-center flex-col mb-10 pb-8">
        <div className="bg-slate-200 h-[50px] w-[199px] rounded mb-5"></div>
        <div className="bg-slate-200 h-[18px] w-[122px] rounded"></div>
      </div>
      <div className="flex px-6 ">
        <div className="basis-1/4 max-lg:hidden max-h-[950px] shadow rounded-md p-4 border border-gray-300">
          <div>
            <div className="bg-slate-200 h-[24px] w-full rounded mb-4"></div>
            <div className="bg-slate-200 h-[120px] w-full rounded mb-9"></div>
          </div>
          <div>
            <div className="bg-slate-200 h-[24px] w-full rounded mb-4"></div>
            <div className="bg-slate-200 h-[60px] w-full rounded mb-9"></div>
          </div>
          <div>
            <div className="bg-slate-200 h-[24px] w-full rounded mb-4"></div>
            <div className="bg-slate-200 h-[40px] w-full rounded mb-9"></div>
          </div>
          <div>
            <div className="bg-slate-200 h-[24px] w-full rounded mb-4"></div>
            <div className="bg-slate-200 h-[120px] w-full rounded mb-9"></div>
          </div>
          <div>
            <div className="bg-slate-200 h-[24px] w-full rounded mb-4"></div>
            <div className="bg-slate-200 h-[90px] w-full rounded"></div>
            <hr className="my-5" />
            <div className="bg-slate-200 h-[90px] w-full rounded"></div>
          </div>
        </div>
        <div className="basis-3/4 max-sm:ml-0 max-lg:basis-full shadow rounded-md p-4 border border-gray-300 ml-5 items-start flex flex-col">
          <div className="bg-slate-200 h-[40px] w-[187px] rounded my-4"></div>
          <div
            style={{ alignSelf: "end" }}
            className="bg-slate-200 h-[33px] w-[150px] rounded"
          ></div>
          <div className="flex w-full my-6 gap-10">
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
          </div>
          <div className="flex w-full my-6 gap-10">
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
          </div>
          <div className="flex w-full my-6 gap-10">
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
          </div>
          <div className="flex w-full my-6 gap-10">
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
            <div className=" basis-1/3 mt-10 ">
              <div className="w-full pt-[100%] bg-slate-200 rounded"></div>
              <div className="my-2 bg-slate-200 w-[90px] rounded h-4"></div>
              <div className="my-2 bg-slate-200 w-[135px] rounded h-6"></div>
              <div className="my-2 bg-slate-200 w-[70px] rounded h-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
