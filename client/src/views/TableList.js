import { loadAuthors } from "api/AuthorApi";
import { loadBooks } from "api/BookApi";
import DatabaseTable from "components/TableList/DatabaseTable";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import { Container, Row } from "react-bootstrap";

function TableList() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const fetchBooks = async () => {
    const newBooks = await loadBooks();
    setBooks(newBooks);
  };
  const fetchAuthors = async () => {
    const newAuthors = await loadAuthors();
    setAuthors(newAuthors);
  };

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {books.length > 0 && (
            <DatabaseTable
              cardTitle="Books"
              cardDescription="Books of famous authors"
              data={books}
            />
          )}
          {authors.length > 0 && (
            <DatabaseTable
              cardTitle="Authors"
              cardDescription="The most famous authors"
              data={authors}
            />
          )}
        </Row>
      </Container>
    </>
  );
}

export default TableList;
