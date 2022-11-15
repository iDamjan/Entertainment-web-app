import React from 'react'
import classes from './Main.module.scss'
import TrendingMovies from './Trending/TrendingMovies'

export default function Main() {
  return (
    <div className={classes.container}>
      <h1>Trending</h1>
      <TrendingMovies />
    </div>
  )
}
