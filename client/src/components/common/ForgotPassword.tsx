import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authApi from "../../api/authApi";
import { IForgotPassword } from "../../interfaces/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export default function ForgotPassword(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const { setForgotPassword } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const [errmessage, setErrmessage] = useState("");
  const [succesmessage, setSuccesmessage] = useState("");

  const handleSubmitForgotPassword = (data: IForgotPassword) => {
    setLoading(true);
    console.log(data);
    authApi
      .forgotPassword(data)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccesmessage(
            "We've sent you an email with a link to update your password."
          );
        }
      })

      .catch((err) => {
        setLoading(false);
        setErrmessage("No account found with that email.");
      });
  };
  const handleSetForgotPassword = () => {
    setForgotPassword();
  };
  return (
    <div className="w-2/4 box-border max-[700px]:w-full mb-8">
      <div>
        <h1 className="text-4xl">Reset your password</h1>
        <p className="my-6 text-xl text-gray-500">
          We will send you an email to reset your password.
        </p>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForgotPassword)}>
        <div className="text-red-600 ">
          {errmessage && <p className="">{errmessage}</p>}
          <div className="text-green-600 ">
            {succesmessage && (
              <p className="">
                {succesmessage}
                <span
                  onClick={handleSetForgotPassword}
                  className=" underline ml-2 text-xl"
                >
                  login here
                </span>
              </p>
            )}
          </div>
        </div>

        <input
          className="border border-slate-400 h-12 w-full mt-4 max-[700px]:w-full pl-2 mb-2 "
          id="email"
          placeholder="Email"
          {...register("email", {
            required: true,

            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600">you can not your email</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="  text-red-600">Please enter a valid email address</p>
        )}
        <div className="mt-6">
          <button className=" text-xl  border border-slate-400 h-14 w-1/2 hover:bg-red-900 bg-slate-900 text-white  max-[700px]:w-full">
            {loading ? "loading..." : "SUBMIT"}
          </button>
          <p
            onClick={handleSetForgotPassword}
            className="max-[700px]:w-full max-[700px]: mt-4  text-xl w-2/4 inline-block text-center cursor-pointer underline"
          >
            Cancel
          </p>
        </div>
      </form>
    </div>
  );
}
