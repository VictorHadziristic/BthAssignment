import React from "react";
import {Card} from "react-bootstrap";
import {
  BsFillHouseFill,
  BsFillDisplayFill,
  BsMusicNoteBeamed,
  BsPlug,
  BsFillPlusCircleFill
} from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";

class ModesCard extends React.Component {
  constructor(props) {
    super(props);
    this.pickImage = this.pickImage.bind(this);
    this.state = { showMessage: false }
  }

  state = {
    images:
    {
     "BsFillHouseFill": BsFillHouseFill,
      "BsFillDisplayFill":BsFillDisplayFill,
      "GiLightBulb":GiLightBulb ,
      "BsMusicNoteBeamed":BsMusicNoteBeamed,
      "BsPlug":BsPlug,
      "BsFillPlusCircleFill":BsFillPlusCircleFill,
      "WiThermometer": WiThermometer
    }
  };

  pickImage()
  {
    var Img = this.state.images[this.props.data.Image]
    return  ( 
    <div className="p-2 d-flex justify-content-md-center"  style={{color: 'SteelBlue'}}>
        <Img size={64} />
    </div>)
  }

  render() {
    return (
      <Card border="primary" className="h-60 shadow-sm bg-white rounded justify-content-md-center">
        <Card.Body className="d-flex flex-column justify-content-md-center">
         {this.props.data.Name} 
        </Card.Body>
      </Card>
    );
  }
}

export default ModesCard;
