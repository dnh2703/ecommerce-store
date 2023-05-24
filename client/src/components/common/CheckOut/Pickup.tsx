import * as React from "react";

export default function Pickup(props: any) {
  return (
    <div>
      <p className="text-lg font-medium mb-2">Pickup locations</p>
      <p className="text-sm mb-4 text-gray-500 ">
        There is 1 store with stock close to your location
      </p>
      <div className="bg-blue-50 border border-blue-400 flex px-2 py-5 rounded-lg">
        <div className="basis-1/2 mx-2">
          <p className="text-sm">Cau Giay, Hanoi, Vietnam</p>
          <p className="text-gray-500 text-xs">
            17 Duy Tan, Cau Giay, Hanoi, Vietnam
          </p>
        </div>
        <div className="basis-1/2 text-right mx-2">
          <p className="font-medium text-sm">Free</p>
          <p className="text-gray-500 text-xs">Usually ready in 24 hours</p>
        </div>
      </div>
    </div>
  );
}
