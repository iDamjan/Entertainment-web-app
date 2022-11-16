import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Home from "./Components/Main/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Movies, TvSeries } from "./ContentFilter.js";
import Content from "./Components/Main/Content/Content";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  
  return (
    <div className={classes.container}>
      <Navbar />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home searchInput = {searchInput} />} />
        <Route path="/movies" element={<Content searchInput = {searchInput} data={Movies} />} />
        <Route path="/tvSeries" element={<Content searchInput = {searchInput} data={TvSeries} />} />
      </Routes>
    </div>
  );
}

export default App;
