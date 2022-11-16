import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.scss";
import SearchBar from "./Components/SearchBar/SearchBar";
import Home from "./Components/Main/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import {Movies, TvSeries} from './ContentFilter.js'
import Content from "./Components/Main/Content/Content";

function App() {

  

  return (
    <div className={classes.container}>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Content data = {Movies}/>} />
        <Route path="/tvSeries" element={<Content data ={TvSeries} />} />
      </Routes>
    </div>
  );
}

export default App;
