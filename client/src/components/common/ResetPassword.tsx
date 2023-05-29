import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import Swal from "sweetalert2";

const ResetPassword = () => {
  let [searchParams] = useSearchParams();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<{ email: string; password: string; confirm_password: string }>(
    {}
  );

  useEffect(() => {
    if (typeof email === "string") {
      setValue("email", email);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (typeof token === "string") {
      authApi
        .resetPassword({ ...data, token })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Password has been reset",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/account/login");
        })
        .catch((err) => {
          setErr("Email is not valid");
        });
    }
  });

  return (
    <div className="pt-28 flex items-center flex-col gap-5 max-w-2xl mx-auto">
      <div>
        <p className="font-semibold text-3xl">Reset Password</p>
      </div>
      <div className={`bg-red-500 w-full ${err && "p-4"} text-white`}>
        {err}
      </div>
      <form className="" onSubmit={onSubmit}>
        <input
          type="text"
          className="border border-gray-400 p-4 w-full my-3 bg-gray-200 text-gray-400 cursor-not-allowed"
          placeholder="Email"
          disabled
          {...register("email")}
        />
        <input
          type="password"
          className="border border-gray-400 p-4 w-full my-3"
          placeholder="New password"
          {...register("password", {
            required: {
              value: true,
              message: "New password is required",
            },
            minLength: {
              value: 6,
              message: "New password must be at least 6 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
              message: `Password must be have at least one number, one lowercase letter
              and one uppercase letter.`,
            },
            maxLength: {
              value: 30,
              message: "New password must be at maximum 30 characters",
            },
          })}
        />
        <span className="text-red-500 font-light">
          {errors.password && `${errors.password.message}`}
        </span>

        <input
          type="password"
          className="border border-gray-400 p-4 w-full my-3"
          placeholder="Confirm new password"
          {...register("confirm_password", {
            required: {
              value: true,
              message: "Confirm new password is required",
            },
            validate: (value) => {
              if (value !== watch("password")) {
                return "New password does not match";
              }
            },
          })}
        />
        <span className="text-red-500 font-light">
          {errors.confirm_password && `${errors.confirm_password.message}`}
        </span>
        <input
          type="submit"
          className="bg-gray-900 text-white hover:bg-orange-900 transition-all p-4 w-full mb-3"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
