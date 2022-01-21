import React, { useContext } from "react";
import { BookStoreContent } from "../context/BookStoreContent";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

const Cards = ({ products }) => {
  const { addInCart } = useContext(BookStoreContent);

  return (
    <Card>
      <CardImg
        src={products.prodUrl}
        className="mt-1"
        height={300}
        style={{ objectFit: "contain" }}
        alt="cardImg"
      />
      <CardBody>
        <CardTitle className="text-center text-primary">
          Name:- {products.prodName}
        </CardTitle>
        <CardText className="text-center text-primary">
          Description:- {products.prodDescription}
        </CardText>
        <Button
          onClick={() => addInCart(products)}
          color="primary"
          block
          outline
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default Cards;
