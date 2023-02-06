import React from "react";
import "../../../style/visitorsslider.css";
import visitorsSliderAvatar from "../../../images/visitorsSlider-avatar.png";
// import Slider from "react-slick";

const VisitorsSlider = () => {
  // const settings = {
  //   dots: true,
  //   // autoplay: true,
  //   infinite: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   // swipeToSlide: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="visitorsSlider ">
        <div className="visitorsSlider-desc">
          Вид из ресторана потрясающий, интерьер необычный, еда отличная,
          обслуживание отличное, понравились закуски и десерт, утка с картошкой
          была восхитительна, все отлично дома в Мексике я не встречал таких
          отменных заведений, однозначно рекомендую.
        </div>
        <div className="visitorsSlider__avatar">
          <img src={visitorsSliderAvatar} alt="visitorsSlider-avatar" />
          <div className="visitorsSlider__title">Посетитель</div>
          <p>Серхио</p>
          <div className="visitorsSlider__dot"></div>
          <div className="visitorsSlider__dot"></div>
          <div className="visitorsSlider__dot active"></div>
        </div>
      </div>
  );
};

export default VisitorsSlider;
