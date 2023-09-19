/* eslint-disable react/prop-types */
import React from "react";
import "./productItem.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Link className="empty-link" to={`/product/${props.id}`}>
      <article className="card">
        <div className="temporary_text">
          <img className="pro-imge" src={props.image} alt={props.title} />
        </div>
        <div className="card_content">
          <span className="card_title">{props.title}</span>
          <span className="card_subtitle">
            Perfect Product for you coming from our Culture.
          </span>
          <p className="card_description">{props.disc}</p>
        </div>
      </article>
    </Link>
  );
}
