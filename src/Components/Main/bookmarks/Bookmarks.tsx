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
        {filteredMovies.map((movie: any) => {
          return (
            <Card
              key={movie.title}
              title={movie.title}
              thumbnail={movie.thumbnail}
              year={movie.year}
              category={movie.category}
              rating={movie.rating}
              isBookmarked ={movie.isBookmarked}
              isTrending = {movie.isTrending}
            />
          );
        })}
      </div>
      <h1>Bookmarked TV Series</h1>
      <div className={classes.container}>
        {filteredTvSeries.map((tvSerie: any) => {
          return (
            <Card
              key={tvSerie.title}
              title={tvSerie.title}
              thumbnail={tvSerie.thumbnail}
              year={tvSerie.year}
              category={tvSerie.category}
              rating={tvSerie.rating}
              isBookmarked ={tvSerie.isBookmarked}
              isTrending= {tvSerie.isTrending}
            />
          );
        })}
      </div>
    </div>
  );
}
