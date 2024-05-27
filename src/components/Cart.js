import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, remove, add, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.originalPrice * product.number,
    0
  );
  return (
    <div>
      {" "}
      <Alert variant="success">
        <Alert.Heading>Cart</Alert.Heading>
        {cartItems.length === 0 && <p>Cart is empty</p>}
        <table>
          <tr>
            <td width="25%">name</td>
            <td width="25%">number</td>
            <td width="25%">Price</td>
            <td width="25%">all</td>
          </tr>

          {cartItems.map((product) => (
            <tr>
              <td width="25%">{product.name}</td>
              <td width="25%">
                <Button variant="secondary" onClick={() => remove(product)}>
                  -
                </Button>
                {product.number}
                <Button variant="secondary" onClick={() => add(product)}>
                  +
                </Button>
              </td>
              <td width="25%">{product.originalPrice}₴</td>
              <td width="25%">{product.originalPrice * product.number}₴</td>
            </tr>
          ))}
        </table>
        <hr />

        <p>total: {totalPrice}</p>
        <Button
          variant="warning"
          size="big"
          active
          onClick={buy}
          disabled={cartItems.length === 0}
        >
          Order
        </Button>
      </Alert>
    </div>
  );
}
