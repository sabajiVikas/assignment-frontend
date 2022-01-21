import React, { useContext, useState } from "react";
import { BookStoreContent } from "../context/BookStoreContent";
import { Button, Form, Input, InputGroup } from "reactstrap";

const Search = () => {
  const [key, setKey] = useState("");

  const { searchData } = useContext(BookStoreContent);

  return (
    <Form>
      <InputGroup>
        <Input
          onChange={(e) => setKey(e.target.value)}
          value={key}
          className="form-control"
          placeholder="Search Books..."
        />
        <Button onClick={() => searchData(key)} color="primary">
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
