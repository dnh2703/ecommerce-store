import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import authApi from "../../api/authApi";
import LoadingPage from "./LoadingPage";

const VerifyEmail = () => {
  let [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<any>(null);
  useEffect(() => {
    setIsLoading(true);
    if (email && token) {
      authApi
        .verifyEmail({ email, verificationToken: token })
        .then(() => {
          // Handle successful email verification

          setVerificationStatus("success");
        })
        .catch((error) => {
          // Handle error during email verification

          setVerificationStatus("error");
        })
        .finally(() => setIsLoading(false));
    }
  }, [email, token]);
  if (isLoading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (verificationStatus === "success") {
    return (
      <div className="mt-20 py-20 text-center ">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-white bg-green-500 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <p className="text-4xl inline-flex items-center pt-4">
          Email verified successfully!
        </p>
        <p className="text-xl mt-2">Your account has been verified.</p>
        <div className="mt-6">
          <Link to="/" className="bg-slate-900 text-lg px-4 py-3 text-white">
            Go to home page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 py-20 text-center ">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-white bg-red-500 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <p className="text-4xl inline-flex items-center pt-4">
        Email verified unsuccessfully!
      </p>
      <p className="text-xl mt-2">
        This verification link is either invalid or has expire.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-slate-900 text-base px-4 py-3 text-white font-light"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
