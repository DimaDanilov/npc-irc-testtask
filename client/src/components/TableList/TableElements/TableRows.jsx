import React, { useState } from "react";

function TableRow({ data, rowIndex }) {
  const values = Object.values(data);
  const tableRow = values.map((rowValues, valueIndex) => (
    <td key={rowIndex + " " + valueIndex}>
      <span>{rowValues}</span>
    </td>
  ));
  return <tr>{tableRow}</tr>;
}

function TableRowWithEditDelete({ data, rowIndex, onItemEdit, onItemDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [fieldsData, setFieldsData] = useState(Object.entries(data));

  const onEditHandle = () => {
    if (editMode) {
      onItemEdit(Object.fromEntries(fieldsData));
    }
    setEditMode(!editMode);
  };

  const onFieldChange = (e, valueIndex) => {
    const newArray = [...fieldsData];
    newArray[valueIndex][1] = e.target.value;
    setFieldsData(newArray);
  };

  const entries = Object.entries(data);
  const tableRow = entries.map((rowEntries, valueIndex) => (
    <td key={rowIndex + " " + valueIndex}>
      {editMode && rowEntries[0] != "id" ? ( // if not ID then change to input
        <input
          type={rowEntries[0] === "birthdate" ? "date" : "text"}
          value={fieldsData[valueIndex][1]}
          onChange={(e) => onFieldChange(e, valueIndex)}
        />
      ) : (
        <span>{rowEntries[1]}</span>
      )}
    </td>
  ));

  return (
    <tr>
      {tableRow}
      <td>
        <button onClick={onEditHandle}>Редактировать</button>
      </td>
      <td>
        <button onClick={() => onItemDelete(data.id)}>Удалить</button>
      </td>
    </tr>
  );
}

export { TableRow, TableRowWithEditDelete };
