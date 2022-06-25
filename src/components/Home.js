import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'
import Button from "react-bootstrap/Button";
import Bgm1 from "../components/images/bgm1.jpg";
import React,{useState} from 'react';
import {useTranslation} from 'react-i18next';


function Home() {
  const {t}=useTranslation();


  return (
 
  <div className='Home'>
    <div>

      <div className='container p-0 w-100 justify-content-evenly'>

          <div className='row mx-auto m-3'>
            <div className='col'>
              <div className='card'>
                <div className='card-body text-center'>
                {t("quote-1")}
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                  <div className='card-body text-center'>
                  {t("quote-2")}
                  </div>
                </div>
            </div>
            <div className='col'>
              <div className='card'>
                <div className='card-body text-center'>
                {t("quote-3")}

                </div>
              </div>
            </div>
          </div>

 

      </div>
    {/* image */}
    <div>
      <img src="https://media.istockphoto.com/vectors/food-donation-and-charity-vector-id1224414210?k=6&m=1224414210&s=170667a&w=0&h=q6jgt94AfEil4LAQIXygB90JMbEZcbwxgJbqy4NcUFw=" className='mx-auto w-100 d-block'></img>
    </div>
    
    {/* cards regarding every functionality */}
<CardGroup>
  <Card className='m-5 mb-2'>
    <Card.Img variant="top" className='w-50 mx-auto d-flex' src="https://media0.giphy.com/media/LkxsV3DqNxDwjOYJ40/giphy.gif?cid=ecf05e47iiy0awzj5a6paz3hwckce4dnsfvnyo19uw2o7v2a&rid=giphy.gif&ct=g" />
    <Card.Body>
      <Card.Title><h2>{t('inventory')}</h2></Card.Title>
      <Card.Text>
        {/* This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer. */}
        <p>{t('card_inventory_text')}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer >
      <Button className='float-end'>{t('get_inventory')}</Button>
    </Card.Footer>
  </Card>
  <Card className='m-5 mb-2'>
    <Card.Img variant="top" className='w-50 mx-auto d-flex' src="https://media3.giphy.com/media/fng8OzU2DvO2NCGeLY/giphy.gif?cid=ecf05e47udsnalndylzd3gfcvl4rwss7noaqhjtgmzmi2ljg&rid=giphy.gif&ct=g" />
    <Card.Body>
      <Card.Title><h2>{t('statistics')}</h2></Card.Title>
      <Card.Text>
      <p>{t('card_statistics_text')}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button className='float-end'>{t('get_stats')}</Button>
    </Card.Footer>
  </Card>
</CardGroup>
      <div className='styling'>
        <hr className='w-75 mx-auto text-warning'></hr>
        <h1 className='text-center text-warning'>{t("about")} </h1>
        <p className='text-center text-warning'>{t("about_para")} </p>
      </div>
      
    </div>
    </div>
  );
}

export default Home;