import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Typography,
  dividerClasses,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState, useEffect, ChangeEvent } from "react";
import { IFilterProducts, IProduct } from "../interfaces/product";
import productApi from "../api/productApi";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export const imgProductStyles = {
  "div.hover": {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    bottom: "-100px",

    div: {
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      border: "1px solid #fff",
      backgroundColor: "#fff",
      mx: "5px",
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": {
        color: "white",
        backgroundColor: "#6e2f1b",
        borderColor: "#6e2f1b",
      },
    },
    transition: "0.6s",
  },
  "&:hover": {
    "div.hover": {
      bottom: "30px",
    },
  },
  width: "100%",

  overflow: "hidden",
  position: "relative",
  //   overflow: "hidden",
};

export const productStyles = {
  "i.fa-star": {
    fontSize: "10px",
    color: "gray",
    mr: "8px",
  },
  span: {
    fontSize: "12px",
    color: "gray",
  },

  a: {
    textDecoration: "none",
  },
};

export const activeGridView = {
  color: "white",
  backgroundColor: "#6e2f1b",
  borderColor: "#6e2f1b",
};

export const borderCircleGray = {
  border: "1px solid gray ",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
};

const GridView = styled("div")({
  "&:hover": {
    Bar: { backgroundColor: "white" },
    backgroundColor: "#6e2f1b",
    borderColor: "#6e2f1b",
  },

  transition: "0.3s",
  color: "gray",
  borderRadius: "50%",
  border: "1px solid #ccc",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "10px",
  cursor: "pointer",
  gap: 2,
});

const Bar = styled("span")({
  width: "2px",
  height: "40%",
  backgroundColor: "#ccc",
  borderRadius: "10px",
});

const FeaturedProductItem = styled("div")({
  display: "flex",
  margin: "16px 0",
});

const InputPrice = styled("input")({
  width: "30%",
  border: "1px #ccc solid",
  margin: "0 8px",
  padding: "8px",
  borderRadius: "8px",
});

const Filter = styled("span")({
  backgroundColor: "#e1e1e1",
  color: "gray",
  padding: "8px",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.5s",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
    i: {
      transform: "rotate(180deg) scale(0.8)",
      color: "#fff",
    },
  },
  i: {
    transition: "0.4s",
    color: "#000",
    fontSize: "14px",
  },
});

const FilterSide = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 12,
  letterSpacing: 2,
  color: "initial",
  borderBottom: "1px solid #e1e1e1",
  paddingBottom: "8px",
  marginBottom: "16px",
  cursor: "pointer",
  paddingTop: "10px",
});

const FilterSideItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 14,
  color: "gray",
  marginBottom: "8px",
  paddingBottom: "8px",
  cursor: "pointer",
  "&:hover": { color: "#000" },
});

export default function ProductPage() {
  let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);
  let [isShowCollection, setIsShowCollection] = useState<boolean>(true);
  let [isShowAvailability, setIsShowAvailability] = useState<boolean>(true);
  let [isShowPrice, setIsShowPrice] = useState<boolean>(true);
  let [isShowBrand, setIsShowBrand] = useState<boolean>(true);
  let [minPrice, setMinPrice] = useState<number>(0);
  let [maxPrice, setMaxPrice] = useState<number>(0);
  let [isShowFProduct, setIsShowFProduct] = useState<boolean>(true);
  let [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([]);
  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  let [filterSide, setFilterSide] = useState<IFilterProducts>({
    collection: "",
    availability: "",
    brand: false,
    price: false,
  });

  console.log(products);

  useEffect(() => {
    productApi
      .getAllProducts()
      .then((res) => {
        setProducts(res.data?.products);
        setFilteredProducts(res.data?.products);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <Container maxWidth="xl">
      <Grid item sx={{ textAlign: "center", my: 5, pb: 4 }}>
        <Typography sx={{ fontSize: "50px" }}>Products</Typography>
        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to={"/home"}>
            <Typography
              sx={{
                opacity: "0.6",
                color: "#000",
                marginRight: "10px",
                fontSize: "12px",
              }}
            >
              Home
            </Typography>
          </NavLink>
          <i
            style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
            className="fa-solid fa-angle-right"
          ></i>
          <Typography sx={{ fontSize: 12 }}>Products</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ px: 3 }}>
        <Grid item xs={3} sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              mr: 4,
              overflow: "hidden",
              height: `${isShowCollection ? "150px" : "35px"}`,
              transition: "1s",
            }}
          >
            <FilterSide
              onClick={() => {
                setIsShowCollection(!isShowCollection);
              }}
            >
              COLLECTIONS
              <i
                style={{ transition: "0.5s" }}
                className={`fa-solid fa-angle-down ${
                  isShowCollection || "fa-rotate-180"
                }`}
              ></i>
            </FilterSide>
            <div>
              <FilterSideItem
                onClick={() => {
                  setFilterSide({
                    ...filterSide,
                    collection: "bedroom",
                    brand: false,
                  });
                  setFilteredProducts(() => {
                    return [...products].filter((product: IProduct) => {
                      return product.category === "bedroom";
                    });
                  });
                }}
              >
                Bedroom
                <Box sx={borderCircleGray}>
                  {
                    products.filter(
                      (product: IProduct) => product.category === "bedroom"
                    ).length
                  }
                </Box>
              </FilterSideItem>

              <FilterSideItem
                onClick={() => {
                  setFilterSide({
                    ...filterSide,
                    collection: "kitchen",
                    brand: false,
                  });
                  setFilteredProducts(() => {
                    return [...products].filter((product: IProduct) => {
                      return product.category === "kitchen";
                    });
                  });
                }}
              >
                Kitchen
                <Box sx={borderCircleGray}>
                  {
                    products.filter(
                      (product: IProduct) => product.category === "kitchen"
                    ).length
                  }
                </Box>
              </FilterSideItem>

              <FilterSideItem
                onClick={() => {
                  setFilterSide({
                    ...filterSide,
                    collection: "office",
                    brand: false,
                  });
                  setFilteredProducts(() => {
                    return [...products].filter((product: IProduct) => {
                      return product.category === "office";
                    });
                  });
                }}
              >
                Office
                <Box sx={borderCircleGray}>
                  {
                    products.filter(
                      (product: IProduct) => product.category === "office"
                    ).length
                  }
                </Box>
              </FilterSideItem>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              mr: 4,
              overflow: "hidden",
              height: `${isShowAvailability ? "110px" : "35px"}`,
              transition: "1s",
            }}
          >
            <FilterSide
              onClick={() => {
                setIsShowAvailability(!isShowAvailability);
              }}
            >
              AVAILABILITY
              <i
                style={{ transition: "0.5s" }}
                className={`fa-solid fa-angle-down ${
                  isShowAvailability || "fa-rotate-180"
                }`}
              ></i>
            </FilterSide>
            <div>
              <FilterSideItem
                onClick={() => {
                  setFilterSide({ ...filterSide, availability: "In Stock" });

                  setFilteredProducts(() => {
                    return filteredProducts.filter(
                      (product: IProduct) => product.inventory !== 0
                    );
                  });
                }}
              >
                In stock
                <Box sx={borderCircleGray}>
                  {
                    products.filter(
                      (product: IProduct) => product.inventory !== 0
                    ).length
                  }
                </Box>
              </FilterSideItem>

              <FilterSideItem
                onClick={() => {
                  setFilterSide({
                    ...filterSide,
                    availability: "Out Of Stock",
                  });

                  setFilteredProducts(() => {
                    return filteredProducts.filter(
                      (product: IProduct) => product.inventory === 0
                    );
                  });
                }}
              >
                Out of stock
                <Box sx={borderCircleGray}>
                  {
                    products.filter(
                      (product: IProduct) => product.inventory === 0
                    ).length
                  }
                </Box>
              </FilterSideItem>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              mr: 4,
              overflow: "hidden",
              height: `${isShowPrice ? "155px" : "35px"}`,
              transition: "1s",
            }}
          >
            {" "}
            <FilterSide
              onClick={() => {
                setIsShowPrice(!isShowPrice);
              }}
            >
              PRICE
              <i
                style={{ transition: "0.5s" }}
                className={`fa-solid fa-angle-down ${
                  isShowPrice || "fa-rotate-180"
                }`}
              ></i>
            </FilterSide>
            <Box sx={{ cursor: "default" }}>
              <FilterSideItem>
                <div>
                  <label htmlFor="min">
                    Min price:
                    <InputPrice
                      autoCorrect="none"
                      onChange={handleMinChange}
                      type="text"
                      id="min"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="max">
                    Max price:
                    <InputPrice
                      onChange={handleMaxChange}
                      type="text"
                      id="max"
                    />
                  </label>
                </div>
              </FilterSideItem>
              <Button
                onClick={() => {
                  setMaxPrice(0);
                  setMinPrice(0);
                  setFilterSide(() => {
                    return {
                      ...filterSide,
                      maxPrice: maxPrice,
                      minPrice: minPrice,
                    };
                  });
                  setFilteredProducts(() => {
                    return filteredProducts.filter(
                      (product: IProduct) =>
                        product.price / 100 >= minPrice &&
                        product.price / 100 <= maxPrice
                    );
                  });
                }}
                disabled={minPrice > maxPrice}
                sx={{
                  width: "100%",
                  backgroundColor: "#6e2f1b",
                  opacity: "0.7",
                  transition: "0.5s",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#6e2f1b",
                    opacity: "1",
                  },
                }}
              >
                Check
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              mr: 4,
              overflow: "hidden",
              height: `${isShowBrand ? "150px" : "35px"}`,
              transition: "1s",
            }}
          >
            {" "}
            <FilterSide
              onClick={() => {
                setIsShowBrand(!isShowBrand);
              }}
            >
              BRANDS
              <i
                style={{ transition: "0.5s" }}
                className={`fa-solid fa-angle-down ${
                  isShowBrand || "fa-rotate-180"
                }`}
              ></i>
            </FilterSide>
            <FilterSideItem
              onClick={() => {
                setFilterSide({ ...filterSide, brand: true });
                setFilteredProducts(() => {
                  if (!filterSide.brand) {
                    return filteredProducts.filter(
                      (product: IProduct) => product.company === "liddy"
                    );
                  }
                  return [...products].filter(
                    (product: IProduct) => product.company === "liddy"
                  );
                });
              }}
            >
              Liddy
              <Box sx={borderCircleGray}>
                {
                  products.filter(
                    (product: IProduct) => product.company === "liddy"
                  ).length
                }
              </Box>
            </FilterSideItem>
            <FilterSideItem
              onClick={() => {
                setFilterSide({ ...filterSide, brand: true });
                setFilteredProducts(() => {
                  if (!filterSide.brand) {
                    return filteredProducts.filter(
                      (product: IProduct) => product.company === "marcos"
                    );
                  }
                  return [...products].filter(
                    (product: IProduct) => product.company === "marcos"
                  );
                });
              }}
            >
              Macros
              <Box sx={borderCircleGray}>
                {
                  products.filter(
                    (product: IProduct) => product.company === "marcos"
                  ).length
                }
              </Box>
            </FilterSideItem>
            <FilterSideItem
              onClick={() => {
                setFilterSide({ ...filterSide, brand: true });
                setFilteredProducts(() => {
                  if (!filterSide.brand) {
                    return filteredProducts.filter(
                      (product: IProduct) => product.company === "ikea"
                    );
                  }
                  return [...products].filter(
                    (product: IProduct) => product.company === "ikea"
                  );
                });
              }}
            >
              Ikea
              <Box sx={borderCircleGray}>
                {
                  products.filter(
                    (product: IProduct) => product.company === "ikea"
                  ).length
                }
              </Box>
            </FilterSideItem>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mb: 3,
              mr: 4,
              overflow: "hidden",
              height: `${isShowFProduct ? "330px" : "35px"}`,
              transition: "1s",
            }}
          >
            {" "}
            <FilterSide
              onClick={() => {
                setIsShowFProduct(!isShowFProduct);
              }}
            >
              FEATURED PRODUCT
              <i
                style={{ transition: "0.5s" }}
                className={`fa-solid fa-angle-down ${
                  isShowFProduct || "fa-rotate-180"
                }`}
              ></i>
            </FilterSide>
            <FeaturedProductItem>
              <div>
                {[...products].slice(0, 2).map((product: IProduct) => (
                  <Link
                    style={{ textDecoration: "none", color: "gray" }}
                    to={`/products/${product.id}`}
                  >
                    <Grid
                      container
                      display={"flex"}
                      alignItems={""}
                      item
                      xs={12}
                      sx={{ my: 2, div: { my: 1 } }}
                    >
                      <Grid display={"inline-flex"} item xs={3} sx={{ mr: 2 }}>
                        <img
                          style={{ width: "100%", objectFit: "cover" }}
                          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                          alt=""
                        />
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{
                          i: { fontSize: 10, color: "gray", mr: 0.5 },
                          span: { fontSize: 12, color: "gray", mr: 0.5 },
                        }}
                      >
                        <div>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <span>({product.numOfReviews})</span>
                        </div>
                        <Typography color={"gray"} textTransform={"capitalize"}>
                          {product.name}
                        </Typography>
                        <div>${product.price / 100}</div>
                      </Grid>
                    </Grid>
                    <hr
                      style={{ border: "1px dashed #ccc", margin: "30px 0" }}
                    />
                  </Link>
                ))}
              </div>
            </FeaturedProductItem>
          </Grid>
        </Grid>
        <Grid xs={9}>
          <Grid container item sx={{ justifyContent: "space-between" }}>
            <Grid item xs={7}>
              {(filterSide.availability ||
                filterSide.brand ||
                filterSide.collection ||
                filterSide.price) && (
                <Filter
                  onClick={() => {
                    setFilteredProducts([...products]);
                    setFilterSide({
                      collection: "",
                      availability: "",
                      brand: false,
                      price: false,
                    });
                  }}
                >
                  Clear All{" "}
                  <i
                    style={{ marginLeft: "10px" }}
                    className="fa-solid fa-xmark"
                  ></i>
                </Filter>
              )}
            </Grid>
            <Grid
              container
              item
              xs={5}
              sx={{ justifyContent: "end", flexDirection: "row" }}
            >
              <GridView
                onClick={() => {
                  setIsRow(false);
                  setCols(6);
                }}
                sx={cols === 6 ? activeGridView : undefined}
              >
                <Bar></Bar>
                <Bar></Bar>
              </GridView>
              <GridView
                onClick={() => {
                  setIsRow(false);
                  setCols(4);
                }}
                sx={cols === 4 ? activeGridView : undefined}
              >
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
              </GridView>
              <GridView
                onClick={() => {
                  setCols(3);
                  setIsRow(false);
                }}
                sx={cols === 3 ? activeGridView : undefined}
              >
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
              </GridView>
              <GridView
                onClick={() => {
                  setIsRow(true);
                  setCols(0);
                }}
                sx={isRow ? activeGridView : undefined}
              >
                <i className="fa-solid fa-bars"></i>
              </GridView>
            </Grid>
          </Grid>
          {isRow ? (
            <Grid container spacing={2}>
              {filteredProducts?.map((product: IProduct) => {
                return (
                  <Grid
                    key={product.id}
                    style={{ marginTop: "30px" }}
                    sx={productStyles}
                    container
                    item
                  >
                    <Grid item xs={4} sx={imgProductStyles}>
                      <img
                        style={{ width: "100%" }}
                        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                        alt=""
                      />
                      <div className="hover">
                        <div>
                          <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div>
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div>
                          <i className="fa-solid fa-arrow-right-arrow-left"></i>
                        </div>
                        <div>
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={7} sx={{ ml: 7 }}>
                      <div>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <span>({product.numOfReviews})</span>
                      </div>
                      <div>
                        <NavLink to={`/products/${product.id}`}>
                          <Typography
                            color={"black"}
                            fontSize={27}
                            sx={{ textTransform: "capitalize", my: 2 }}
                          >
                            {product.name}
                          </Typography>
                        </NavLink>
                      </div>
                      <div>
                        <Typography fontSize={20} variant="body1" color="gray">
                          ${product.price / 100}
                        </Typography>
                      </div>
                      <hr
                        style={{
                          border: "0.2px solid #e1e1e1",
                          margin: "30px 0",
                        }}
                      />
                      <div>
                        <Typography variant="body1" color="gray">
                          {product.description}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid spacing={5} container sx={{ my: 3 }}>
              {filteredProducts?.map((product: IProduct) => {
                return (
                  <Grid key={product.id} item xs={cols} sx={productStyles}>
                    <Box sx={imgProductStyles}>
                      <img
                        style={{ width: "100%" }}
                        src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                        alt=""
                      />
                      <div className="hover">
                        <div>
                          <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div>
                          <i className="fa-regular fa-heart"></i>
                        </div>
                        <div>
                          <i className="fa-solid fa-arrow-right-arrow-left"></i>
                        </div>
                        <div>
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                    </Box>
                    <div>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <span>({product.numOfReviews})</span>
                    </div>
                    <NavLink to={`/products/${product.id}`}>
                      <Typography
                        color={"black"}
                        sx={{ textTransform: "capitalize", my: 2 }}
                      >
                        {product.name}
                      </Typography>
                    </NavLink>
                    <Typography variant="body1" color="gray">
                      ${product.price / 100}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
