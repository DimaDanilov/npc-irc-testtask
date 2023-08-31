import React, { useEffect, useState } from "react";
import DatabaseTable from "./DatabaseTable";
import { loadBooks } from "api/BookApi";

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
        <DatabaseTable
          cardTitle="Книги"
          cardDescription="Книги известных авторов"
          data={books}
        />
      )}
    </>
  );
}

export default BooksTable;
