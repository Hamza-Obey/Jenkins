import React from 'react';
import Card from 'react-bootstrap/Card' ;
import Button from 'react-bootstrap/Button' ;
import CardDeck from 'react-bootstrap/CardDeck'
import "./Buying1.css" ;


function Buying1 ()
    {
        return (
            <CardDeck className="Card">
            <Card>
              <Card.Img variant="top" src="Carousel1.jpg" />
              <Card.Body>
                <Card.Title> Dress </Card.Title>
                <Card.Text>
                 All For You
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Carousel1.jpg" />
              <Card.Body>
                <Card.Title> Dress </Card.Title>
                <Card.Text>
                 All For You
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Carousel1.jpg" />
              <Card.Body>
                <Card.Title> Dress </Card.Title>
                <Card.Text>
                 All For You 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            
          </CardDeck> 
          



          ) }
    export  default Buying1 ;
    