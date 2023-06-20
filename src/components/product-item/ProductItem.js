import React from "react";
import "./productItem.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Link className="empty-link" to={`/product/${props.id}`}>
      <article class="card">
        <div class="temporary_text">
          <img className="pro-imge" src={props.image} alt={props.title} />
        </div>
        <div class="card_content">
          <span class="card_title">{props.title}</span>
          <span class="card_subtitle">
            Perfect Product for you coming from our Culture.
          </span>
          <p class="card_description">{props.disc}</p>
        </div>
      </article>
    </Link>
  );
}
