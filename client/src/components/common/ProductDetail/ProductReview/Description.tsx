import * as React from "react";
import { IProduct } from "../../../../interfaces/product";
import { IReview } from "../../../../interfaces/review";

export interface IProductReview {
  product?: IProduct;
  reviews?: IReview[];
}

export default function Description(props: IProductReview) {
  return (
    <div className=" text-gray-500">
      <p className="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="mb-10">
        Don’t ever play yourself. The weather is amazing, walk with me through
        the pathway of more success. Take this journey with me, Lion! The other
        day the grass was brown, now it’s green because I ain’t give up. Never
        surrender
      </p>
      <ul className="mx-20 mb-10">
        <li>Claritas est etiam processus dynamicus.</li>
        <li>Qui sequitur mutationem consuetudium lectorum. </li>
        <li>Claritas est etiam processus dynamicus.</li>
        <li>Qui sequitur mutationem consuetudium lectorum. </li>
        <li>Claritas est etiam processus dynamicus.</li>
        <li>Qui sequitur mutationem consuetudium lectorum. </li>
      </ul>
      <p className=" mb-10">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release.
      </p>
    </div>
  );
}
