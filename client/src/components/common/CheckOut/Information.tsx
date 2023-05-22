import * as React from "react";
import { Link } from "react-router-dom";

export default function Information(props: any) {
  return (
    <div className="p-14">
      <p>
        <Link className="text-2xl font-medium" to={"/home"}>
          4bros - Ecommerce
        </Link>
      </p>
    </div>
  );
}
