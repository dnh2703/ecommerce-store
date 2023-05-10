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
      "&:hover": {
        color: "white",
        backgroundColor: "#6e2f1b",
        borderColor: "#6e2f1b",
      },
    },
    transition: "0.4s",
  },
  "&:hover": {
    "div.hover": {
      bottom: "30px",
    },
  },

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
    fontSize: "12px",
    color: "gray",
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
