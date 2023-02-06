import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import rega from "../images/Rectangle 38.png";
import regaMini from "../images/regaMini.png"
import heroright from "../images/Rectangle 33.png";
import herorightItem from "../images/test.png";
import leftItem from "../images/leaf.png";
import imgCategory from "../images/category-img.png";
import menufood1 from "../images/menufood1.png";
import menufood2 from "../images/menufood2.png";
import menufood3 from "../images/menufood3.png";
import menufood4 from "../images/menufood4.png";

import menufoodright1 from "../images/menufood-right1.png";
import menufoodright2 from "../images/menufood-right2.png";
import menufoodright3 from "../images/menufood-right3.png";
import menufoodright4 from "../images/menufood-right4.png";

import galleryfood from "../images/galleryFood-img.png";
import galleryfood1 from "../images/galleryFood1-img.png";
import galleryfood2 from "../images/galleryFood2-img.png";
import galleryfood3 from "../images/galleryFood3-img.png";
import galleryfood4 from "../images/galleryFood4-img.png";
import galleryfood5 from "../images/galleryFood5-img.png";

import galleryfoodPhone1 from "../images/galleryFoodMini1-img.png";
import galleryfoodPhone2 from "../images/galleryFoodMini2-img.png";
import galleryfoodPhone3 from "../images/galleryFoodMini3-img.png";
import galleryfoodPhone4 from "../images/galleryFoodMini4-img.png";
import galleryfoodPhone5 from "../images/galleryFoodMini5-img.png";
import galleryfoodPhone6 from "../images/galleryFoodMini6-img.png";


import chef1 from '../images/chef1-img.png'
import chef2 from '../images/chef2-img.png'
import chef3 from '../images/chef3-img.png'

import menufood_icon1 from "../images/menufood-icon1.png"
import menufood_icon2 from "../images/menufood-icon2.png"
import menufood_icon3 from "../images/menufood-icon3.png"
import menufood_icon4 from "../images/menufood-icon4.png"


import Category from "../components/UI/Category";
import VisitorsSlider from "../components/UI/slider/VisitorsSlider";
import "../style/home.css";

const menuFoodData = [
  {
    title: "Лумпия с соусом",
    price: "2500",
    imgUrl: menufoodright1,
    desc: "Начинка из свиного фарша, обжаренного с луком, морковью и другими овощами",
  },
  {
    title: "Рыба с овощами ",
    price: "3500",
    imgUrl: menufoodright2,
    desc: "Очень нежная рыбка, минимум масла и калорий, гарнир готовится в самой рыбе",
  },
  {
    title: "Чили с тофу",
    price: "2700",
    imgUrl: menufoodright3,
    desc: "Очень острое и пряное блюдо из рецептов индийско-китайской кухни",
  },
  {
    title: "Яичница с огурцом",
    price: "1980",
    imgUrl: menufoodright4,
    desc: "Наивкуснейшая яичница с солёными огурцами на завтрак",
  },
];

const Home = () => {
  return (
    <div className="home">
      <section>
        <div className="banner__content">
          <div className="hero__img">
            {/* <img src={hero} alt="hero__img" /> */}
          </div>
          <div className="hero__detail-left">
            <img src={rega} alt="hero__img " />
          </div>
          <div className="hero__detail-leftMini">
          <img src={regaMini} alt="hero__img " />
          </div>
          <div className="hero__detail-text">
            <h4>Добро пожаловать в</h4>
            <h1>Наш ресторан</h1>
            <div className="hero__detail-textItem d-flex align-items-center justify-content-center gap-3">
              <div className="hero__detail-item mb-3 "></div>
              <p>ДОМ ЛУЧШЕЙ ЕДЫ</p>
              <div className="hero__detail-item mb-3"></div>
            </div>
          </div>
          <button className="hero__button">МЕНЮ</button>

          <div className="hero__detail-right">
            <img src={heroright} alt="hero__img-right" />
          </div>

          <div className="hero__detail-rightItem">
            <img src={herorightItem} alt="herorightItem" />
          </div>

          <div className="hero__detail-leftItem">
            <img src={leftItem} alt="herorightItem" />
          </div>
        </div>
      </section>

      <section>
        <Container>
            <Row>
              <Category />
            </Row>
            
            <Row>
              <div className="category__bottom">
                <Col lg="6" md="6" sm="12" xs="12">
                  <div className="category__history">
                    <h1>
                      Наша <span>История</span>
                    </h1>
                    <div className="category__desc">
                      Как и у любого другого самобытного места, у нас есть своя,
                      особая история. Идея ресторана пришла основателям
                      неожиданно. Во время прогулки по лесу создатель нашего
                      ресторана застрял в сотнях километров от ближайшего
                      населенного пункта. Вдали от цивилизации и связи им
                      пришлось навремя обустровать себе нехитрый быт, добывать и
                      готовить себе еду.
                    </div>

                    <div className="category__time">
                      <span>
                        93<span className="category__time-desc">Напитки</span>
                      </span>
                      <span>
                        206<span className="category__time-desc">Еда</span>
                      </span>
                      <span>
                        71<span className="category__time-desc">Закуски</span>
                      </span>
                    </div>
                  </div>
                </Col>

                <Col lg="6" md="6" sm="12" xs="12">
                  <div className="category__home-img">
                    <img src={imgCategory} alt="category__home-img" />
                  </div>
                </Col>
              </div>
            </Row>
        </Container>
      </section>

      <section >
      <div className="home__banner-Mini">
        <div className="home__banner-MiniBrg">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" xs="12">
                <div className="home__banner-miniDesc">
                  <div>
                    Отпразднуйте в одном из <div>самых лучших ресторанов.</div>
                  </div>
                  <p>Только в этом месяце бизнес-ланч от 3000 тенге</p>
                </div>
              </Col>
              <Col lg="6" md="6" sm="12" xs="12">
                <div className="home__banner-minibtn">
                  <button>3AKA3 СТОЛИКА</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
      </section>

      <section >
        <Container className="menu__food-op">
          <Row className="menu__food-pos">
            <h1 className="menu__food-title">Блюда</h1>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="menu__food-content">
                <div className="item">
                  <img src={menufood1} alt="menu__food-img1" />
                </div>
                <div className="item">
                  <img src={menufood2} alt="menu__food-img1" />
                </div>
                <div className="item">
                  <img src={menufood3} alt="menu__food-img1" />
                </div>
                <div className="item">
                  <img src={menufood4} alt="menu__food-img1" />
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12" xs="12">
              <div className="menu__food-card">
                {menuFoodData.map((item, idex) => (
                  <div className="menu__food-item">
                    <div className="menu__food-img">
                      <img src={item.imgUrl} alt="menu__food-right" />
                      <div className="menu__food-price">{item.price}</div>
                    </div>
                    <div className="menu__food-cardcontent">
                      <p>{item.title}</p>
                      <div className="menu__food-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
                <button className="menu__food-btn">ОСТОЛЬНОЕ МЕНЮ</button>
              </div>
            </Col>
          </Row>
          <div className="menu__food-op-img">
          <img className="menu__food-op1" src={menufood_icon1} alt ="menufood_icon1"/>
          <img className="menu__food-op2" src={menufood_icon2} alt ="menufood_icon1"/>
          <img className="menu__food-op3" src={menufood_icon3} alt ="menufood_icon1"/>
          <img className="menu__food-op4" src={menufood_icon4} alt ="menufood_icon1"/>
          </div>
        </Container>
      </section>

      <section>
        <VisitorsSlider />
      </section>

      <section>
        <Container>
          <Row className="gallery__food d-flex align-items-center">
          <h1 className="menu__title-All">Галерея <span>Блюд</span></h1>
            <Col lg="6" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood} alt="menu__food-img1" />
                </div>
            </Col>
            <Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood1} alt="menu__food-img1" />
                </div>
            </Col><Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood2} alt="menu__food-img1" />
                </div>
            </Col>
          </Row>

          <Row className="gallery__food d-flex align-items-center">
          <Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood3} alt="menu__food-img1" />
                </div>
            </Col><Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood4} alt="menu__food-img1" />
                </div>
            </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfood5} alt="menu__food-img1" />
                </div>
            </Col>
          </Row>

          <Row className="gallery__foodMini">
          <h1 className="menu__title-All">Галерея <span>Блюд</span></h1>
            <Col lg="6" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone1} alt="menu__food-img1" />
                </div>
            </Col>
            <Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone2} alt="menu__food-img1" />
                </div>
            </Col><Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone3} alt="menu__food-img1" />
                </div>
            </Col>
          </Row>

          <Row className="gallery__foodMini">
          <Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone4} alt="menu__food-img1" />
                </div>
            </Col><Col lg="3" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone5} alt="menu__food-img1" />
                </div>
            </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <div className="gallery__food-item">
                  <img src={galleryfoodPhone6} alt="menu__food-img1" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section >
      <h1 className="menu__title-All">Наши <span>Повара</span></h1>
         <div className="chef"> <img src={chef1} alt="chef1"/>
          <img src={chef2} alt="chef1"/>
          <img src={chef3} alt="chef1"/></div>
      </section>
      <section>
        <div className="banner__end"></div>
      </section>

    </div>
  );
};

export default Home;
