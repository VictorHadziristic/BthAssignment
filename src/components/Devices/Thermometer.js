import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

class Light extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        Temp: 75
    };
  }

 
  render() {
    return (
      <Row>
        <Col xs={5}>
            
        <FaTemperatureHigh size={64} className="mr-5 mt-3"> </FaTemperatureHigh>
        
        
        </Col>
        <Col xs={5}>
          <Row> <Button onClick={console.log("Up")}><BsCaretUpFill></BsCaretUpFill></Button></Row>
          <Row> <h4>75 F</h4></Row>
          <Row> <Button onClick={console.log("Down")}><BsCaretDownFill></BsCaretDownFill></Button></Row>
          
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default Light;
