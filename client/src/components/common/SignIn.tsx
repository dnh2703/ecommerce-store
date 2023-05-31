import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authApi from "../../api/authApi";
import { useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import { AxiosError } from "axios";
import { ILoginForm } from "../../interfaces/auth";
import Cookies from "js-cookie";
import ForgotPassword from "./ForgotPassword";
import Container from "@mui/material/Container";
import Swal from "sweetalert2";

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
            const userJson = JSON.stringify(res.data.user);
            localStorage.setItem("user", userJson);
            Swal.fire(
              "Success!",
              `Hi ${res.data.user.name}, Welcome back!`,
              "success"
            ).then((res) => navigate("/account/customer-profile"));
          }
        })
        .catch((err) => {
          Swal.fire("Sorry :(", "Your password is not correct", "error");
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
        <Container maxWidth="lg">
          <div className="box-border px-10 flex w-full mt-[86.8px] ">
            <div className="">
              <h2 className="text-5xl text-center my-10">Account</h2>
              <div className="flex max-md:flex-wrap items-start mb-28 gap-10">
                {forgotPassword ? (
                  <>
                    <div className="w-2/4 max-md:w-full">
                      <div>
                        <h2 className="text-2xl mb-7">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <input
                              className="border border-slate-400 w-full py-3 px-5 "
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
                                <p className="text-red-600 mt-1 text-xs">
                                  Enter a valid email
                                </p>
                              )}
                              {errors.email?.type === "minLength" && (
                                <p className="  text-red-600 mt-1 text-xs">
                                  min length 5
                                </p>
                              )}
                              {errors.email?.type === "maxLength" && (
                                <p className="  text-red-600 mt-1 text-xs">
                                  Max length 30
                                </p>
                              )}
                              {errors.email?.type === "pattern" && (
                                <p className="  text-red-600 mt-1 text-xs">
                                  Please enter a valid email address
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="relative">
                            <input
                              type={checkPassword ? "text" : "password"}
                              className="border border-slate-400 py-3 my-3 px-5 w-full max-[700px]:w-full"
                              id="password"
                              placeholder="Password"
                              {...register("password", {
                                required: true,
                              })}
                            />
                            <div
                              className="absolute top-1/2 right-4 cursor-pointer translate-y-[-50%]"
                              onClick={handleCheckPassword}
                            >
                              <i className="fa-solid fa-eye "></i>
                            </div>
                          </div>

                          <div>
                            <p
                              onClick={handleForgotPassword}
                              className="underline mt-6  mb-6  cursor-pointer"
                            >
                              Forgot your password?
                            </p>
                          </div>

                          <div>
                            <button className="border border-slate-400 uppercase text-xs tracking-[3px] h-12 w-full hover:bg-red-900 bg-slate-900 text-white  max-[700px]:w-full">
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
                <div className=" w-2/4 mx-3   max-md:w-full ">
                  <div className="">
                    <h2 className="text-2xl mb-6">New Customers?</h2>
                    <div>
                      <p className="text-md text-slate-500 mb-6 leading-normal">
                        Sign up for early Sale access plus tailored new
                        arrivals, trends and promotions. To opt out, click
                        unsubscribe in our emails.
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => navigate("/account/register")}
                        type="button"
                        className="h-12 text-xs tracking-[3px] border border-slate-500 w-36 hover:bg-red-900 bg-slate-900 text-white"
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default SignIn;
