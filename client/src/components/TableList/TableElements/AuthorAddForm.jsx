import React, { useState } from "react";

function AuthorAddForm({ onItemCreate }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("1900-01-01");

  const onInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setBirthdate("1900-01-01");
    onItemCreate(name, surname, birthdate);
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => onInputChange(e, setName)}
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname"
          value={surname}
          required
          onChange={(e) => onInputChange(e, setSurname)}
        />
      </label>
      <label>
        Birthdate:
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          placeholder="Birthdate"
          value={birthdate}
          required
          onChange={(e) => onInputChange(e, setBirthdate)}
        />
      </label>
      <input type="submit" value="Добавить" onClick={(e) => onFormSubmit(e)} />
    </form>
  );
}

export default AuthorAddForm;
