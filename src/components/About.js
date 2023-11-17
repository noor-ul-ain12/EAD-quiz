
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
//import profileImage from '../assets/images/image4.jfif'
export  default function About (){
    return(
        <>
       <Container fluid className="bg-dark text-white">
       <Row className="mt-5">
        <Col>
          <h1>About Us </h1>
        </Col>
      </Row>
      <Col>
        <img
          src="https://d9jhi50qo719s.cloudfront.net/k63/samples/pju_800.JPG?230914091559"
          style={{ width: '30%', height: '30%' }}
        />
      </Col>
      <Row>
        <Col xs={12} md={6}>
          <div className="p-5">
            <p> At our bakery, baking isn't just a process; it's an art, a passion that's woven into every loaf, pastry, and confection we create. Established with a vision to redefine indulgence, we take pride in crafting experiences that transcend the ordinary. Our story began with a small kitchen and a big dream – to infuse the world with the warmth of freshly baked goods. 

What sets us apart is our unwavering commitment to quality. We meticulously source the finest ingredients, from velvety chocolate to locally grown fruits, ensuring that every bite tells a tale of exceptional flavor. But it's not just about ingredients; it's about the hands that shape them. Our dedicated team of master bakers pours their heart into each recipe, combining time-honored techniques with innovative twists.

From the moment you step into our bakery, you're enveloped in a symphony of scents and sights that awaken your senses. Every creation that graces our shelves is a result of countless hours of experimentation, dedication, and a genuine love for baking. But we're more than just bakers; we're a community brought together by a shared love for all things delicious.

As we knead, roll, and bake, we're not just making pastries – we're crafting memories. From birthday celebrations marked by our custom cakes to lazy Sunday mornings made better with our artisanal bread, we're there for life's sweetest moments. Our journey is one of passion, flavor, and the joy that comes from spreading happiness, one delectable treat at a time.
      </p>
       </div> 
        </Col>   
            </Row> 
     </Container>
        </>
    )
}