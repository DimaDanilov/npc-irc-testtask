import React from "react";

// react-bootstrap components
import { Card, Table, Col } from "react-bootstrap";

function DatabaseTable({ cardTitle, cardDescription, data, onItemDelete }) {
  const keys = Object.keys(data[0]);
  const tableHeaderTitles = keys.map((key) => (
    <th className="border-0" key={key}>
      {key}
    </th>
  ));
  const tableHeader = [
    ...tableHeaderTitles,
    onItemDelete && <th className="border-0" key={"delete"}></th>,
  ];

  const tableRows = data.map((el, rowIndex) => {
    const values = Object.values(el);
    const tableRow = values.map((rowValues, valueIndex) => (
      <td key={rowIndex + " " + valueIndex}>
        <span>{rowValues}</span>
      </td>
    ));
    return (
      <tr key={rowIndex}>
        {tableRow}
        {onItemDelete && (
          <td>
            <button onClick={() => onItemDelete(el.id)}>Удалить</button>
          </td>
        )}
      </tr>
    );
  });

  return (
    <Col md="12">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <Card.Title as="h4">{cardTitle}</Card.Title>
          <p className="card-category">{cardDescription}</p>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <Table className="table-hover table-striped">
            <thead>
              <tr>{tableHeader}</tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DatabaseTable;
