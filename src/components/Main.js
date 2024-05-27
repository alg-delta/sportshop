import React from "react";

import Row from "react-bootstrap/Row";
import Product from "./Product";
import Container from "react-bootstrap/esm/Container";
import Product2 from "./Product2";

export default function Main(props) {
  const { products1, products2, add } = props;

  return (
    <div className="css">
      <h1 className="title">Welcome</h1>
      <Container className="products">
        <h3>Weekly discounts</h3>
        {""}

        <Row xs={1} md={2} lg={3} className="gap-4 justify-content-center">
          {products1.map((product) => (
            <Product key={product.id} product={product} add={add} />
          ))}
        </Row>
      </Container>
      <br /> <br /> <br /> <br /> <br /> <br />
      <h2 className="title">There are amazing products here</h2>
      <Row xs={1} md={2} lg={3} className="gap-4 justify-content-center">
        {products2.map((product) => (
          <Product2 key={product.id} product={product} add={add} />
        ))}
      </Row>
      <Product2 />
    </div>
  );
}
