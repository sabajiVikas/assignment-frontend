import React, { useState, useContext } from "react";
import { BookStoreContent } from "../context/BookStoreContent";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const UploadProd = () => {
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodCategory, setProdCategory] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodStock, setProdStock] = useState("");
  const [prodUrl, setProdUrl] = useState("");

  const { createData } = useContext(BookStoreContent);

  return (
    <Container>
      <Row className="my-3">
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center text-primary m-0">Upload Product</h2>
          <hr className="m-0" />
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              createData({
                prodName,
                prodDescription,
                prodCategory,
                prodPrice,
                prodStock,
                prodUrl,
              });

              setProdName("");
              setProdDescription("");
              setProdCategory("");
              setProdPrice("");
              setProdStock("");
              setProdUrl("");
            }}
            className="mt-3"
          >
            <FormGroup>
              <Input
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                type="text"
                placeholder="Product Name..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={prodDescription}
                onChange={(e) => setProdDescription(e.target.value)}
                type="text"
                placeholder="Product Description..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={prodCategory}
                onChange={(e) => setProdCategory(e.target.value)}
                type="text"
                placeholder="Product Category..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={prodPrice}
                onChange={(e) => setProdPrice(e.target.value)}
                type="number"
                placeholder="Product Price..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={prodStock}
                onChange={(e) => setProdStock(e.target.value)}
                type="number"
                placeholder="Product Stock..."
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={prodUrl}
                onChange={(e) => setProdUrl(e.target.value)}
                type="text"
                placeholder="Product PhotoURL..."
              />
            </FormGroup>
            <Button color="primary" block>
              Add Product
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadProd;
