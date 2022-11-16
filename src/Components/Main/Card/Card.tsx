import classes from "./Card.module.scss";
import { Props } from "./types";
import Bookmark from '../../../static/icon-bookmark-empty.svg'

export default function Card({
  title,
  category,
  thumbnail,
  year,
  rating,
}: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${thumbnail})` }}
      className={classes.container}
    >
      <div className={classes.bookmark}>
        <img src={Bookmark} alt="Bookmark" />
      </div>

      <div className={classes.movieInfo}>
        <p>{`${year} |`}</p>
        <p>{`${category} |`}</p>
        <p>{rating}</p>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
