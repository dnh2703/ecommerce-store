import { Container, Grid, Typography } from "@mui/material";
import { useState, useEffect, ChangeEvent, useLayoutEffect } from "react";
import { IProduct } from "../interfaces/product";
import productApi from "../api/productApi";

import { FilterPannel } from "../components/common/ProductCatalog/FilterPannel";
import {
  GridView,
  ProductRoute,
} from "../components/common/ProductCatalog/ProductCatalogComponent";
import { activeGridView } from "../components/common/ProductCatalog/style";
import ClearFilter from "../components/common/ProductCatalog/ClearFilter";
import CloseButton from "../components/common/CloseButton";
import { ProductRow } from "../components/common/ProductCatalog/ProductRow";
import { ProductsColumn } from "../components/common/ProductCatalog/ProductCol";
import { useDispatch } from "react-redux";
import { getProductsStart } from "../features/slice/productSlice";
import { useAppSelector } from "../store/hooks";
import LoadingPage from "../components/common/LoadingPage";

export default function ProductPage() {
  let dispatch = useDispatch();
  let { products, isLoading } = useAppSelector((state) => state.product);

  // let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);
  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  let [isShowAllProducts, setIsShowAllProducts] = useState<boolean>(false);
  let [isShowFilter, setIsShowFilter] = useState<boolean>(false);

  let [isInStock, setIsInStock] = useState<boolean>(false);
  let [isOutOfStock, setIsOutOfStock] = useState<boolean>(false);
  let [collection, setCollection] = useState<string>("all");

  const [price, setPrice] = useState<number[]>([0, 3000]);
  const [isPriceChange, setIsPriceChange] = useState<boolean>(false);
  let [sort, setSort] = useState<string>("");
  const [brands, setBrands] = useState([
    { id: 1, checked: false, label: "Ikea" },
    { id: 2, checked: false, label: "Marcos" },
    { id: 3, checked: false, label: "Liddy" },
  ]);

  useEffect(() => {
    // productApi
    //   .getAllProducts()
    //   .then((res) => {
    //     setProducts(res.data?.products);
    //     setFilteredProducts(res.data?.products);
    //   })
    //   .catch((e) => console.error(e));
    dispatch(getProductsStart());
  }, []);

  const applyFilter = () => {
    let newProducts = products;

    if (collection === "all") {
      newProducts = [...products];
    } else {
      newProducts = [...products].filter(
        (product: IProduct) => product.category === collection
      );
    }

    if (sort === "aToZ") {
      newProducts = newProducts.sort((a: IProduct, b: IProduct) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }

    if (sort === "zToA") {
      newProducts = newProducts.sort((a: IProduct, b: IProduct) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }

    if (sort === "highToLow") {
      newProducts = newProducts.sort(
        (a: IProduct, b: IProduct) => b.price - a.price
      );
    }

    if (sort === "lowToHigh") {
      newProducts = newProducts.sort(
        (a: IProduct, b: IProduct) => a.price - b.price
      );
    }

    if (isInStock) {
      newProducts = newProducts.filter(
        (product: IProduct) => product.inventory > 0
      );
    }

    if (isOutOfStock) {
      newProducts = newProducts.filter(
        (product: IProduct) => product.inventory === 0
      );
    } else {
      if (collection === "all") {
        newProducts = newProducts;
      } else {
        newProducts = newProducts.filter(
          (product: IProduct) => product.category === collection
        );
      }
    }
    const brandChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (brandChecked.length) {
      newProducts = newProducts.filter((product: IProduct) =>
        brandChecked.includes(product.company)
      );
    }

    const minPrice = price[0];
    const maxPrice = price[1];

    newProducts = newProducts.filter(
      (product: IProduct) =>
        product.price / 100 >= minPrice && product.price / 100 <= maxPrice
    );

    setFilteredProducts(newProducts);
  };

  useLayoutEffect(() => {
    applyFilter();
  }, [isInStock, isOutOfStock, collection, brands, price, sort, products]);

  const resetCollection = () => setCollection("all");
  const resetIsInStock = () => {
    setIsInStock(false);
    setIsShowAllProducts(false);
  };
  const resetIsOutOfStock = () => {
    setIsOutOfStock(false);
    setIsShowAllProducts(false);
  };

  const handleCollection = (name: string) => {
    setCollection(name);
    resetIsInStock();
    resetIsOutOfStock();
    resetPrice();
    resetBrands();
    setIsShowAllProducts(false);
  };

  const resetBrands = () =>
    setBrands([
      { id: 1, checked: false, label: "Ikea" },
      { id: 2, checked: false, label: "Marcos" },
      { id: 3, checked: false, label: "Liddy" },
    ]);

  const handleInStock = () => {
    setIsInStock(!isInStock);
    setIsOutOfStock(false);
  };

  const handleOutOfStock = () => {
    setIsOutOfStock(!isOutOfStock);
    setIsInStock(false);
  };

  const handleChangeChecked = (id: any) => {
    const brandStateList = brands;
    const changeCheckedBrand = brandStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBrands(changeCheckedBrand);
    setIsShowAllProducts(false);
  };

  const handleChangePrice = (event: any, value: any) => {
    setPrice(value);
    setIsPriceChange(true);
  };

  const handleClearAll = () => {
    setCollection("all");
    resetBrands();
    setIsInStock(false);
    setIsOutOfStock(false);
    resetPrice();
    setIsShowAllProducts(false);
  };

  const resetPrice = () => {
    setPrice([0, 3000]);
    setIsPriceChange(false);
    setIsShowAllProducts(false);
  };

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <>
      {!isLoading ? (
        <div className="relative pt-10 mt-[86.8px]">
          <Container maxWidth="xl">
            <div
              className={` ${
                isShowFilter ? "w-full" : " w-0"
              } fixed h-full z-20 top-0 left-0 duration-500 ml-8`}
              onClick={(e) => {
                setIsShowFilter(false);
              }}
            >
              {isShowFilter && (
                <div
                  onClick={(e) => {
                    setIsShowFilter(false);
                  }}
                  className={` bg-stone-600 opacity-60 absolute w-[100vw] h-[100vh] z-20 top-0 left-0 `}
                ></div>
              )}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={`py-20 duration-500 h-full overflow-hidden absolute bg-white z-50 ${
                  isShowFilter ? "w-2/5" : "w-0"
                }`}
              >
                <div
                  className="absolute top-5 right-4"
                  onClick={() => setIsShowFilter(false)}
                >
                  <CloseButton />
                </div>
                <FilterPannel
                  filteredProducts={filteredProducts}
                  products={[...products]}
                  inStock={isInStock}
                  outOfStock={isOutOfStock}
                  setInStock={handleInStock}
                  setOutOfStock={handleOutOfStock}
                  onclick={handleCollection}
                  brand={brands}
                  changeChecked={handleChangeChecked}
                  collection={collection}
                  selectedPrice={price}
                  changePrice={handleChangePrice}
                  price={price}
                  isPriceChange={isPriceChange}
                  isShowFilter={isShowFilter}
                  availability={["In stock", "Out of stock"]}
                ></FilterPannel>
              </div>
            </div>
            <Grid item sx={{ textAlign: "center", mb: 5, pb: 4 }}>
              <Typography sx={{ fontSize: "50px" }}>Products</Typography>
              <Grid
                container
                xs={12}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ProductRoute src={"/"} name="home" />
                <i
                  style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
                  className="fa-solid fa-angle-right"
                ></i>
                <Typography sx={{ fontSize: 12 }}>Products</Typography>
              </Grid>
            </Grid>
            <Grid
              onClick={() => setIsShowFilter(true)}
              sx={{ display: { md: "none", xs: "inline-flex" } }}
              className="text-sm mx-6 border border-black py-2 px-7 uppercase justify-center items-center cursor-pointer hover:text-white hover:bg-black duration-500"
            >
              <i className="fa-solid fa-sliders mr-2"></i>{" "}
              <span className="font-bold">filter</span>
            </Grid>

            <Grid container sx={{ px: 3 }}>
              <Grid item sx={{ justifyContent: "center", width: "0" }} md={3}>
                <FilterPannel
                  filteredProducts={filteredProducts}
                  products={[...products]}
                  inStock={isInStock}
                  outOfStock={isOutOfStock}
                  setInStock={handleInStock}
                  setOutOfStock={handleOutOfStock}
                  onclick={handleCollection}
                  brand={brands}
                  changeChecked={handleChangeChecked}
                  collection={collection}
                  selectedPrice={price}
                  changePrice={handleChangePrice}
                  price={price}
                  isPriceChange={isPriceChange}
                  isShowFilter={isShowFilter}
                  availability={["In stock", "Out of stock"]}
                ></FilterPannel>
              </Grid>
              <Grid xs={12} md={9}>
                <select
                  className="outline-none border cursor-pointer  border-gray-300 py-2 px-6 text-sm  text-gray-500 my-4 "
                  onChange={handleSort}
                >
                  <option value="">Choose sort</option>
                  <option value="aToZ">Alphabetically, A-Z</option>
                  <option value="zToA">Alphabetically, Z-A</option>
                  <option value="highToLow">Price, high-low</option>
                  <option value="lowToHigh">Price, low-high</option>
                </select>

                <Grid container item sx={{ justifyContent: "space-between" }}>
                  <ClearFilter
                    resetCollection={resetCollection}
                    resetInStock={resetIsInStock}
                    resetIsOutOfStock={resetIsOutOfStock}
                    resetAll={handleClearAll}
                    resetBrand={handleChangeChecked}
                    resetPrice={resetPrice}
                    collection={collection}
                    isInStock={isInStock}
                    isOutOfStock={isOutOfStock}
                    brands={brands}
                    isPriceChange={isPriceChange}
                    price={price}
                  />
                  <Grid item xs={4} container sx={{ justifyContent: "end" }}>
                    <GridView
                      onClick={() => {
                        setIsRow(false);
                        setCols(6);
                      }}
                      sx={cols === 6 ? activeGridView : undefined}
                    >
                      <svg
                        className="w-[60%] rotate-90 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 9h16.5m-16.5 6.75h16.5"
                        ></path>
                      </svg>
                    </GridView>
                    <GridView
                      className="group/layout"
                      onClick={() => {
                        setIsRow(false);
                        setCols(4);
                      }}
                      sx={cols === 4 ? activeGridView : undefined}
                    >
                      <svg
                        className="w-[60%] rotate-90 "
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        ></path>
                      </svg>
                    </GridView>
                    <GridView
                      onClick={() => {
                        setCols(3);
                        setIsRow(false);
                      }}
                      sx={cols === 3 ? activeGridView : undefined}
                    >
                      <svg
                        className="w-[60%] rotate-90 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        ></path>
                      </svg>
                    </GridView>
                    <GridView
                      onClick={() => {
                        setIsRow(true);
                        setCols(0);
                      }}
                      sx={isRow ? activeGridView : undefined}
                    >
                      <svg
                        className="w-[60%]"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        ></path>
                      </svg>
                    </GridView>
                  </Grid>
                </Grid>
                {isRow ? (
                  <Grid container spacing={2}>
                    {!isShowAllProducts
                      ? filteredProducts
                          ?.slice(0, 12)
                          .map((product: IProduct) => {
                            return (
                              <ProductRow
                                key={product.id}
                                product={product}
                                cols={cols}
                              ></ProductRow>
                            );
                          })
                      : filteredProducts?.map((product: IProduct) => {
                          return (
                            <ProductRow
                              product={product}
                              key={product.id}
                              cols={cols}
                            ></ProductRow>
                          );
                        })}
                  </Grid>
                ) : (
                  <Grid spacing={5} container sx={{ my: 3 }}>
                    {!isShowAllProducts
                      ? filteredProducts
                          ?.slice(0, 12)
                          .map((product: IProduct) => {
                            return (
                              <ProductsColumn
                                key={product.id}
                                product={product}
                                cols={cols}
                              ></ProductsColumn>
                            );
                          })
                      : filteredProducts?.map((product: IProduct) => {
                          return (
                            <ProductsColumn
                              key={product.id}
                              product={product}
                              cols={cols}
                            ></ProductsColumn>
                          );
                        })}
                  </Grid>
                )}
                {!isShowAllProducts && filteredProducts.length > 12 ? (
                  <div className="flex flex-col items-center my-20">
                    <p className="text-gray-500 text-lg">
                      You've viewed 12 of {filteredProducts.length} products
                    </p>
                    <div className="my-6 w-1/3 bg-gray-300 h-[2px]">
                      <div className={`w-3/5 bg-[#6e2f1b] h-[2px]`}></div>
                    </div>
                    <button
                      onClick={() => setIsShowAllProducts(true)}
                      className="group/button leading-[40px] relative text-black border border-black text-sm"
                    >
                      <div className="w-0 z-0 h-full group-hover/button:w-full duration-500 bg-[#6e2f1b] absolute"></div>
                      <span className="z-[1] relative px-8 group-hover/button:text-white group-hover/button:border-[#6e2f1b] duration-500">
                        Load more
                      </span>
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
