import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import "../../style/header.css";

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>

          <div
            className="navigation d-flex align-items-center justify-content-between"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className="nav__menu">
              <ul className="d-flex align-items-center gap-5">
                <li>МЕНЮ</li>
                <li>O HAC</li>
                <li>ГАЛЕРЕЯ</li>
                <li>КОНТАКТЫ</li>
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
              </span>
              <span className="nav__contact">
                <span className="nav__phone d-flex align-items-center gap-2">
                  <i class="ri-phone-line"></i>
                  +7(708)555-55-55
                </span>
                <span>
                  Свяжитесь c нами для
                  <span className="nav__enter">бронирования</span>
                </span>
              </span>
              <button className="nav__button">3AKA3 СТОЛИКА</button>
            </div>
          </div>

          <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
