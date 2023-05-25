import { type } from "os";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authApi from "../../api/authApi";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ILoginForm } from "../../interfaces/auth";
import Cookies from "js-cookie";
const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginForm>();

  const [loading, setLoading] = useState(false);

  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  const [checkPassword, setCheckPassword] = useState<boolean>(false);

  const onSubmit = (data: ILoginForm) => {
    setLoading(true);
    async function PostApi() {
      await authApi
        .login(data)
        .then((res) => {
          if (res.status == 200) {
            alert("successful login");
            Cookies.set("accessToken", res.data.accessToken);
            Cookies.set("refreshToken", res.data.refreshToken);
            const useJson = JSON.stringify(res.data.user);

            localStorage.setItem("user", useJson);

            navigate("/account/customer-profile");
          }
        })
        .catch((error: AxiosError) => {
          alert(error);
        });
    }
    PostApi();
  };

  const handleCheckPassword = () => {
    setCheckPassword(!checkPassword);
  };

  return accessToken || refreshToken ? (
    <Navigate to="/" />
  ) : (
    <div className="box-border px-10 flex w-full container justify-between mx-auto ">
      <div className="">
        <h1 className="text-6xl text-center">Account</h1>

        <div className="flex justify-between items-start   max-[700px]:block">
          <div className="w-2/4 mx-3 max-[700px]:w-full">
            <div>
              <h1 className="text-4xl">Sign In</h1>
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
                      <p className="text-red-600">you can not your email</p>
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
                      minLength: 5,
                      maxLength: 30,
                      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
                    })}
                  />
                  <button
                    className="absolute right-4 top-8 "
                    onClick={handleCheckPassword}
                  >
                    <i className="fa-solid fa-eye "></i>
                  </button>
                  <div>
                    {errors.password?.type === "required" && (
                      <p className="text-left text-red-600">
                        you can not your password
                      </p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className=" text-red-600">min length 5</p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className=" text-red-600">Max length 30</p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="  text-red-600">
                        Password must be have at least one number, one lowercase
                        letter and one uppercase letter.
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p className=" mt-6  mb-6">Forgot your password</p>
                </div>
                <div>
                  <button className="border border-slate-400 h-12 w-full hover:bg-red-900 bg-slate-900 text-white  max-[700px]:w-full">
                    {loading ? "loading..." : " Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" w-2/4 mx-20  max-[700px]:w-full ">
            <div className="max-[700px]:w-full">
              <h1 className="text-4xl mb-10">new customer?</h1>
              <div>
                <p className="text-2xl text-slate-500 leading-normal mb-7 w-3/4">
                  Sign up for early Sale access plus tailored new arrivals,
                  trends and promotions. To opt out, click unsubscribe in our
                  emails.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="h-12 border border-slate-500 w-36 hover:bg-red-900 bg-slate-900 text-white"
                >
                  <Link to="/account/register"> REGISTER</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
