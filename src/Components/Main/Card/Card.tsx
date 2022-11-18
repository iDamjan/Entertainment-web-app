import classes from "./Card.module.scss";
import { useContext } from "react";
import { ContextApi } from "../../../context/context-api";
import { Media } from "../../../types/types";

export default function Card({
  title,
  category,
  thumbnail,
  year,
  rating,
  isBookmarked
}: Media) {

  const { bookmarkedMedia, setBookmarkedMedia }: any = useContext(ContextApi);

  const bookmarkHandler = () => {
    setBookmarkedMedia([
      ...bookmarkedMedia,
      {
        title: title,
        category: category,
        thumbnail: thumbnail,
        year: year,
        rating: rating,
        isBookmarked: true,
      },
    ]);
  };

  console.log(isBookmarked)

  return (
    <div
      style={{ backgroundImage: `url(${thumbnail})` }}
      className={classes.container}
    >
      <div onClick={bookmarkHandler} className={isBookmarked ? classes.bookmarkActive : classes.bookmark}>
        <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
        </svg>
      </div>

      <div className={classes.movieInfo}>
        <div className={classes.movieDetails}>
          <p>{`${year} |`}</p>
          <p>{`${category} |`}</p>
          <p>{rating}</p>
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
