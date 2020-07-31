import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FaLockOpen, FaLock } from "react-icons/fa";

class GarageDoor extends React.Component {
  constructor(props) {
    super(props);
    this.getIcon = this.getIcon.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.state = {
      status: this.props.subdata.Status
    };
  }

  //returns an icon image based on status
  getIcon() {
    if (this.state.status === "open") return <FaLockOpen></FaLockOpen>;
    else return <FaLock></FaLock>;
  }

  changeIcon()
  {
    if (this.state.status === "open")
    {
    this.setState({ status: "closed" })
    } 
    else
    this.setState({ status: "open" })

  }

  render() {
    return (
      <Row >
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        <Col xs={5} >
          <Form.Check
            type="switch"
            id={this.props.subdata.Name}
            label="Open/Close"
            onClick={() => this.changeIcon()}
          />

          {console.log(this.props.subdata)}
        </Col>
        <Col xs={2}>
          {this.getIcon()}
        </Col>
      </Row>
    );
  }
}

export default GarageDoor;
