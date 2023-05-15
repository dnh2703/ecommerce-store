import AddToCart from "./AddToCart";

export default function ProductDetail(props: any) {
  return (
    <div className="pl-10 basis-1/2">
      <div className="">
        <i className="fa-regular mr-1 fa-star text-xs text-gray-500"></i>
        <i className="fa-regular mr-1 fa-star text-xs text-gray-500"></i>
        <i className="fa-regular mr-1 fa-star text-xs text-gray-500"></i>
        <i className="fa-regular mr-1 fa-star text-xs text-gray-500"></i>
        <i className="fa-regular mr-1 fa-star text-xs text-gray-500"></i>
        <span className="text-xs text-gray-500">
          ({props.product?.numOfReviews})
        </span>
      </div>
      <h2 className="capitalize text-3xl py-1">{props.product?.name}</h2>
      <p className="text-2xl py-1 mb-2">${props.product?.price / 100}</p>
      <p className="capitalize py-4 border-b-[1px]">
        By <span className="text-amber-800">{props.product?.company}</span>
      </p>
      <p className="text-[#108043]">
        <i
          className={`fa-regular fa-circle-check fa-fade ${
            props.product?.inventory !== 0 ? "text-[#108043]" : "text-red-500"
          } mr-3 py-5`}
        ></i>
        In stock
      </p>
      <p className="my-3">
        Only{" "}
        <span className="text-red-500 ">
          {props.product?.inventory} item(s)
        </span>{" "}
        left in stock
      </p>
      <div className="h-[3px] w-full bg-gray-300 mt-4">
        <div className="h-full w-1/5 bg-red-500"></div>
      </div>
      <AddToCart product={props.product} showModal={props.showTerms} />
      <div>
        <a
          onClick={props.showAsk}
          className="mr-6 text-[16px] pb-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
        >
          <i className="mr-2 fa-regular fa-circle-question"></i>
          Ask a questions
          <span className="w-0 bg-black h-[1px] absolute bottom-[-2px] left-0 group-hover/terms:w-full duration-300"></span>
        </a>
        <a
          onClick={props.showDelivery}
          className="text-[16px] pb-1 inline-block text-black cursor-pointer relative group/terms hover:text-amber-800"
        >
          <i className=" mr-2 fa-solid fa-box"></i>
          Delivery & Return
          <span className="w-0 bg-black h-[1px] absolute bottom-[-2px] left-0 group-hover/terms:w-full duration-300"></span>
        </a>
      </div>
    </div>
  );
}
