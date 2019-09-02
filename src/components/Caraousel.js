import React from 'react';
import { Carousel } from 'react-bootstrap';

function Caraousel() {
  return(

  	<Carousel>
  	  <Carousel.Item>
  	    <img
  	      className="d-block w-100"
  	      src="http://bmkresto.com/wp-content/uploads/2018/10/BANNER-homepage-BMK-Supermantap3.jpg"
  	      alt="First slide"
  	    />
  	  </Carousel.Item>
  	  <Carousel.Item>
  	    <img
  	      className="d-block w-100"
  	      src="https://www.dapurbawangmerah.com/wp-content/uploads/2018/04/MENU-nasi-box-hemat-regular-1803.jpg"
  	      alt="Third slide"
  	    />
  	  </Carousel.Item>
  	</Carousel>
  )
}

export default Caraousel