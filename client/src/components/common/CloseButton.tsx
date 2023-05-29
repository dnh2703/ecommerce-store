import * as React from "react";

export default function CloseButton(props: any) {
  return (
    <div
      onClick={props.closeModal}
      className=" w-8 h-8 flex justify-center items-center border rounded-full bg-white group/x"
    >
      <div className="relative  w-8 h-8 cursor-pointer">
        <i className="text-[8px] group-hover/x:rotate-[-38deg] duration-[0.4s] fa-solid fa-slash fa-flip-both absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
        <i className="text-[8px] fa-solid fa-slash  group-hover/x:rotate-[142deg] duration-[0.4s] rotate-[100deg] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></i>
      </div>
    </div>
  );
}
