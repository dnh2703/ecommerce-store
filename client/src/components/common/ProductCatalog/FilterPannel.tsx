import { useState } from "react";
import { SideComponent } from "./ProductCatalogComponent";
import { Box, Button, Grid, Typography } from "@mui/material";
import {
  FeaturedProductItem,
  FilterSide,
  FilterSideItem,
  InputPrice,
} from "./style";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interfaces/product";

interface IFilterPannelProps {
  products: IProduct[];
  selectCollection?: any;
  selectedCollection?: any;
  selectAvailability?: any;
  selectedAvailability?: any;
}

export const FilterPannel = (props: IFilterPannelProps) => {
  let [isShowPrice, setIsShowPrice] = useState<boolean>(true);
  let [isShowFProduct, setIsShowFProduct] = useState<boolean>(true);

  return (
    <>
      <SideComponent
        onclick={() => {}}
        names={["bedroom", "kitchen", "office"]}
        products={props.products}
        filter={"COLLECTIONS"}
      />
      <SideComponent
        onclick={() => {}}
        products={props.products}
        names={["In stock", "Out of stock"]}
        filter={"AVAILABILITY"}
      />

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
                <InputPrice autoCorrect="none" type="text" id="min" />
              </label>
            </div>
            <div>
              <label htmlFor="max">
                Max price:
                <InputPrice type="text" id="max" />
              </label>
            </div>
          </FilterSideItem>
          <Button
            // disabled={minPrice > maxPrice || (maxPrice === 0 && minPrice === 0)}
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
      <SideComponent
        onclick={() => {}}
        products={props.products}
        names={["ikea", "marcos", "liddy"]}
        filter={"BRANDS"}
      />

      <Grid
        item
        xs={12}
        sx={{
          mb: 3,
          mr: 4,
          overflow: "hidden",
          height: `${isShowFProduct ? "370px" : "35px"}`,
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
            {props.products?.slice(0, 2).map((product: IProduct) => (
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
                  <Grid display={"inline-flex"} item xs={4}>
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
                      ml: 1,
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
                <hr style={{ border: "1px dashed #ccc", margin: "30px 0" }} />
              </Link>
            ))}
          </div>
        </FeaturedProductItem>
      </Grid>
    </>
  );
};
