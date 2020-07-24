import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        <Col xs={5}>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="On/Off"
              //onChange={handleChange}
            />
            <Form.Label>Brightness</Form.Label>
    <Form.Control type="range" />
          </Form>
          {console.log('Light Was called')}
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default Light;
