import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactUsPage = () => {
  const [formMode, setFormMode] = useState('contact');

  const toggleFormMode = () => {
    setFormMode(prevMode => prevMode === 'contact' ? 'recommend' : 'contact');
  };

  return (
    <div>
      <header className='conectUsBackground w-100 min-vh-100 d-flex align-items-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={6}>
              <div className='custom-bg-color shadow p-4 rounded'>
                <div className='d-flex flex-column align-items-center mb-4'>
                  <label className="switch">
                    <input type="checkbox" checked={formMode === 'recommend'} onChange={toggleFormMode} />
                    <span className="slider">
                      <span className="slider-text">צור קשר</span>
                      <span className="slider-text">המליצו עלינו</span>
                    </span>
                  </label>
                  <h2>{formMode === 'contact' ? 'צור קשר' : 'המליצו עלינו'}</h2>
                </div>
                {formMode === 'contact' ? (
                  <Form>
                    <Form.Group controlId='formName'>
                      {/* <Form.Label>שם מלא</Form.Label> */}
                      <Form.Control type='text' placeholder='הזן את השם המלא שלך'/>
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                      {/* <Form.Label>כתובת אימייל</Form.Label> */}
                      <Form.Control type="email" placeholder="הזן את כתובת האימייל שלך" />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mt-3">
                      {/* <Form.Label>הודעה</Form.Label> */}
                      <Form.Control as="textarea" rows={4} placeholder="הזן את ההודעה שלך" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-4">
                      שלח
                    </Button>
                  </Form>
                ) : (
                  <Form>
                    <Form.Group controlId='formName'>
                      {/* <Form.Label>שם מלא</Form.Label> */}
                      <Form.Control type='text' placeholder='הזן את השם המלא שלך'/>
                    </Form.Group>

                    {/* <Form.Group controlId="formEmail" className="mt-3">
                      <Form.Label>כתובת אימייל</Form.Label>
                      <Form.Control type="email" placeholder="הזן את כתובת האימייל שלך" />
                    </Form.Group> */}

                    <Form.Group controlId="formRecommendation" className="mt-3">
                      {/* <Form.Label>המלצה</Form.Label> */}
                      <Form.Control as="textarea" rows={4} placeholder="הזן את ההמלצה שלך" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-4">
                      שלח המלצה
                    </Button>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default ContactUsPage;