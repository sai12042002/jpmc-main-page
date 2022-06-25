import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import Button from "react-bootstrap/Button";

function Home() {
  return (

    <div>
    {/*carosel */}
    <Carousel className='mt-5 w-75  mx-auto '>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.froedtert.com/sites/default/files/styles/story_hero_medium/public/image/2020-04/Disheswithfood%201200x628.jpg?itok=kR-ds_HL"

        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
              />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/cardboard-box-filled-with-nonperishable-foods-on-wooden-table-high-picture-id1283712032?b=1&k=20&m=1283712032&s=170667a&w=0&h=u554erAvIkLQ_UIYH9mLaqcOpFYytkwCA8cmVA5ovTU="
         
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* cards regarding every functionality */}
<CardGroup>
  <Card className='m-5'>
    <Card.Img variant="top" className='w-50 mx-auto d-flex' src="https://media0.giphy.com/media/LkxsV3DqNxDwjOYJ40/giphy.gif?cid=ecf05e47iiy0awzj5a6paz3hwckce4dnsfvnyo19uw2o7v2a&rid=giphy.gif&ct=g" />
    <Card.Body>
      <Card.Title>Inventory</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer >
      <Button className='float-end'>Get Inventory</Button>
    </Card.Footer>
  </Card>
  <Card className='m-5'>
    <Card.Img variant="top" className='w-50 mx-auto d-flex' src="https://media3.giphy.com/media/fng8OzU2DvO2NCGeLY/giphy.gif?cid=ecf05e47udsnalndylzd3gfcvl4rwss7noaqhjtgmzmi2ljg&rid=giphy.gif&ct=g" />
    <Card.Body>
      <Card.Title>Statistics</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className='float-end'>Get statistics</Button>
    </Card.Footer>
  </Card>
 
</CardGroup>

      
    </div>
  );
}

export default Home;