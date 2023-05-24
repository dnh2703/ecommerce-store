import * as React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addToCart,
  getCartProduct,
} from "../../../features/slice/productSlice";
import { CartListProducts } from "../../../interfaces/product";
import { arrayBuffer } from "stream/consumers";

export default function AddToCart(props: any) {
  let [count, setCount] = useState<number>(1);
  let [isAgree, setIsAgree] = useState<boolean>(false);
  let { cartProducts } = useAppSelector((state) => state.product);
  let dispatch = useAppDispatch();

  useEffect(() => {
    if (cartProducts.length > 0)
      localStorage.setItem("wishList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    let res = localStorage.getItem("wishList");
    if (res !== null) {
      const items = JSON.parse(res);
      if (items) {
        dispatch(getCartProduct(items));
      }
    }
  }, []);

  const handleMinus = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count === props.product?.inventory) {
      setCount(props.product?.inventory);
    } else {
      setCount(count + 1);
    }
  };

  const handleChecked = () => {
    setIsAgree(!isAgree);
  };

  return (
    <div className="flex flex-col my-5 ">
      <div className="flex items-center gap-4 my-4 justify-between">
        <div className="border-2 border-slate-100 basis-[25%] flex justify-center">
          <button
            className="py-3 px-5 text-lg opacity-20 hover:opacity-100"
            onClick={handleMinus}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <input
            className="outline-none inline-block leading-[50px] w-7 text-lg text-center"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button
            className="py-3 px-5 text-lg opacity-20 hover:opacity-100"
            onClick={handlePlus}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div
          onClick={() => {
            dispatch(
              addToCart({
                product: props.product,
                quantity: count,
                count: count,
              })
            );
            setCount(1);
          }}
          className="basis-[60%] group/button"
        >
          <button className=" uppercase  leading-[50px] w-full bg-black relative text-white text-xs tracking-[3px]">
            <div className="w-0 z-0 h-full group-hover/button:w-full duration-500 bg-[#6e2f1b] absolute"></div>
            <span className="z-[1] relative"> add to cart</span>
          </button>
        </div>
        <div className=" w-[50px] basis-[10%]">
          <i className="hover:bg-[#6e2f1b] duration-300 hover:text-white fa-regular fa-heart leading-[50px] text-lg  flex justify-center items-center cursor-pointer border-[1px] border-gray-200"></i>
        </div>
      </div>
      <div className="flex items-center ">
        <input
          className={`h-4 mr-2 ${
            isAgree ? "opacity-100" : "opacity-30"
          } cursor-pointer `}
          type="radio"
          checked={isAgree}
          name="agree"
          id="agree"
          onClick={handleChecked}
        />
        <label
          htmlFor="agree"
          className="text-[13px] text-gray-400 cursor-pointer"
        >
          I agree with the{" "}
        </label>
        <a
          onClick={props.showModal}
          className="text-[13px] ml-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
        >
          terms and conditions
          <span className="w-full bg-black h-[1px] absolute bottom-[-4px] left-0 group-hover/terms:w-0 duration-300"></span>
        </a>
      </div>
      <div>
        <button
          disabled={!isAgree}
          className={`my-5 uppercase  leading-[50px] w-full group/buy duration-500 ${
            isAgree
              ? "text-black border-black hover:bg-[#6e2f1b]"
              : "text-gray-300 border-gray-300"
          } text-xs tracking-[3px] border `}
        >
          <span
            className={`block   ${
              isAgree &&
              "hover:text-white group-hover/buy:animate-[buy_1s_ease-in-out]"
            }`}
          >
            buy it now
          </span>
        </button>
      </div>
    </div>
  );
}
