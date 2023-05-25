import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  let [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  

  

  return <div>ResetPassword</div>;
};

export default ResetPassword;
