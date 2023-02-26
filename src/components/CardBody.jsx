import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";
import Footer from "./Footer.jsx";

function CardBody() {
  return (

   
        <Card.Body>
          
                <Card.Title className="my-2">Equilibrium #3429</Card.Title>
                <Card.Text className="my-3" id="text" >
                 Our Equilibrium collection promotes balance and calm.
                </Card.Text>
                <div class="icons">
                    <div class="eth">
                        <img src="./images/icon-ethereum.svg" alt="eth"/>
                        <span>0.041 ETH</span>
                    </div>
                    <div class="time">
                        <img src="./images/icon-clock.svg" alt="clock"/>
                        <span>3 days left</span>
                    </div>
                    </div>
                <div class="divider"></div>
                <Footer />
        </Card.Body>
      


);
}

export default CardBody;