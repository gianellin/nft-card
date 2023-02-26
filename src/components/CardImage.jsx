import React from "react";
import "../App.css";
import {Card} from "react-bootstrap";


export default function CardImage() {
 
  return ( 
       
    <div className="banner">
        <Card.Img variant="top" src="./images/image-equilibrium.jpg" alt="equi" className=" rounded-3  " ></Card.Img>
        <div>
            <img src="./images/icon-view.svg" alt="view" className=" view" />
        </div>
    </div>
  
 
);
};

