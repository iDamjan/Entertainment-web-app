import React from "react";
import classes from "./Card.module.scss";

type Props = {
  title: string;
  rating: string;
  year: number;
  category: string;
  thumbnail: any;
};

export default function Card({
  title,
  category,
  thumbnail,
  year,
  rating,
}: Props) {
  return (
    <div>
      <div className={classes.bookmark}></div>
      <div>
        <img src={thumbnail} alt="MoviePicture" />
        <div className={classes.movieInfo}>
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
