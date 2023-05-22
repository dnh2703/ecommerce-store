import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Slider,
  Typography,
  styled,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IProduct, IProductLayout } from "../../../interfaces/product";
import { useState } from "react";
import {
  FilterSide,
  FilterSideItem,
  borderCircleGray,
  checkboxCss,
  imgProductStyles,
  productStyles,
} from "./style";

export const ProductRoute = (props: any) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/${props.main}/${props.name}`}
    >
      <Typography
        sx={{
          opacity: "0.6",
          color: "#000",
          marginRight: "10px",
          fontSize: "12px",
          textTransform: "capitalize",
          "&:hover": {
            opacity: "1",
            textDecoration: "underline",
          },
        }}
      >
        {props.name}
      </Typography>
    </Link>
  );
};

export const GridView = styled("div")({
  "&:hover": {
    Bar: { backgroundColor: "white" },
    backgroundColor: "#6e2f1b",
    borderColor: "#6e2f1b",
    "svg,i": {
      color: "white",
    },
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

export const CheckComponent = (props: any) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Grid
      item
      xs={12}
      sx={{
        mb: 3,
        mr: 4,
        overflow: "hidden",
        height: `${
          isShow ? (props.names.length === 3 ? "150px" : "120px") : "35px"
        }`,
        transition: "1s",
      }}
    >
      <FilterSide
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {props.filter}
        <i
          style={{ transition: "0.5s" }}
          className={`fa-solid fa-angle-down ${isShow || "fa-rotate-180"}`}
        ></i>
      </FilterSide>
      <div>
        {props.names?.map((name: string) => {
          return (
            <FilterSideItem
              style={{ width: "100%" }}
              onClick={
                name === "In stock" ? props.setInStock : props.setOutOfStock
              }
            >
              <span className="flex items-center">
                <input
                  checked={
                    name === "In stock" ? props.inStock : props.outOfStock
                  }
                  id="default-checkbox"
                  type="radio"
                  value=""
                  name="availibility"
                  className="w-4 h-4 text-blue-600 outline-none mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                {name}
              </span>
              <Box sx={borderCircleGray}>
                {
                  props.products.filter((product: IProduct) => {
                    if (name === "In stock") {
                      return product.inventory !== 0;
                    }
                    if (name === "Out of stock") {
                      return product.inventory === 0;
                    }
                  }).length
                }
              </Box>
            </FilterSideItem>
          );
        })}
      </div>
    </Grid>
  );
};

export const SideComponent = (props: any) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <Grid
      item
      xs={12}
      sx={{
        mb: 3,
        mr: 4,
        overflow: "hidden",
        height: `${
          isShow ? (props.names.length === 3 ? "150px" : "120px") : "35px"
        }`,
        transition: "1s",
      }}
    >
      <FilterSide
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {props.filter}
        <i
          style={{ transition: "0.5s" }}
          className={`fa-solid fa-angle-down ${isShow || "fa-rotate-180"}`}
        ></i>
      </FilterSide>
      <div>
        {props.names?.map((name: string) => {
          return (
            <FilterSideItem
              style={{ width: "100%" }}
              className={`${
                props.collection === name
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => {
                props.onclik(name);
              }}
            >
              {name}
              <Box sx={borderCircleGray}>
                {
                  props.products.filter((product: IProduct) => {
                    return product.category === name;
                  }).length
                }
              </Box>
            </FilterSideItem>
          );
        })}
      </div>
    </Grid>
  );
};

export const CheckboxProton = (props: any) => {
  const { checked, label, id } = props.cuisine;
  return (
    <div className={`flex items-center justify-between }`}>
      <FormControlLabel
        sx={{}}
        style={checkboxCss}
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "black",
              },
            }}
            size="small"
            checked={checked}
            onChange={() => props.changeChecked(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
        label={label}
      />
      <Box sx={borderCircleGray}>
        {
          props.filteredProducts.filter((product: IProduct) => {
            return product.company === label.toLowerCase();
          }).length
        }
      </Box>
    </div>
  );
};

export const SliderProton = (props: any) => {
  return (
    <div className="flex">
      <Slider
        style={{ color: "black " }}
        className="mx-2"
        value={props.value}
        onChange={props.changePrice}
        min={0}
        max={3000}
        size="small"
      />
    </div>
  );
};
