import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { IFilterProducts, IProduct } from "../interfaces/product";
import productApi from "../api/productApi";
import {
  GridView,
  ProductRoute,
  ProductRow,
  ProductsColumn,
  SideComponent,
} from "../components/common/ProductCatalogComponent/ProductCatalogComponent";
import {
  Bar,
  FeaturedProductItem,
  Filter,
  FilterSide,
  FilterSideItem,
  InputPrice,
  activeGridView,
} from "../components/common/ProductCatalogComponent/style";
import { FilterPannel } from "../components/common/ProductCatalogComponent/FilterPannel";

export default function ProductPage() {
  let [products, setProducts] = useState<IProduct[]>([]);
  let [cols, setCols] = useState<number>(4);
  let [isRow, setIsRow] = useState<boolean>(false);

  const [resultsFound, setResultsFound] = useState(true);
  let [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  let [filterSide, setFilterSide] = useState<IFilterProducts>({
    collection: "",
    availability: "",
    brand: "",
    price: false,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

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

  const handleSelectCategory = (event: any, value: any) =>
    !value ? null : setSelectedCategory(value);

  const applyFilters = () => {
    let updatedList = [...products];
    console.log(updatedList);

    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    setFilteredProducts(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory]);

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
            selectCollection={selectedCategory}
            products={[...products]}
            selectedCollection={handleSelectCategory}
          ></FilterPannel>
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
                      brand: "",
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
