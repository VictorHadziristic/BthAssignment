import React from "react";
import { Form, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeType = this.changeType.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.getSymbol = this.getSymbol.bind(this);
    this.state = {
      Temp: 75,
      Max: 91,
      Min: 50,
      Type: "F",
    };
  }

  getSymbol() {
    if (this.state.Type === "F") return "Celsius";
    else return "Fahrenheit";
  }

  // Load progress bar based on the temperature
  getPercentage() {
    console.log("Starting the bish");
    let range = this.state.Max - this.state.Min;
    let curTemp = this.state.Temp - this.state.Min;

    let min = range - (range / 3) * 2;
    let mid = range - range / 3;

    if (curTemp <= min) {
      console.log("First if");
      return <ProgressBar variant="primary" now={(curTemp / range) * 100} />;
    } else if (curTemp >= min && curTemp < mid) {
      console.log("Second if");
      return <ProgressBar variant="success" now={range} />;
    } else if (curTemp > mid) {
      console.log("Third if");
      return <ProgressBar variant="danger" now={(curTemp / range) * 100} />;
    }
  }

  changeTemp(val) {
    let t = this.state.Temp;
    if (val === true) {
      if (t < this.state.Max) this.setState({ Temp: ++t });
    } else {
      if (t > this.state.Min) {
        this.setState({ Temp: --t });
      }
    }
  }

  //Changes all the constants to Celsius if val === true or if its false changes it to Fahrenheit
  changeType(val) {
    let c = "C";
    let f = "F";
    //Fahrenheit : Celsius

    if (this.state.Type === f) {
      let tempT = Math.round((this.state.Temp - 32) * (5 / 9));
      let tempMax = Math.round((this.state.Max - 32) * (5 / 9));
      let tempMin = Math.round((this.state.Min - 32) * (5 / 9));

      this.setState({
        Temp: tempT,
        Max: tempMax,
        Min: tempMin,
        Type: c,
      });
    } else if (this.state.Type === c) {
      let tempT = Math.round(this.state.Temp * (9 / 5) + 32);
      let tempMax = Math.round(this.state.Max * (9 / 5) + 32);
      let tempMin = Math.round(this.state.Min * (9 / 5) + 32);
      this.setState({
        Temp: tempT,
        Max: tempMax,
        Min: tempMin,
        Type: f,
      });
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={5}>
            <FaTemperatureHigh size={64} className="mr-5 mt-3">
            </FaTemperatureHigh>
          </Col>
          <Col xs={5}>
            <Row>
              <Button onClick={() => this.changeTemp(true)}>
                <BsCaretUpFill></BsCaretUpFill>
              </Button>
            </Row>
            <Row>
              <h4>
                {this.state.Temp} {this.state.Type}
              </h4>
            </Row>
            <Row>
              <Button onClick={() => this.changeTemp(false)}>
                <BsCaretDownFill></BsCaretDownFill>
              </Button>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Button pill onClick={() => this.changeType()}>
            Change to {this.getSymbol()}
          </Button>
        </Row>
        <Row>{this.getPercentage()} </Row>
      </>
    );
  }
}

export default Light;
