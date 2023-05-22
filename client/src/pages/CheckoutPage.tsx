import * as React from "react";
import { useParams } from "react-router-dom";
import Information from "../components/common/CheckOut/Information";
import { Container } from "@mui/material";

export default function CheckoutPage() {
  let { process } = useParams();

  return (
    <Container maxWidth="xl">
      <Information />
    </Container>
  );
}
