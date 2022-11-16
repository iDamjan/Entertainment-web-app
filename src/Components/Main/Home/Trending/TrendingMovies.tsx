import data from "../../../../Data/data.json";
import Card from "../../Card/Card";
import classes from './TrendingMovies.module.scss'

export default function TrendingMovies() {
  const trending = data.filter((data) => data.isTrending === true);

  return (
    <div className={classes.container}>
      {trending.map((trend) => {
        return (
          <Card
            title={trend.title}
            thumbnail={trend.thumbnail.trending?.large}
            year={trend.year}
            category={trend.category}
            rating = {trend.rating}
          />
        );
      })}
    </div>
  );
}
