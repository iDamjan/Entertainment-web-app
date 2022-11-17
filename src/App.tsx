import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Home from "./Components/Main/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Content from "./Components/Main/Content/Media";
import { useState } from "react";
import { Media } from "./types/types";
import { getData } from "./api";

enum MediaType {
  Movie = "Movie",
  TvSeries = "TV Series",
}

const getMedia = (data: Media[], type: string): Media[] =>
  data.filter((x) => x.category === type);

function App() {

  const data = getData();
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={classes.container}>
      <Navbar />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home searchInput={searchInput} />} />
        <Route
          path="/movies"
          element={<Content searchInput={searchInput} data={getMedia(data, MediaType.Movie)} />}
        />
        <Route
          path="/tvSeries"
          element={<Content searchInput={searchInput} data={getMedia(data, MediaType.TvSeries)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
