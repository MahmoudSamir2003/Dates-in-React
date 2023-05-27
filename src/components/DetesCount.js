import React from "react";
import { Col, Row } from "react-bootstrap";

const DetesCount = ({ person }) => {
  return (
    <Row className="justify-content-center m-2">
      <Col sm="8" className="">
        Dates {person.length} you have
      </Col>
    </Row>
  );
};

export default DetesCount;
