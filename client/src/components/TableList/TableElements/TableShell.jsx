import React from "react";
import { Card, Table, Col } from "react-bootstrap";
import AuthorAddForm from "./AuthorAddForm";
import { TableRow, TableRowWithEditDelete } from "./TableRows";

function TableShell({
  cardTitle,
  cardDescription,
  data,
  onItemCreate,
  onItemEdit,
  onItemDelete,
}) {
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
    return onItemDelete ? (
      <TableRowWithEditDelete
        data={el}
        key={rowIndex}
        rowIndex={rowIndex}
        onItemEdit={onItemEdit}
        onItemDelete={onItemDelete}
      />
    ) : (
      <TableRow key={rowIndex} rowIndex={rowIndex} data={el} />
    );
  });

  return (
    <Col md="12">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <Card.Title as="h4">{cardTitle}</Card.Title>
          <p className="card-category">{cardDescription}</p>
          {onItemCreate && <AuthorAddForm onItemCreate={onItemCreate} />}
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

export default TableShell;
