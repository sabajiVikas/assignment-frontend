import React, { useContext } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const CartCard = ({ products }) => {
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
      </CardBody>
    </Card>
  );
};

export default CartCard;
