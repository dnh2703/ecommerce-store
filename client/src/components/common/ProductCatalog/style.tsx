import styled from "@emotion/styled";

export const imgProductStyles = {
  "div.hover": {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    bottom: "-100px",

    div: {
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      border: "1px solid #fff",
      backgroundColor: "#fff",
      mx: "5px",
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": {
        color: "white",
        backgroundColor: "#6e2f1b",
        borderColor: "#6e2f1b",
      },
    },
    transition: "0.6s",
  },
  "&:hover": {
    "div.hover": {
      bottom: "30px",
    },
  },
  width: "100%",

  overflow: "hidden",
  position: "relative",
  //   overflow: "hidden",
};

export const productStyles = {
  "i.fa-star": {
    fontSize: "10px",
    color: "gray",
    mr: "8px",
  },
  span: {
    fontSize: "14px",
  },

  a: {
    textDecoration: "none",
  },
};

export const activeGridView = {
  color: "white",
  backgroundColor: "#6e2f1b",
  borderColor: "#6e2f1b",
};

export const borderCircleGray = {
  border: "1px solid gray ",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
};

export const Bar = styled("span")({
  width: "2px",
  height: "40%",
  backgroundColor: "#ccc",
  borderRadius: "10px",
});

export const FeaturedProductItem = styled("div")({
  display: "flex",
  margin: "16px 0",
});

export const InputPrice = styled("input")({
  width: "30%",
  border: "1px #ccc solid",
  margin: "0 8px",
  padding: "8px",
  borderRadius: "8px",
});

export const Filter = styled("span")({
  marginTop: "4px",
  backgroundColor: "#e1e1e1",
  fontSize: "14px",
  color: "gray",
  padding: "8px",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.5s",
  marginRight: "10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
    i: {
      transform: "rotate(180deg) scale(0.8)",
      color: "#fff",
    },
  },
  i: {
    transition: "0.4s",
    color: "#000",
    fontSize: "14px",
    marginLeft: "4px",
  },
});

export const FilterSide = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 12,
  letterSpacing: 2,
  color: "initial",
  borderBottom: "1px solid #e1e1e1",
  paddingBottom: "8px",
  marginBottom: "16px",
  cursor: "pointer",
});

export const FilterSideItem = styled("div")({
  textTransform: "capitalize",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 14,

  marginBottom: "8px",
  paddingBottom: "8px",
  cursor: "pointer",
  "&:hover": { color: "#000" },
});

export const checkboxCss = {
  fontWeight: "200",
  fontSize: "14px",
  display: "inline-flex",
  width: "100%",
  color: "#808080",
};
