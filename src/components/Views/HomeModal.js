import React from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import GarageDoor from "../Devices/Garage";

export function HomeModal(props, state) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const populateArray = () => {
    let d = props.data.Modal.Unit;
    console.log("Function Start")
    console.log(d);
    let temp = d.map((device) => (
      <Row>
        <GarageDoor subdata={device} key={device.id}>
          {}
        </GarageDoor>
      </Row>
    ));
    console.log("Function End")
  };

  return (
    <>
      <Button
        className="mt-5"
        as="pill"
        variant="outline-primary"
        size="lg"
        onClick={handleShow}
        block
        >
        {props.data.Name}
      </Button>

      <Modal show={show} onHide={handleClose} animation>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.Name}</Modal.Title>
        </Modal.Header>
        <Row className="mt-3 mb-2 ml-4">
          <Form>
          <GarageDoor subdata={props.data.Modal.Unit[0]}></GarageDoor>
          </Form>
        </Row>
        <Row className="mt-3 mb-2 ml-4">
        <Form>
          <GarageDoor subdata={props.data.Modal.Unit[1]}></GarageDoor>
          </Form>
        </Row>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
