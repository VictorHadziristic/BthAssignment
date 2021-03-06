import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ModesCard from "../../components/ModesCard";

const titleCardArray = require("../../resources/ModesCards.json");
class Modes extends React.Component {
  state = {
      cards: titleCardArray.map((tempcard) => (
        <Col xs={4} className="mb-3 mt-3">
          <ModesCard data={tempcard}></ModesCard>
        </Col>
      )),
    };

  render() {
    return (
      <Container fluid>
      <Row className="mt-5 mb-5">
        <Col md={2}></Col>
        <Col md={8}>
          <Row>{this.state.cards}</Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
    );
  }
}


export default Modes;