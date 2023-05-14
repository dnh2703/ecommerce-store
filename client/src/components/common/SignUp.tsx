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
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const TogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const onSubmit = async (data: IRegisterForm) => {
  //   try {
  //     await axios.post("auth/register", data);
  //     setIsSuccess(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const onSubmit = (data: IRegisterForm) => {
    setLoading(true);
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
            {...register("name", { required: true, pattern: /^[^\s]+$/ })}
            className=" appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
          {errors.name?.type == "required" && (
            <span className="text-red-500 text-xs">Name is required</span>
          )}
          {errors.name?.type == "pattern" && (
            <span className="text-red-500 text-xs">Space is not valid</span>
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
        <div className="mb-4 relative">
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            })}
            className=" appearance-none border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Password"
            type={showPassword ? "password" : "text"}
          />

          <button
            type="button"
            onClick={TogglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
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
          {errors.password?.type == "pattern" && (
            <span className="text-red-500 text-xs">
              Password must be have at least one number, one lowercase letter
              and one uppercase letter.
            </span>
          )}
        </div>
        <div>
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
            disabled={loading || isSuccess}
          >
            {loading ? (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              "Register"
            )}
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
