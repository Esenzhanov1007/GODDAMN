import React from "react";
import { Carousel } from "react-bootstrap";
import './MainPage.css'

const MainPage = () => {
  return (
    <div>
      <div><h1 class="text-center">GODDAMN</h1></div>
      <div className="hero">
        <Carousel card bg-dark text-white border-0>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.retail.ru/upload/medialibrary/581/81e10d03c6d72478fd70ddc34692aab8_1440x.jpg"
              alt="Third slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vape.kg/wa-data/public/photos/49/00/49/49.740x0.png"
              alt="Third slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.pnp.ru/upload/entities/2020/07/21/article/detailPicture/70/49/d3/b9/1cc5dcb9b1cc40c35ac02f3681488a17.jpg"
              alt="Third slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vape.kg/wa-data/public/photos/69/00/69/69.740x0.jpg"
              alt="First slide"
              width='150px'
              height='500px'
            />
          {/* <Carousel.Caption>
            <h3>Men's clothing</h3>
            <p>Shop men's clothing at La collection</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vape.kg/wa-data/public/photos/52/00/52/52.740x0.png"
              alt="First slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vape.kg/wa-data/public/photos/29/00/29/29.740x0.jpg"
              alt="Second slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vape.kg/wa-data/public/photos/49/00/49/49.740x0.png"
              alt="Third slide"
              width='150px'
              height='500px'
            />
          </Carousel.Item>
     
          
        </Carousel>
      </div>
      <div className='links' class='d-flex justify-content-around' style={{height:'150px', marginTop:'30px'}}>
        <div >
          <img src="https://opt-583312.ssl.1c-bitrix-cdn.ru/upload/iblock/05c/05ccda33e4ee06d636b7ff1cc2e1ec24.png?15995524782938" alt="vape" />
          <br/>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <a class="text-decoration-none link-dark" href="#">vape</a>
          </div>
        </div>
        <div>
          <img src="https://opt-583312.ssl.1c-bitrix-cdn.ru/upload/iblock/d01/d0171a634485b0ccbb97cbb5d109cd75.png?15995525221723" alt="vape" />
          <br/>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <a class="text-decoration-none link-dark" href="#">кальяны</a>
          </div>
        </div>
        <div>
          <img src="https://opt-583312.ssl.1c-bitrix-cdn.ru/upload/iblock/588/588fa479222e27b487d4c250394c9572.png?15995525631728" alt="vape" />
          <br/>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <a class="text-decoration-none link-dark" href="#">жидкости</a>
          </div>
        </div>
        <div class='justify-content-center'>
          <img src="https://opt-583312.ssl.1c-bitrix-cdn.ru/upload/iblock/73d/73d631a5023a4a3b8153ae678f657c86.png?15995526139340" alt="vape" />
          <br/>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <a class="text-decoration-none link-dark" href="#">табак</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;