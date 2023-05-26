import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import authApi from "../../api/authApi";
import LoadingPage from "./LoadingPage";

const VerifyEmail = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("email"));
  console.log(searchParams.get("token"));
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
      <div className="mt-20 pt-20 text-center text-4xl">
        Email verified successfully!
      </div>
    );
  }

  return (
    <div className="mt-20 pt-20 text-center text-4xl">
      Email verification failed.
    </div>
  );
};

export default VerifyEmail;
