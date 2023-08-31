import React, { useState } from "react";

function AuthorAddForm({ onItemCreate }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("1900-01-01");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const onBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const onFormSubmit = (e) => {
    setName("");
    setSurname("");
    setBirthdate("1900-01-01");
    onItemCreate(e, name, surname, birthdate);
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
          onChange={(e) => onNameChange(e)}
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
          onChange={(e) => onSurnameChange(e)}
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
          onChange={(e) => onBirthdateChange(e)}
        />
      </label>
      <input type="submit" value="Добавить" onClick={(e) => onFormSubmit(e)} />
    </form>
  );
}

export default AuthorAddForm;
