import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import { IProduct } from "../../interfaces/product";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { getProductsStart } from "../../features/slice/productSlice";
import TextRating from "./Rating";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { QuickView } from "./QuickView";

const TopRating = () => {
  // let [products, setProducts] = useState<IProduct[]>([]);
  let dispatch = useDispatch();
  let { products, isLoading } = useAppSelector((state) => state.product);
  console.log(isLoading);

  const [isShow, setIsShow] = useState(true);
  const [isBorder, setIsBorder] = useState(true);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<any>(null);

  useEffect(() => {
    // productApi
    //   .getAllProducts()
    //   .then((response) => {
    //     console.log(response);
    //     const data = response.data; // Extract the data from the response
    // const filteredProducts = data.filter(
    //   (product: any) => product.averageRating === 5
    // );
    // setProducts(filteredProducts);
    // console.log(products);
    // })
    // .catch((e) => console.error(e));
    dispatch(getProductsStart());
  }, []);
  const ratingProduct = products.filter(
    (product: IProduct) => product.averageRating >= 4
  );
  const bestSellingProduct = products.filter(
    (product: IProduct) => product.inventory < 10
  );
  return (
    <div>
      <div className=" flex justify-center items-center">
        <button
          className={`px-10 text-2xl md:text-4xl py-10 ease-in duration-500 ${
            isBorder ? "text-black border-b-2 border-black" : "text-slate-700"
          }`}
          onClick={() => {
            setIsShow(true);
            setIsBorder(true);
          }}
        >
          Top Rating
        </button>
        <button
          className={`px-10 text-2xl md:text-4xl py-10 ease-in duration-500 ${
            isBorder ? "text-slate-700" : "text-black border-b-2 border-black"
          }`}
          onClick={() => {
            setIsShow(false);
            setIsBorder(false);
          }}
        >
          Best Selling
        </button>
      </div>
      {isShow ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-10 ">
          {ratingProduct.map((product, productIndex) => (
            <div
              key={product.id}
              className="border-none p-4 hover:cursor-pointer "
              onClick={() => navigate(`/products/${product.id}`)}
              onMouseEnter={() => setHoveredIndex(productIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden group/zoom mb-5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" group-hover/zoom:scale-110 duration-500"
                />
                {hoveredIndex === productIndex && (
                  <div className="absolute inset-0 flex gap-0 md:gap-5 items-end justify-center bg-transparent bg-opacity-50 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                      onClick={() => <QuickView product={product} />}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              <Box sx={{ span: { fontSize: "10px" } }}>
                <TextRating values={product.averageRating} />
              </Box>
              <h3 className="text-lg">{product.name}</h3>
              <p>${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-10">
          {bestSellingProduct.map((product, productIndex) => (
            <div
              key={product.id}
              className="border-none p-4 hover:cursor-pointer "
              onClick={() => navigate(`/products/${product.id}`)}
              onMouseEnter={() => setHoveredIndex(productIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden group/zoom mb-5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" group-hover/zoom:scale-110 duration-500"
                />
                {hoveredIndex === productIndex && (
                  <div className="absolute inset-0 flex gap-0 md:gap-5 items-end justify-center bg-transparent bg-opacity-50 mb-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      ></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-10 w-10 p-2 bg-white rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              <Box sx={{ span: { fontSize: "10px" } }}>
                <TextRating values={product.averageRating} />
              </Box>
              <h3 className="text-lg">{product.name}</h3>
              <p>${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TopRating;
