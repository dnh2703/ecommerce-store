import * as React from "react";
import { Filter } from "./style";
import { Grid } from "@mui/material";
import { IBrand, ClearFilterProduct } from "../../../interfaces/product";

export default function ClearFilter(props: ClearFilterProduct) {
  return (
    <Grid item xs={9}>
      {props.collection !== "all" && (
        <Filter
          onClick={() => {
            props.resetCollection();
          }}
        >
          Collection:{" "}
          <span className="ml-1 capitalize">{props.collection}</span>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </Filter>
      )}

      {props.isInStock && (
        <Filter onClick={() => props.resetInStock()}>
          Availability: <span className="ml-1 capitalize">In stock</span>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </Filter>
      )}

      {props.isOutOfStock && (
        <Filter onClick={() => props.resetIsOutOfStock()}>
          Availability: <span className="ml-1 capitalize">Out of stock</span>
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </Filter>
      )}

      {props.isPriceChange && (
        <Filter onClick={() => props.resetPrice()}>
          <span className="ml-1 capitalize">
            ${props.price[0]} - ${props.price[1]}
          </span>{" "}
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </Filter>
      )}

      {props.brands.map((brand: IBrand) => {
        if (brand.checked) {
          return (
            <Filter onClick={() => props.resetBrand(brand.id)}>
              Brand: <span className="ml-1 capitalize">{brand.label}</span>{" "}
              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </Filter>
          );
        }
        return <></>;
      })}
      {props.collection !== "all" ||
      props.isInStock ||
      props.isOutOfStock ||
      props.brands[0].checked ||
      props.brands[1].checked ||
      props.brands[2].checked ||
      props.isPriceChange ? (
        <Filter onClick={props.resetAll}>
          Clear All{" "}
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </Filter>
      ) : (
        ""
      )}
    </Grid>
  );
}
