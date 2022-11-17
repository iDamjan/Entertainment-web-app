import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Home from "./Components/Main/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import MediaContent from "./Components/Main/Media/Media";
import { useState } from "react";
import { Media } from "./types/types";
import { getData } from "./api";
import ContextProvider from "./context/context-api";
import Bookmarks from "./Components/Main/bookmarks/Bookmarks";
import { MediaType } from "./enums/enums";


const getMedia = (data: Media[], type: string): Media[] =>
  data.filter((x) => x.category === type);

function App() {
  const data = getData();
  const [searchInput, setSearchInput] = useState("");

  return (
    <ContextProvider>
      <div className={classes.container}>
        <Navbar />
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home searchInput={searchInput} />} />
          <Route
            path="/movies"
            element={
              <MediaContent
                searchInput={searchInput}
                data={getMedia(data, MediaType.Movie)}
              />
            }
          />
          <Route
            path="/tvSeries"
            element={
              <MediaContent
                searchInput={searchInput}
                data={getMedia(data, MediaType.TvSeries)}
              />
            }
          />
          <Route path= "/bookmarks" element= {<Bookmarks searchInput={searchInput} /> } />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
