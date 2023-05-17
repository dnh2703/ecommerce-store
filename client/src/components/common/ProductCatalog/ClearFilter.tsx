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
        <div
          className="inline-flex ml-2 mt-1 p-2 cursor-pointer group/clear items-center hover:text-red-500"
          onClick={props.resetAll}
        >
          Clear All{" "}
          <span>
            <i className="group-hover/clear:rotate-180 group-hover/clear:scale-75 ml-1 duration-500 fa-solid fa-xmark"></i>
          </span>
        </div>
      ) : (
        ""
      )}
    </Grid>
  );
}
