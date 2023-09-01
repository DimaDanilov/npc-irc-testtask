import React, { useEffect, useState } from "react";
import {
  loadAuthors,
  deleteAuthor,
  createAuthor,
  editAuthor,
} from "api/AuthorApi";
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

  const onAuthorCreate = async (name, surname, birthdate) => {
    const newAuthor = await createAuthor(name, surname, birthdate);
    setAuthors([...authors, newAuthor]);
  };

  const onAuthorEdit = async (data) => {
    const newAuthor = await editAuthor(data);
    const updatedAuthors = [...authors];
    const indexToReplace = updatedAuthors.findIndex(
      (author) => author.id === newAuthor.id
    );
    if (indexToReplace !== -1) {
      updatedAuthors[indexToReplace] = newAuthor;
      setAuthors(updatedAuthors);
    }
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
          onItemEdit={onAuthorEdit}
          onItemDelete={onAuthorDelete}
        />
      )}
    </>
  );
}

export default AuthorsTable;
