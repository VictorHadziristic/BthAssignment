import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import {
  BsFillSkipBackwardFill,
  BsFillPlayFill,
  BsFillSkipForwardFill,
} from "react-icons/bs";

class MusicPlayer extends React.Component {
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
            <Form.Label>Volume</Form.Label>
            <Form.Control type="range" />
            <Row>
                <BsFillSkipBackwardFill className="ml-4 mr-2"></BsFillSkipBackwardFill>
                <BsFillPlayFill className="ml-3 mr-2"></BsFillPlayFill>
                <BsFillSkipForwardFill className="ml-3 mr-2"></BsFillSkipForwardFill>
            </Row>
          </Form>
          {console.log("Light Was called")}
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default MusicPlayer;
