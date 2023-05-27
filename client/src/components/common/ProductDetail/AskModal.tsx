import * as React from "react";

import CloseButton from "../CloseButton";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface Customer {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function AskModal(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Onsubmit = () => {
    Swal.fire(
      "Thank you for asking!",
      "We will answer your question as soon as possible",
      "success"
    );
    props.closeModal();
  };
  return (
    <div className="fixed z-50 w-full h-[100vh] top-0 left-0 ">
      <div
        onClick={props.closeModal}
        className="absolute w-full h-[100vh] top-0 left-0 bg-stone-950 opacity-60 "
      ></div>
      <div className="h-4/5 absolute z-[3]  translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 bg-gray-100 w-[500px] p-8 animate-[modalHeight_0.5s_ease-in-out]  overflow-y-scroll">
        <div className="border-b-[1px] flex justify-between border-gray-300 mb-8">
          <h2 className="pb-4 text-3xl border-b-2 border-black inline-block">
            Ask a question
          </h2>
          <div>
            <CloseButton closeModal={props.closeModal} />
          </div>
        </div>
        <form onSubmit={handleSubmit(Onsubmit)} className="text-sm">
          <div className="flex gap-4 w-full mb-5">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                className="bg-gray-200 leading-[50px] basis-1/2 px-5"
                type="text"
              />
              {errors.name?.type === "required" && (
                <span className="text-xs text-red-500">
                  Your name is required
                </span>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
                placeholder="Your email"
                className="bg-gray-200 leading-[50px] basis-1/2 px-5"
                type="email"
              />
              {errors.email?.type === "required" && (
                <span className="text-xs text-red-500">Email is required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-xs text-red-500">
                  Enter an invalid email
                </span>
              )}
            </div>
          </div>
          <div className="mb-5">
            <input
              placeholder="Phone number (Optional)"
              className="bg-gray-200 leading-[50px] w-full outline-none px-5"
              type="text"
            />
          </div>
          <div className="mb-5">
            <textarea
              {...register("message", { required: true })}
              placeholder="Your message..."
              className="bg-gray-200 h-52 leading-[50px] w-full outline-none px-5"
            />
            {errors.message?.type === "required" && (
              <span className="text-xs text-red-500">Message is required</span>
            )}
          </div>
          <div className="group/message">
            <button
              type="submit"
              className=" uppercase mb-6 leading-[50px] w-full border-black border hover:border-[#6e2f1b] relative text-white text-xs tracking-[3px]"
            >
              <div className="w-0 z-0 h-full group-hover/message:w-full duration-500 bg-[#6e2f1b] absolute"></div>
              <span className="group-hover/message:text-white duration-500 text-black z-[1] relative">
                send message
              </span>
            </button>
          </div>
          <div className="flex">
            <div className="basis-1/5 mr-5">
              <img src={props.product?.image} alt="" />
            </div>
            <div className="basis-4/5 flex flex-col justify-center gap-2">
              <p className="capitalize">{props.product?.name}</p>
              <p className="text-gray-400">
                ${props.product?.price && props.product?.price / 100}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
