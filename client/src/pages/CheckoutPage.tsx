import * as React from "react";
import { useParams } from "react-router-dom";
import Information from "../components/common/CheckOut/Information";
import { Container } from "@mui/material";
import { useState } from "react";

export default function CheckoutPage() {
  let { process } = useParams();
  let [isPickup, setIsPickup] = useState<boolean>(false);
  return (
    <Container maxWidth="xl">
      <div className="flex">
        <Information />
      </div>
    </Container>
  );
}
