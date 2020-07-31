import React from "react";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { FaLockOpen, FaLock } from "react-icons/fa";

class TV extends React.Component {
  constructor(props) {
    super(props);
    this.getTV = this.getTV.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.getImage = this.getImage.bind(this);
    this.changeSlot = this.changeSlot.bind(this);
    this.changeChannel = this.changeChannel.bind(this);
    this.state = {
      status: this.props.subdata.Status,
      images: [
        require("../../resources/images/CBC.jpg"),
        require("../../resources/images/Crave.png"),
        require("../../resources/images/ESPN.png"),
        require("../../resources/images/Hulu.png"),
        require("../../resources/images/netflix.png"),
      ],
      slot: 0
    };
  }

  getImage()
  {
    return this.state.images[this.state.slot]
  }

  changeChannel(val)
  {
    if(val === true)
    {
      this.changeSlot(true)
    }
    else
    this.changeSlot(false)
  }

  changeSlot(val)
  {
    let t = this.state.slot
    
    if(val = true)
    {
      if(this.state.slot === 4)
      this.setState({ slot: 0 })
      else this.setState({ slot: ++t })
    } 
    
    else
    {
      if(this.state.slot === 0)
      this.setState({ slot: 4 })
      else this.setState({ slot: --t })
    }
  }
 
  getTV() {
    if (this.state.status === "open") {
      return (
        <>
        <Row>
          <Col>
          <Image thumbnail src={this.getImage()}></Image>
           </Col>
        </Row>
        <Row>
        <Col xs={6}> 
        <Button variant="primary" onClick={() => this.changeChannel(false)}>Prev</Button>
        </Col>
        <Col xs={6}> 
        <Button variant="primary" onClick={() => this.changeChannel(true)}>Next</Button>
        </Col>
      </Row>
      </>
      );
    } else return (<><Row> <h4>       </h4> <h4> TV Off </h4></Row> <h4>       </h4> </>);
  }

  changeIcon() {
    if (this.state.status === "open") {
      this.setState({ status: "closed" });
    } else this.setState({ status: "open" });
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={5}>
            <h5>{this.props.subdata.Name}</h5>
          </Col>
          <Col xs={5}>
            <Form.Check
              type="switch"
              id={this.props.subdata.Name}
              label="On/Off"
              onClick={() => this.changeIcon()}
            />

            {console.log(this.props.subdata)}
          </Col>
        </Row>
        {this.getTV()}
        
      </>
    );
  }
}

export default TV;
