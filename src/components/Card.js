import React from "react";
import "../style/card.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280"; // + img path

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__header">{props.name}</div>
        <div className="card__img">
          <img src={IMG_API + props.path} alt={props.name} />
        </div>
        <div className="card__footer">
          <div className="footer-item">{props.rate}</div>
          <div className="footer-item">{props.date}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
