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
  const ratingProduct = products
    .filter((product: IProduct) => product.averageRating >= 4)
    .slice(0, 4);
  const bestSellingProduct = products
    .filter((product: IProduct) => product.inventory < 10)
    .slice(0, 4);
  return (
    <div className="py-20">
      <div className=" flex justify-center items-center mb-12">
        <button
          className={`mx-5 text-3xl  ease-in  ${
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
          className={`mx-5 text-3xl  ease-in  ${
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
              onClick={() => {
                navigate(`/products/${product.id}`);
                window.scrollTo(0, 0);
              }}
              onMouseEnter={() => setHoveredIndex(productIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden group/zoom mb-5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" group-hover/zoom:scale-110 duration-500"
                />
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
              onClick={() => {
                navigate(`/products/${product.id}`);
                window.scrollTo(0, 0);
              }}
              onMouseEnter={() => setHoveredIndex(productIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="overflow-hidden group/zoom mb-5 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" group-hover/zoom:scale-110 duration-500"
                />
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
