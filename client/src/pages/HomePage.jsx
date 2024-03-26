import {Container, Row, Col} from 'react-bootstrap';
import Image1 from "../assets/images/4.jpg";
import Image2 from "../assets/images/5.jpg";
import Image3 from "../assets/images/6.jpg";


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-box'>
            <Col>
              <h1 className='mb-4'>ציפי שטיין - עיצוב אירועים</h1>
              <p className='mb-4'>עיצוב שולחנות וברים ברמה הגבוהה ביותר</p>
            </Col>
            <Col>
              <img src={Image1} alt="image" />
            </Col>
            {/* <Col>
              <img src={Image2} alt="image" />
            </Col>
            <Col>
              <img src={Image3} alt="image" />
            </Col> */}
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
      </div>
    </div>
  )
}

export default HomePage
