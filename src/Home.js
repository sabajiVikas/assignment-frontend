import React, { useContext } from "react";
// reactstrap
import { Button, Col, Container, Row } from "reactstrap";
import { BookStoreContent } from "./context/BookStoreContent";
import Search from "./components/Search";
import Cards from "./components/Cards";

const Home = () => {
  const { data, fetchData, filterData } = useContext(BookStoreContent);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={{ size: 6, offset: 3 }}>
          <Search />
        </Col>
      </Row>
      <Row className="mt-3 text-center">
        <h5 className="m-0 text-primary">Filter By:-</h5>
        <Col md={{ size: 4, offset: 4 }}>
          <Button
            onClick={() => filterData("Spirituality")}
            className="me-2"
            color="primary"
          >
            Spirituality
          </Button>
          <Button
            onClick={() => filterData("Education")}
            className="ms-2 me-2"
            color="primary"
          >
            Education
          </Button>
          <Button
            onClick={() => fetchData()}
            className="ms-2"
            color="primary"
            outline
          >
            Reset
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        {data.map((product) => (
          <Col md={{ size: 4 }} className="mb-3" key={product._id}>
            <Cards products={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
