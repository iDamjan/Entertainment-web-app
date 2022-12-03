import classes from "./Home.module.scss";
import TrendingMovies from "./Trending/TrendingMovies";
import Recommended from "./RecommendedMovies/Recommended";
import { getData } from "../../../api"
import Card from "../Card/Card";


export default function Home({ searchInput }: {searchInput:string}) {
  const data = getData()
  const filteredData = data.filter((x) =>
    x.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  if(!data) return <></>
  return (
    <>
      {searchInput === "" ? (
        <div className={classes.container}>
          <h1>Trending</h1>
          <TrendingMovies />
          <h1>Reccomended for you</h1>
          <Recommended />
        </div>
      ) : (
        <div className={classes["search-main"]}>
          <h1>
            Found {filteredData.length} Results for {`"${searchInput}"`}
          </h1>
          <div className={classes["container-main"]}>
            {filteredData.map((x: any) => {
              return (
                <Card
                  key={x.title}
                  title={x.title}
                  thumbnail={x.thumbnail.regular?.medium}
                  year={x.year}
                  category={x.category}
                  rating={x.rating}
                  isBookmarked ={x.isBookmarked}
                  isTrending = {x.isTrending}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
