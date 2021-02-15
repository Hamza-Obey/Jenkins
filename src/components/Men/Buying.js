import React from 'react';
import Card from 'react-bootstrap/Card' ;
import Button from 'react-bootstrap/Button' ;
import CardDeck from 'react-bootstrap/CardDeck'
import "./Buying.css" ;


function Buying ()
    {
        return (
            <CardDeck className="Card">
            <Card>
              <Card.Img variant="top" src="Buy.jpg" />
              <Card.Body>
                <Card.Title>Trousers</Card.Title>
                <Card.Text>
                We have everything 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Buy.jpg" />
              <Card.Body>
                <Card.Title>Trousers</Card.Title>
                <Card.Text>
                We have everything 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="Buy.jpg" />
              <Card.Body>
                <Card.Title>Trousers</Card.Title>
                <Card.Text>
                  We have everything 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button variant="primary">Buy Now</Button>
              </Card.Footer>
            </Card>
            
          </CardDeck> 
          



          ) }
    export  default Buying ;
    