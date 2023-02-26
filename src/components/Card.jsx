import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";
import CardImage from "./CardImage.jsx";
import CardBody from "./CardBody.jsx";

function Build() {
  return (

      <Card style={{    width: '22rem',
                        background:'hsl(216, 50%, 16%)',
                        color: "white",
                        
                    }}
            className=" shadow p-3 rounded-4">
        <CardImage />
        <CardBody />
    
      </Card>

);
}

export default Build;