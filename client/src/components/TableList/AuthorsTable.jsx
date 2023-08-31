import React, { useEffect, useState } from "react";
import { loadAuthors } from "api/AuthorApi";
import { deleteAuthor } from "api/AuthorApi";
import { createAuthor } from "api/AuthorApi";
import TableShell from "./TableElements/TableShell";

function AuthorsTable() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    const newAuthors = await loadAuthors();
    setAuthors(newAuthors);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const onAuthorCreate = async (e, name, surname, birthdate) => {
    e.preventDefault();
    await createAuthor(name, surname, birthdate);
    fetchAuthors();
  };

  const onAuthorDelete = async (id) => {
    await deleteAuthor(id);
    fetchAuthors();
  };

  return (
    <>
      {authors.length > 0 && (
        <TableShell
          cardTitle="Писатели"
          cardDescription="Самые известные писатели"
          data={authors}
          onItemCreate={onAuthorCreate}
          onItemDelete={onAuthorDelete}
        />
      )}
    </>
  );
}

export default AuthorsTable;
