import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled, withStyles } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { IProduct } from "../interfaces/product";
import productApi from "../api/productApi";
import axiosConfig from "../api/axiosConfig";
import {
  activeGridView,
  imgProductStyles,
  productStyles,
} from "./ProductStyle";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const GridView = styled("div")({
  "&:hover": {
    color: "white",
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
});

export default function ProductPage() {
  let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);

  useEffect(() => {
    productApi
      .getAllProducts()
      .then((res) => setProducts(res.data?.products))
      .catch((e) => console.error(e));
  }, []);

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

      <Grid container spacing={2}>
        <Grid container item xs={3}>
          side
        </Grid>
        <Grid xs={9}>
          <Grid container item sx={{ justifyContent: "space-between" }}>
            <Grid item xs={3}>
              .
            </Grid>
            <Grid
              container
              item
              xs={3}
              sx={{ justifyContent: "end", flexDirection: "row" }}
            >
              <GridView
                onClick={() => {
                  setIsRow(false);
                  setCols(6);
                }}
                sx={cols === 6 ? activeGridView : undefined}
              >
                1
              </GridView>
              <GridView
                onClick={() => {
                  setIsRow(false);
                  setCols(4);
                }}
                sx={cols === 4 ? activeGridView : undefined}
              >
                2
              </GridView>
              <GridView
                onClick={() => {
                  setCols(3);
                  setIsRow(false);
                }}
                sx={cols === 3 ? activeGridView : undefined}
              >
                3
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
            <></>
          ) : (
            <Grid spacing={5} container sx={{ my: 3 }}>
              {products?.map((product: IProduct) => {
                return (
                  <Grid item xs={cols} sx={productStyles}>
                    <img src={product.image} alt="" />
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
                      ${product.price}
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
