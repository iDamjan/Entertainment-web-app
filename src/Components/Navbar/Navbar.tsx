import Logo from "../../static/logo.svg";
import Home from "../../static/icon-nav-home.svg";
import Movies from "../../static/icon-nav-movies.svg";
import TvSeries from "../../static/icon-nav-tv-series.svg";
import Bookmarks from "../../static/icon-nav-bookmark.svg"
import Avatar from "../../static/image-avatar.png";
import classes from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes.categories}>
        <img src={Home} alt="Home" />
        <img src={Movies} alt="Movies" />
        <img src={TvSeries} alt="TvSeries" />
        <img src={Bookmarks} alt="" />
      </div>
      <div className={classes.avatar}>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}
