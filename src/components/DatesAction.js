import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const DatesAction = ({deletData,onViewDAta}) => {
  return (
    <Row className="justify-content-center my-2 ">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={deletData} className="btn-style p-2">clear all</Button>
        <Button onClick={onViewDAta} className="btn-style p-2">Display data</Button>
      </Col>
    </Row>
  );
};

export default DatesAction;
