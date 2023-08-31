import React, { useEffect, useState } from "react";
import { loadBooks } from "api/BookApi";
import TableShell from "./TableElements/TableShell";

function BooksTable() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const newBooks = await loadBooks();
    setBooks(newBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {books.length > 0 && (
        <TableShell
          cardTitle="Книги"
          cardDescription="Книги известных авторов"
          data={books}
        />
      )}
    </>
  );
}

export default BooksTable;
