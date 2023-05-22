import * as React from "react";
import { Link } from "react-router-dom";
import { ProductRoute } from "../ProductCatalog/ProductCatalogComponent";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function Information(props: any) {
  let [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="p-14 basis-[60%]">
      <p>
        <Link className="text-2xl font-medium" to={"/home"}>
          4bros - Ecommerce
        </Link>
      </p>
      <nav className="flex items-center my-6 ">
        <ProductRoute name="cart"></ProductRoute>
        <i
          style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
          className="fa-solid fa-angle-right"
        ></i>
        <Typography
          className="capitalize"
          sx={{
            fontSize: 12,
            fontWeight: "bold",
            marginRight: "10px",
            cursor: "default",
          }}
        >
          Information
        </Typography>
        <i
          style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
          className="fa-solid fa-angle-right"
        ></i>
        <ProductRoute main="check-out" name="shipping"></ProductRoute>
        <i
          style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
          className="fa-solid fa-angle-right"
        ></i>
        <Typography
          className="capitalize"
          sx={{
            fontSize: 12,
            marginRight: "10px",
            opacity: "0.4",
            cursor: "default",
          }}
        >
          Payment
        </Typography>
      </nav>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium">Contact</p>
        <p className="text-sm">
          Already have an account?{" "}
          <a className="underline text-blue-800 cursor-pointer"> Log in</a>
        </p>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-gray-300 outline-none py-4 text-sm rounded-lg px-5 w-full"
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="default-checkbox" className="text-sm">
          Email me with news and offers
        </label>

        <div className="flex flex-wrap">
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
