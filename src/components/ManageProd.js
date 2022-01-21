import React, { useContext } from "react";
import { BookStoreContent } from "../context/BookStoreContent";
import { Button, Col, Container, Row } from "reactstrap";

const ManageProd = () => {
  const { data, removeData, fetchData } = useContext(BookStoreContent);
  return (
    <Container>
      <Row className="my-3">
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center text-primary m-0">Manage Product</h2>
          <hr className="m-0" />
          {data.map((product) => (
            <Row className="mt-3" key={product._id}>
              <Col className="text-center text-primary">
                <strong>{product.prodName}</strong>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    removeData(product._id);
                    fetchData();
                  }}
                  color="danger"
                  block
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProd;
