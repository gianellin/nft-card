import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";
// import CardImage from "./CardImage.jsx";
// import CardBody from "./CardBody.jsx";

function Build() {
  return (

      <Card style={{    width: '20rem',
                        padding: '1.3vh',
                        background:'hsl(216, 50%, 16%)',
                        
                    }}
            className="shadow p-3 hover-overlay rounded-4">
        <Card.Img variant="top" src="./images/image-equilibrium.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

);
}

export default Build;