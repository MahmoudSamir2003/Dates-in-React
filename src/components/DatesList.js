import React from "react";
import { Col, Row } from "react-bootstrap";

function DatesList({ person }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3">
                  <img className="img-avatar d-flex" src="1.jpg" alt="Dates" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-5">{item.data}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center p-5">There are no appointments</h2>
          )}{" "}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList;
