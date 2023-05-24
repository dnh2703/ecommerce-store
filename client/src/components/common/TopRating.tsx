import { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import { IProduct } from "../../interfaces/product";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { getProductsStart } from "../../features/slice/productSlice";
import TextRating from "./Rating";
import { Box } from "@mui/material";

const TopRating = () => {
  // let [products, setProducts] = useState<IProduct[]>([]);
  let dispatch = useDispatch();
  let { products, isLoading } = useAppSelector((state) => state.product);
  console.log(isLoading);

  const [isShow, setIsShow] = useState(true);
  const [isBorder, setIsBorder] = useState(true);

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
      <div className="text-center py-10">
        <button
          className={`px-10 text-4xl py-10 ease-in duration-500 ${
            isBorder ? "text-black border-b-2 border-black" : "text-slate-500"
          }`}
          onClick={() => {
            setIsShow(true);
            setIsBorder(true);
          }}
        >
          Top Rating
        </button>
        <button
          className={`px-10 text-4xl py-10 ease-in duration-500 ${
            isBorder ? "text-slate-500" : "text-black border-b-2 border-black"
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mx-10">
          {ratingProduct.map((product) => (
            <div key={product.id} className="border-none p-4">
              <img src={product.image} alt={product.name} className="mb-5" />
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
          {bestSellingProduct.map((product) => (
            <div key={product.id} className="border-none p-4">
              <img src={product.image} alt={product.name} className="mb-5" />
              <TextRating values={product.averageRating} />

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
