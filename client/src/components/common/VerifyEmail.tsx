import { useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("email"));
  console.log(searchParams.get("token"));

  return <div>VerifyEmail</div>;
};

export default VerifyEmail;
