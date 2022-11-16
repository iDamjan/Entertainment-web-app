import classes from './Home.module.scss'
import TrendingMovies from './Trending/TrendingMovies'
import Recommended from './RecommendedMovies/Recommended'

export default function Home() {
  return (
    <div className={classes.container}>
      <h1>Trending</h1>
      <TrendingMovies />
      <h1>Reccomended for you</h1>
      <Recommended />
    </div>
  )
}
