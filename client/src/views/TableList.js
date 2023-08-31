import AuthorsTable from "components/TableList/AuthorsTable";
import BooksTable from "components/TableList/BooksTable";
import React from "react";

// react-bootstrap components
import { Container, Row } from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <BooksTable />
          <AuthorsTable />
        </Row>
      </Container>
    </>
  );
}

export default TableList;
