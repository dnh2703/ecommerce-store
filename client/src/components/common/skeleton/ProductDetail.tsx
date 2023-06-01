import * as React from "react";

export default function SkeletonProductDetail() {
  return (
    <div className="animate-pulse px-8 max-sm:px-0 mt-[100px]">
      <div className="px-6">
        <div className="py-5">
          <div className="bg-slate-200 h-[18px] w-[240px] rounded"></div>
        </div>
        <div className="flex gap-20 max-lg:flex-wrap">
          <div className="basis-1/2 max-lg:basis-full">
            <div className="bg-slate-200 pt-[100%] w-full rounded"></div>
          </div>
          <div className="basis-1/2 max-lg:basis-full">
            <div>
              <div className="bg-slate-200 h-4 w-[90px] rounded mb-2"></div>
              <div className="py-1  mb-2">
                <div className="bg-slate-200 h-9 w-[240px] rounded"></div>
              </div>
              <div className="bg-slate-200 h-8 w-[100px] rounded mb-3"></div>
              <div className="py-4">
                <div className="bg-slate-200 h-5 w-[70px] rounded"></div>
              </div>
            </div>

            <hr />
            <div>
              <div className="bg-slate-200 h-[18px] w-[90px] rounded my-7"></div>
              <div className="bg-slate-200 h-[18px] w-[200px] rounded my-7"></div>
              <div className="bg-slate-200 h-[18px] w-[200px] rounded my-7"></div>
              <div className="bg-slate-200 h-1 w-full rounded mt-4"></div>
            </div>
            <div className="flex flex-col my-5">
              <div className="my-4 h-[55px] w-full flex gap-4">
                <div className="bg-slate-200 h-full rounded basis-1/4"></div>
                <div className="bg-slate-200 h-full rounded basis-3/5"></div>
                <div className="bg-slate-200 h-full rounded basis-[10%]"></div>
              </div>
              <div className="bg-slate-200 h-4 rounded w-[240px]"></div>
              <div className="bg-slate-200 h-[50px] rounded w-full my-5"></div>
            </div>
            <div className="flex pb-1">
              <div className="bg-slate-200 h-[22px] rounded w-[140px] mr-4"></div>
              <div className="bg-slate-200 h-[22px] rounded w-[170px]"></div>
            </div>
            <div className="bg-slate-200 h-[131px] rounded w-full my-4"></div>
            <div className="bg-slate-200 h-[104px] rounded w-full my-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
