
import { Container, Row, Col} from 'react-bootstrap';
//import profileImage from '../assets/images/logo.jfif'
function Welcome (){

    return (
    <>
        <Container fluid className="bg-dark text-white">
      <Row>
        <Col xs={12} md={6}>
          <div className="p-5">
            <p>  Indulge in a symphony of flavors at our artisanal bakery. 
              Welcome to a world where the aroma of freshly baked  wonders captivates your senses. Our master bakers  craft each creation with passion, using only the finest 
              ingredients to ensure every bite is pure delight.  From flaky croissants to decadent cakes, experience 
             the epitome of taste and craftsmanship. Whether it's  a special occasion or a craving for the extraordinary, 
          our bakery offers a haven for your palate. Elevate your moments with the magic of our oven-fresh delights.  Your journey to exceptional taste begins here. </p>  
          </div>
        </Col>   
            </Row>
            {/* <img src={profileImage} alt=""/> */}
    </Container>
  </>
    )
}

export default Welcome