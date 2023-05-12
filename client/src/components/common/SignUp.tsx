import { useForm } from "react-hook-form";
import { IRegisterForm } from "../../interfaces/auth";
import { useState } from "react";
import axios from "axios";
import authApi from "../../api/authApi";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const [isSuccess, setIsSuccess] = useState(false);

  // const onSubmit = async (data: IRegisterForm) => {
  //   try {
  //     await axios.post("auth/register", data);
  //     setIsSuccess(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
    authApi
      .register(data)
      .then((res) => {
        setIsSuccess(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-20">
      <h1 className="text-center text-5xl">Create Account</h1>
      <form
        className="bg-white  rounded-none px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            {...register("name", { required: true })}
            className=" appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className=" appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
          {errors.email?.type == "required" && (
            <span className="text-red-500 text-xs">
              Please enter email address
            </span>
          )}
          {errors.email?.type == "pattern" && (
            <span className="text-red-500 text-xs">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            {...register("password", { required: true, minLength: 6 })}
            className=" appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
          {errors.password?.type == "required" && (
            <span className="text-red-500 text-xs">
              Please enter the password
            </span>
          )}
          {errors.password?.type == "minLength" && (
            <span className="text-red-500 text-xs">
              Password must be at least 6 characters
            </span>
          )}
          <p className="mt-5 text-sm">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions.
          </p>
          <p className="mb-5 text-sm ">
            To opt out, click unsubscribe in our emails.
          </p>
        </div>
        <div>
          <button
            className="bg-gray-900 hover:bg-orange-900 text-white  py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full mb-5"
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          <button
            className=" hover:bg-orange-900 hover:text-white text-orange-900 py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full border"
            type="button"
            onClick={() => {
              // Redirect to sign-in page
              // Add your own logic here
            }}
          >
            Sign In
          </button>
        </div>
      </form>
      {isSuccess && (
        <div className="bg-green-200 text-green-800 p-4 rounded">
          Registration successful! Please check your email to verify your
          account.
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
