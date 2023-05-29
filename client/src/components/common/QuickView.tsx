import { useEffect, useState } from "react";
import TextRating from "./Rating";
import CloseButton from "./CloseButton";
import { addToCart } from "../../features/slice/productSlice";
import { useAppDispatch } from "../../store/hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function QuickView(props: any) {
  let [count, setCount] = useState<number>(1);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  const handleMinus = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    if (count === props.product.inventory) {
      setCount(props.product.inventory);
    } else {
      setCount(count + 1);
    }
  };

  const addSuccessfully = () => {
    toast.success("Add successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClick: () => {
        if (window.location.pathname !== "/cart") {
          navigate("/cart");
        }
        window.scrollTo(0, 0);
      },
    });
  };

  return (
    <div
      className={` ${
        props.isShow ? " w-full opacity-100" : "w-0 opacity-0"
      } fixed h-full z-20 top-0 left-0 duration-500 `}
      onClick={(e) => {
        props.closeModal();
      }}
    >
      {props.isShow && (
        <div
          onClick={(e) => {
            props.closeModal();
          }}
          className={` bg-stone-600 opacity-60 absolute w-[100vw] h-[100vh] z-20 top-0 left-0 `}
        ></div>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex h-1/2 top-1/2 w-3/5 max-lg:w-[90%]
        left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 bg-white duration-500`}
      >
        <div
          onClick={() => props.closeModal()}
          className="absolute right-10 top-5"
        >
          <CloseButton />
        </div>
        <div className={`duration-500 w-[40%]`}>
          <img
            className="w-full h-full object-cover"
            src={props.product?.image}
            alt=""
          />
        </div>
        <div className=" px-12 py-8 w-[60%] overflow-y-scroll">
          <div className="border-b border-gray-300">
            <div className="flex items-center mt-2">
              <TextRating values={props.product.averageRating}></TextRating>
              <span className="ml-3 text-gray-500">
                ({props.product.numOfReviews})
              </span>
            </div>
            <p className="my-4 text-3xl">{props.product.name}</p>
            <p className="my-4">
              By{" "}
              <a className="mb-1 inline-block border-b border-black capitalize text-[#6e2f1b]">
                {props.product.company}
              </a>
            </p>
            <p className="mt-4 mb-8 text-2xl">${props.product.price}</p>
          </div>
          <div className="pt-8 pb-4">
            <p className="leading-[1.5] text-gray-400">
              Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum
              aliquam libero, non adipiscing dolor urna a orci. non, velit.
            </p>
            {props.product?.inventory === 0 ? (
              <p className="text-red-500 my-7">
                <i
                  className={`fa-regular fa-circle-xmark fa-fade text-red-500 mr-3 `}
                ></i>
                Out of stock
              </p>
            ) : (
              <p className="text-[#108043] my-7">
                <i
                  className={`fa-regular fa-circle-check fa-fade text-[#108043] mr-3 `}
                ></i>
                In stock
              </p>
            )}
            {props.product.inventory === 0 || (
              <div className="flex">
                <div className="border-2 mr-5 border-slate-100 basis-[25%] flex justify-center">
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
                <div className="basis-[75%] group/button">
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          product: props.product,
                          quantity: count,
                          count: count,
                        })
                      );
                      setCount(1);
                      addSuccessfully();
                      props.closeModal();
                    }}
                    className={`flex items-center justify-center uppercase py-5 w-full group/buy bg-black duration-500 text-black border-black hover:bg-[#6e2f1b] text-xs tracking-[3px] border `}
                  >
                    <span
                      className={`block text-white group-hover/buy:animate-[buy_1s_ease-in-out]`}
                    >
                      add to cart
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
