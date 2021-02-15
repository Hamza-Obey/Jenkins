import React from 'react';
import Carousel from 'react-bootstrap/Carousel' ;
import "./ControlledCarousel.css"

function ControlledCarousel (){
    return (

      

<Carousel className="Carousel" >
  <Carousel.Item interval={1000}>
    <img
      className="Carousel1"
      src="Carousel1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="Carousel2"
      src="Carousel2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="Carousel3"
      src="Carousel3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> )
}
export default ControlledCarousel ;