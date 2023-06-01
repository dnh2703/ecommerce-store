import { Link } from "react-router-dom";
import "../../scss/styleactive.scss";
import { useEffect, useState } from "react";
import authApi from "../../api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import orderApi from "../../api/orderApi";
import LoadingPage from "./LoadingPage";
import Container from "@mui/material/Container";

const CustomerProfile = () => {
  const navigate = useNavigate();
  let [orders, setOrders] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    const userJson = user ? JSON.parse(user) : null;

    return userJson;
  });

  const LogoutToken = () => {
    authApi
      .logout()
      .then((res) => {
        if (res.status === 200) {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          window.scrollTo(0, 0);
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    orderApi
      .getCurrentUserOrders()
      .then((res) => setOrders(res.data?.orders))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <div className=" box-border mx-9 pb-28 max-sm:mx-1 pt-[86.8px]">
            <h2 className="text-5xl text-center my-10">My Account</h2>

            <div className="flex max-md:block gap-7">
              <div className="basis-[25%] max-md:w-full  mb-7">
                <p className=" border flex items-center py-3 px-5 bg-orange-900 text-white">
                  Dashboard
                </p>

                <p
                  onClick={LogoutToken}
                  className="cursor-pointer  flex items-center  border py-3 px-5"
                >
                  Log out
                </p>
              </div>
              <div className="basis-[75%] max-md:w-full">
                <div className="mb-5 text-sm page-account__welcome">
                  <p className="mb-4  text-slate-500">
                    Hello <strong>{user.name}</strong> ( not{" "}
                    <strong>{user.name}</strong>?
                    <span
                      onClick={LogoutToken}
                      className="cursor-pointer ml-1 text-red-500"
                    >
                      Log Out
                    </span>
                    )
                  </p>
                  <p className=" text-slate-500">
                    Email: <strong>{user.email}</strong>
                  </p>
                </div>
                <div className="">
                  <h2 className=" text-xl mb-2">Order History</h2>
                  <div className="box-account__content">
                    {orders?.length > 0 ? (
                      <div className=" text-slate-500">
                        <i className="fa-solid fa-clock mr-2 text-orange-400"></i>
                        <Link
                          to="/account/orders"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className="text-orange-400 mr-2"
                        >
                          SHOW YOUR ORDERS
                        </Link>
                        You have {orders.length} order(s)
                      </div>
                    ) : (
                      <div className=" text-slate-500">
                        <i className="fa-solid fa-circle-exclamation mr-2 text-lime-600"></i>
                        <Link
                          to="/products"
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                          className="text-lime-600 mr-2"
                        >
                          CREARTE YOUR FISRST ORDER
                        </Link>
                        You haven't placed any orders yet.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
export default CustomerProfile;
