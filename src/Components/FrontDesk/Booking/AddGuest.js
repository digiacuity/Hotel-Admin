import { Form } from "formik";
import React from "react";
import { Accordion, Col, FloatingLabel, Row } from "react-bootstrap";

function AddGuest() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="addg">Add Guest</Accordion.Header>
        <Accordion.Body>
          <Row className="g-2 ">
            <Col md>
              <FloatingLabel label="First  Name">
                <Form.Control
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  required
                  className="book-list"
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label=" Last Name">
                <Form.Control
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  required
                  className="book-list"
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label=" Gender">
                <Form.Select
                  id="gender"
                  name="gender"
                  placeholder="gender"
                  required
                  className="book-list"
                >
                  <option value=" male" selected>
                    {" "}
                    Male
                  </option>
                  <option value="female ">Female </option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel label="  ID No">
                <Form.Control
                  type="text"
                  minLength={10}
                  maxLength={13}
                  placeholder="idno"
                  id="idno"
                  name="idno"
                  required
                  className="book-list"
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AddGuest;
