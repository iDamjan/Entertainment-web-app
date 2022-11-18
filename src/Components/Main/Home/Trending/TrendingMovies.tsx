import { getData } from "../../../../api"
import Card from "../../Card/Card";
import classes from "./TrendingMovies.module.scss";
export default function TrendingMovies() {

  const data = getData()
  const trending = data.filter((data) => data.isTrending === true);

  return (
    <div className={classes.container}>
      {trending.map((trend :any) => {
        return (
          <Card
            key={trend.title}
            title={trend.title}
            thumbnail={trend.thumbnail.trending?.large}
            year={trend.year}
            category={trend.category}
            rating={trend.rating}
            isTrending = {trend.isTrending}
            isBookmarked = {trend.isBookmarked}
          />
        );
      })}
    </div>
  );
}
