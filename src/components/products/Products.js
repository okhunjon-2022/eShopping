import React from "react";
import { Container } from "./Products.styles";
import { popularProducts } from "../../data";
import Product from "../product/Product";

function Products() {
  return (
    <Container>
      {popularProducts?.map((item) => (
        <Product item={item} key={item?.id} />
      ))}
    </Container>
  );
}

export default Products;
