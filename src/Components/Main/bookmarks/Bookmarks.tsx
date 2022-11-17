import { useContext } from "react";
import { ContextApi } from "../../../context/context-api";
import { Media } from "../../../types/types";
import classes from "./Bookmarks.module.scss";
import Card from "../Card/Card";

export default function Bookmarks({ searchInput }: { searchInput: string }) {
  const { bookmarkedMedia }: any = useContext(ContextApi);

  const bookmarkedMovies: Media[] = bookmarkedMedia.filter(
    (x: any) => x.category === "Movie"
  );
  const bookmarkedTvSeries: Media[] = bookmarkedMedia.filter(
    (x: any) => x.category === "TV Series"
  );

  // const bookmarked = (type:string) => {
  //   bookmarkedMedia.filter((x:Media) => x.category === type)
  // }

  const filteredMovies = bookmarkedMovies.filter((x) =>
    x.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const filteredTvSeries = bookmarkedTvSeries.filter((x) =>
    x.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={classes.main}>
      <h1>Bookmarked Movies</h1>
      <div className={classes.container}>
        {filteredMovies.map((trend: any) => {
          return (
            <Card
              key={trend.title}
              title={trend.title}
              thumbnail={trend.thumbnail}
              year={trend.year}
              category={trend.category}
              rating={trend.rating}
            />
          );
        })}
      </div>
      <h1>Bookmarked TV Series</h1>
      <div className={classes.container}>
        {filteredTvSeries.map((trend: any) => {
          return (
            <Card
              key={trend.title}
              title={trend.title}
              thumbnail={trend.thumbnail}
              year={trend.year}
              category={trend.category}
              rating={trend.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
