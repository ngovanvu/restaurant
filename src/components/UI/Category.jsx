import React from "react";
import "../../style/category.css";
import iconCook from "../../images/Icon-cook.png";

const categoryData = [
  {
    display: "Магическая",
    lastDisplay: "Атмосфера",
    imgUrl: iconCook,
    desc: "B нашем заведении царит магическая атмосфера наполненная вкусными ароматами",
  },
  {
    display: "Лучшее качество ",
    lastDisplay: "Еды",
    imgUrl: iconCook,
    desc: "Качество нашей  Еды - отменное!",
  },
  {
    display: "Незабываемый",
    lastDisplay: "Вкус",
    imgUrl: iconCook,
    desc: "Наши повара готовят удивительно вкусные блюда",
  },
];
const Category = () => {
  return (
    <div className="category__card ">
    {
        categoryData.map((item,index) => (
        <div className="category__item " key={index}>
        <div className="category__img">
          <img src={item.imgUrl} alt="img" />
        </div>
        <div className="category__content">
          <p>
            {item.display} <span>{item.lastDisplay}</span>
          </p>
          <div className="category__desc">
            {item.desc}
          </div>
        </div>
      </div>

        ))
    }
     
      </div>

  );
};

export default Category;
