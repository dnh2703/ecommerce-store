import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { IProduct } from "../interfaces/product";
import productApi from "../api/productApi";

import { FilterPannel } from "../components/common/ProductCatalog/FilterPannel";
import {
  GridView,
  ProductRoute,
  ProductRow,
  ProductsColumn,
} from "../components/common/ProductCatalog/ProductCatalogComponent";
import {
  Bar,
  Filter,
  activeGridView,
} from "../components/common/ProductCatalog/style";

export default function ProductPage() {
  let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);

  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    productApi
      .getAllProducts()
      .then((res) => {
        setProducts(res.data?.products);
        setFilteredProducts(res.data?.products);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {};

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
          <ProductRoute name="home" />
          <i
            style={{ opacity: "0.6", marginRight: "10px", fontSize: 12 }}
            className="fa-solid fa-angle-right"
          ></i>
          <Typography sx={{ fontSize: 12 }}>Products</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ px: 3 }}>
        <Grid item xs={3} sx={{ justifyContent: "center" }}>
          <FilterPannel products={[...products]}></FilterPannel>
        </Grid>
        <Grid xs={9}>
          <Grid container item sx={{ justifyContent: "space-between" }}>
            <Grid item xs={7}></Grid>
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
                return <ProductRow product={product} cols={cols}></ProductRow>;
              })}
            </Grid>
          ) : (
            <Grid spacing={5} container sx={{ my: 3 }}>
              {filteredProducts?.map((product: IProduct) => {
                return (
                  <ProductsColumn
                    product={product}
                    cols={cols}
                  ></ProductsColumn>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
