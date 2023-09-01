import React, { useEffect, useState } from "react";
import { loadBooks } from "api/BookApi";
import TableShell from "./TableElements/TableShell";

const BOOKS_AMOUNT_PER_PAGE = 1;

function BooksTable() {
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0); //Total Books in DB
  const [bookPage, setBookPage] = useState(1);

  const fetchBooks = async () => {
    const newBooks = await loadBooks(bookPage, BOOKS_AMOUNT_PER_PAGE);
    setBooks((books) => [...books, ...newBooks.rows]);
    setTotalBooks(newBooks.count);
    setBookPage((bookPage) => bookPage + 1);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {books.length > 0 && (
        <>
          <TableShell
            cardTitle="Книги"
            cardDescription="Книги известных авторов"
            data={books}
          />
          {totalBooks >= bookPage && (
            <button onClick={fetchBooks}>ADD MORE</button>
          )}
        </>
      )}
    </>
  );
}

export default BooksTable;
