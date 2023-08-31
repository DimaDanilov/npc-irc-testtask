import React, { useEffect, useState } from "react";
import DatabaseTable from "./DatabaseTable";
import { loadAuthors } from "api/AuthorApi";
import { deleteAuthor } from "api/AuthorApi";

function AuthorsTable() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    const newAuthors = await loadAuthors();
    setAuthors(newAuthors);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const onAuthorDelete = async (id) => {
    await deleteAuthor(id);
    fetchAuthors();
  };

  return (
    <>
      {authors.length > 0 && (
        <DatabaseTable
          cardTitle="Писатели"
          cardDescription="Самые известные писатели"
          data={authors}
          onItemDelete={onAuthorDelete}
        />
      )}
    </>
  );
}

export default AuthorsTable;
