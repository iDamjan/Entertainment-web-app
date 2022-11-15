import data from "../../../Data/data.json";
import Card from "../Card/Card";

export default function TrendingMovies() {
  const trending = data.filter((data) => data.isTrending === true);

  return (
    <div>
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
