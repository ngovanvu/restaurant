import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import "../../style/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
         <div className="footer__top d-flex align-items-center gap-5">
         <Col lg="4" md="4" sm="12" xs="12">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <p className="footer__desc">
                Наш ресторан ждет вас, обслуживание и еда на самом высоком
                уровне, потому что вы этого заслуживаете
              </p>
              <p className="desc___logo">Время работы</p>
            </div>

            <div className="footer__center d-flex gap-3">
              <ul>
                <li>Понедельниц - Пятница</li>
                <li>8:00 am to 9:00 pm</li>
              </ul>

              <ul>
                <li>Суббота</li>
                <li>8:00 am to 9:00 pm</li>
              </ul>

              <ul>
                <li>Воскресенье</li>
                <li>Закрыто</li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="12" sm="12" xs="12">
            <h6 className="footer__title">Навигация</h6>
            <ul className="footer__menu">
              <li>Меню</li>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Галерея</li>
            </ul>
          </Col>

          <Col lg="3" md ="12" sm="12" xs="12">
            <h6 className="footer__title">Блюда</h6>
            <ul className="footer__menu">
              <li>Рыба с овощами</li>
              <li>Чили с тофу</li>
              <li>Яичница с огурцом</li>
              <li>Остальные блюда</li>
            </ul>
          </Col>
         </div>
        </Row>

        <Row className="copyright mt-5">
          <Col lg="6" md="12"  sm="12" xs="12">
            <p className="copyright__text d-flex gap-2">
            <i class="ri-copyright-line"></i> 2022 Restaurants. All Right Reserved. Designed by Delinc
            </p>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
             <p>Terms of Service</p>
             <p>Privacy Policy</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
