import React, { useContext } from "react";
import { BookStoreContent } from "../context/BookStoreContent";
import { Button, Col, Container, Row } from "reactstrap";
import CartCard from "./CartCard";

const CartProd = () => {
  const { cartItem, buyNow } = useContext(BookStoreContent);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center text-primary m-0">Products InCart</h2>
          <hr className="m-0" />
        </Col>
      </Row>
      <Row className="mt-3">
        {cartItem.map((product) => (
          <Col md={{ size: 4 }} className="mb-3" key={product._id}>
            <CartCard products={product} />
          </Col>
        ))}
      </Row>
      <Row className="mb-3">
        <Col md={{ size: 6, offset: 3 }}>
          <Button onClick={buyNow} color="warning" outline block>
            CheckOut
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartProd;
