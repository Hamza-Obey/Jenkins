import React from 'react';
import Carousel from 'react-bootstrap/Carousel' ;
import "./Carouselh.css"
function Carouselh (){
    return (


<Carousel className="Carousel" >
  <Carousel.Item interval={800}>
    <img
      className="Carousel1"
      src="H1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1> Welcome To Our Clothes Store </h1>
<p>We provide have the top clothing quality out there</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="Carousel2"
      src="H2.jpg"
      alt="second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={400}>
    <img
      className="Carousel3"
      src="H3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> )
}
export default Carouselh ;