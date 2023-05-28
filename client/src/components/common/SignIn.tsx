import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authApi from "../../api/authApi";
import { useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import { AxiosError } from "axios";
import { ILoginForm } from "../../interfaces/auth";
import Cookies from "js-cookie";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [forgotPassword, setForgotPassword] = useState<boolean>(true);

  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [error, setError] = useState("");

  const refreshToken = Cookies.get("refreshToken");
  const accessToken = Cookies.get("accessToken");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = (data: ILoginForm) => {
    setLoading(true);
    async function PostApi() {
      await authApi
        .login(data)
        .then((res) => {
          if (res.status === 200) {
            Cookies.set("accessToken", res.data.accessToken);
            Cookies.set("refreshToken", res.data.refreshToken);
            const useJson = JSON.stringify(res.data.user);

            localStorage.setItem("user", useJson);

            navigate("/account/customer-profile");
          }
        })
        .catch((err) => {
          setError(`${err.response?.data.msg}`);
        })
        .finally(() => setLoading(false));
    }
    PostApi();
  };

  const handleCheckPassword = () => {
    setCheckPassword(!checkPassword);
  };
  const handleForgotPassword = () => {
    setForgotPassword(false);
  };

  return (
    <>
      {accessToken && refreshToken ? (
        <Navigate to="/account/customer-profile" />
      ) : (
        <div className="box-border px-10 flex w-full justify-between mt-24 ">
          <div className="">
            <h1 className="text-6xl text-center mb-8">Account</h1>

            <div className="flex justify-between items-start   max-[700px]:block mb-28 gap-20">
              {forgotPassword ? (
                <>
                  <div className="w-2/4 mx-3 max-[700px]:w-full">
                    <div>
                      <h1 className="text-4xl">Sign In</h1>
                      <div>
                        <p className="text-red-500">{error}</p>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                          <input
                            className="border border-slate-400 h-12 w-full mt-4 max-[700px]:w-full pl-2 mb-2 "
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                              required: true,
                              minLength: 5,
                              maxLength: 30,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          <div>
                            {errors.email?.type === "required" && (
                              <p className="text-red-600">
                                you can not your email
                              </p>
                            )}
                            {errors.email?.type === "minLength" && (
                              <p className="  text-red-600">min length 5</p>
                            )}
                            {errors.email?.type === "maxLength" && (
                              <p className="  text-red-600">Max length 30</p>
                            )}
                            {errors.email?.type === "pattern" && (
                              <p className="  text-red-600">
                                Please enter a valid email address
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            type={checkPassword ? "text" : "password"}
                            className="border border-slate-400 h-12 w-full mt-5 max-[700px]:w-full  pl-2 mb-2"
                            id="password"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                            })}
                          />
                          <p
                            className="absolute right-4 top-8 "
                            onClick={handleCheckPassword}
                          >
                            <i className="fa-solid fa-eye "></i>
                          </p>
                        </div>

                        <div>
                          <p
                            onClick={handleForgotPassword}
                            className="underline mt-6  mb-6  cursor-pointer"
                          >
                            Forgot your password!
                          </p>
                        </div>

                        <div>
                          <button className="border border-slate-400 h-12 w-full hover:bg-red-900 bg-slate-900 text-white  max-[700px]:w-full">
                            {loading ? "loading..." : " Sign In"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <ForgotPassword
                  setForgotPassword={() => {
                    setForgotPassword(!forgotPassword);
                  }}
                />
              )}
              <div className=" w-2/4 mx-3   max-[700px]:w-full max-[700px]:mt-20">
                <div className="max-[700px]:w-full">
                  <h1 className="text-4xl mb-10">New customer?</h1>
                  <div>
                    <p className="text-2xl text-slate-500 leading-normal mb-7 w-3/4">
                      Sign up for early Sale access plus tailored new arrivals,
                      trends and promotions. To opt out, click unsubscribe in
                      our emails.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => navigate("/account/register")}
                      type="button"
                      className="h-12 border border-slate-500 w-36 hover:bg-red-900 bg-slate-900 text-white"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
