import React, { useEffect, useState } from "react";
import { loadBooks } from "api/BookApi";
import TableShell from "./TableElements/TableShell";

const BOOKS_AMOUNT_PER_PAGE = 1;

function BooksTable() {
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0); //Total Books in DB
  const [bookPage, setBookPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    setIsLoading(true);
    const newBooks = await loadBooks(bookPage, BOOKS_AMOUNT_PER_PAGE);
    setBooks((books) => [...books, ...newBooks.rows]);
    setTotalBooks(newBooks.count);
    setBookPage((bookPage) => bookPage + 1);
    setIsLoading(false);
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
            <button onClick={fetchBooks} disabled={isLoading}>
              Добавить новые книги
            </button>
          )}
        </>
      )}
    </>
  );
}

export default BooksTable;
