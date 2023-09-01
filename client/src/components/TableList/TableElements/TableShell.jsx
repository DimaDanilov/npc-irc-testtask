import React, { useCallback } from "react";
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
  const memoizedOnItemCreate = useCallback(onItemCreate, []);
  const memoizedOnItemEdit = useCallback(onItemEdit, []);
  const memoizedOnItemDelete = useCallback(onItemDelete, []);

  return (
    <Col md="12">
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <Card.Title as="h4">{cardTitle}</Card.Title>
          <p className="card-category">{cardDescription}</p>
          {onItemCreate && (
            <AuthorAddForm onItemCreate={memoizedOnItemCreate} />
          )}
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <Table className="table-hover table-striped">
            <thead>
              <tr>
                {keys.map((key) => (
                  <th className="border-0" key={key}>
                    {key}
                  </th>
                ))}
                {onItemDelete && <th className="border-0" key={"delete"}></th>}
              </tr>
            </thead>
            <tbody>
              {data.map((el, rowIndex) =>
                onItemDelete ? (
                  <TableRowWithEditDelete
                    data={el}
                    key={rowIndex}
                    rowIndex={rowIndex}
                    onItemEdit={memoizedOnItemEdit}
                    onItemDelete={memoizedOnItemDelete}
                  />
                ) : (
                  <TableRow key={rowIndex} rowIndex={rowIndex} data={el} />
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TableShell;
