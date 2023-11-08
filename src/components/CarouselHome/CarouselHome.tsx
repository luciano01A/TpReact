import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/imagenes/img1.jpg" 
      alt="img1" 
      
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/imagenes/img2.jpg" alt="img2" />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/imagenes/img3.jpg" alt="img3" />
      <Carousel.Caption>
        <h3>Somos el mejor equipo de Aplicaciones Agiles</h3>
        <p>
          Te Brindamos todo el ascesorameinto en Desarrollo de Software
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome