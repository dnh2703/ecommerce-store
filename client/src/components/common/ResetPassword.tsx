import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import authApi from "../../api/authApi";

const ResetPassword = () => {
  let [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({});

  useEffect(() => {
    if (typeof email === "string") {
      setValue("email", email);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (typeof token === "string") {
      authApi
        .resetPassword({ ...data, token })
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <div className="pt-28 flex items-center flex-col gap-5">
      <div>
        <p className="font-semibold text-3xl">Reset Password</p>
      </div>
      <form className="max-w-3xl" onSubmit={onSubmit}>
        <input
          type="text"
          className="border border-gray-400 p-4 w-full mb-3 bg-gray-200 text-gray-400 cursor-not-allowed"
          placeholder="Email"
          disabled
          {...register("email")}
        />
        <input
          type="password"
          className="border border-gray-400 p-4 w-full mb-3"
          placeholder="Password"
          {...register("password")}
        />
        <input
          type="password"
          className="border border-gray-400 p-4 w-full mb-3"
          placeholder="Confirm password"
        />
        <input
          type="submit"
          className="bg-gray-900 text-white hover:bg-orange-900 transition-all p-4 w-full mb-3"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
