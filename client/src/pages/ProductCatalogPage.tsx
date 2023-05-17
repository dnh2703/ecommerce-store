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
import { PROPERTY_TYPES } from "@babel/types";
import ClearFilter from "../components/common/ProductCatalog/ClearFilter";

export default function ProductPage() {
  let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);
  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  let [isInStock, setIsInStock] = useState<boolean>(false);
  let [isOutOfStock, setIsOutOfStock] = useState<boolean>(false);
  let [collection, setCollection] = useState<string>("all");

  const [price, setPrice] = useState<number[]>([0, 3000]);
  const [isPriceChange, setIsPriceChange] = useState<boolean>(false);

  const [brands, setBrands] = useState([
    { id: 1, checked: false, label: "Ikea" },
    { id: 2, checked: false, label: "Marcos" },
    { id: 3, checked: false, label: "Liddy" },
  ]);

  useEffect(() => {
    productApi
      .getAllProducts()
      .then((res) => {
        setProducts(res.data?.products);
        setFilteredProducts(res.data?.products);
      })
      .catch((e) => console.error(e));
  }, []);

  const applyFilter = () => {
    let newProducts = filteredProducts;

    if (collection === "all") {
      newProducts = [...products];
    } else {
      newProducts = [...products].filter(
        (product: IProduct) => product.category === collection
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

  useEffect(() => {
    applyFilter();
  }, [isInStock, isOutOfStock, collection, brands, price]);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const resetCollection = () => setCollection("all");
  const resetIsInStock = () => setIsInStock(false);
  const resetIsOutOfStock = () => setIsOutOfStock(false);

  const handleCollection = (name: string) => {
    setCollection(name);
    resetIsInStock();
    resetIsOutOfStock();
    resetPrice();
    resetBrands();
  };

  const resetBrands = () =>
    setBrands([
      { id: 1, checked: false, label: "Ikea" },
      { id: 2, checked: false, label: "Marcos" },
      { id: 3, checked: false, label: "Liddy" },
    ]);

  const handleInStock = () => {
    setIsInStock(!isInStock);
  };

  const handleOutOfStock = () => {
    setIsOutOfStock(!isOutOfStock);
  };

  const handleChangeChecked = (id: any) => {
    const brandStateList = brands;
    const changeCheckedBrand = brandStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBrands(changeCheckedBrand);
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
  };

  const resetPrice = () => {
    setPrice([0, 3000]);
    setIsPriceChange(false);
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
          ></FilterPannel>
        </Grid>
        <Grid xs={9}>
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
