import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product2(props) {
  const { product, add } = props;
  if (!product || !product.image) {
    return null;
  }
  return (
    <div>
      <Card style={{ width: "18rem", padding: "0" }} className="card">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.originalPrice}₴</Card.Title>

          <Card.Text>{product.name}</Card.Text>
          <Button variant="warning" onClick={() => add(product)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
