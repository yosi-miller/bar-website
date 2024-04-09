import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../assets/images/4.jpg";
import Image2 from "../assets/images/5.jpg";
import Image3 from "../assets/images/6.jpg";

import { allCategories } from '../data/index';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  let navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (category, index) => {
    setSelectedCategory(category);
    if (category.images) {
      setCurrentImageIndex(index);
      setSelectedImage(category.images[index].image);
    } else {
      setSelectedImage(category.image);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? selectedCategory.images.length - 1 : newIndex;
    });
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex === selectedCategory.images.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory.images) {
        setSelectedImage(selectedCategory.images[currentImageIndex].image);
      } else {
        setSelectedImage(selectedCategory.image);
      }
    }
  }, [currentImageIndex, selectedCategory]);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col className='text-btn-box position-relative' lg='6'>
              <h1 className='mb-4'>ציפי שטיין - עיצוב אירועים</h1>
              <h4 className='mb-4'>הפיכת אירועי החלומות שלך למציאות</h4>
              <button className='btn btn-custom' onClick={() => navigate('/contact-us')}>ליצירת קשר</button>
            </Col>
            <Col lg='6' className='pt-lg-0 pt-5 text-center'>
              <div className="image-container">
                <img src={Image1} alt="image" className="main-image" />
                <div className="sub-images">
                  <img src={Image2} alt="image" className="sub-image" />
                  <img src={Image3} alt="image" className="sub-image" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="categories w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>הקטגוריות</h1>
              <p className='text-center'>באפשרותכם להתרשם מהביצועים הכי מרשימים שלנו</p>
            </Col>
          </Row>
          <Row>
            {allCategories.map((category) => {
              return <Col key={category.id}>
                <img
                  src={category.images ? category.images[0].image : category.image}
                  alt={category.title}
                  className='w-100 mb-5 rounded-top'
                  onClick={() => openModal(category, category.images ? 0 : undefined)}
                />
                <div className='text-center mb-4'>
                  <h2>{category.name}</h2>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-success rounded-5 btn-lg flex-nowrap' onClick={() => navigate(`${category.link}`)}>
                    <h5>למעבר לעמוד</h5>
                    <i className='fa-solid fa-chevron-left me-1'></i>
                  </button>
                </div>
              </Col>
            })}
          </Row>
        </Container>
      </div>

      {modalIsOpen && (
        <div className="custom-modal-overlay">
          <button className="close-button" onClick={closeModal}>
            <i className='fas fa-times'></i>
          </button>
          <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <img src={selectedImage} alt="Enlarged" className="modal-image" />
            </div>
          </div>
          {selectedCategory && selectedCategory.images && selectedCategory.images.length > 1 && (
            <>
              <button className="arrow arrow-left" onClick={goToPreviousImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="arrow arrow-right" onClick={goToNextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default HomePage
