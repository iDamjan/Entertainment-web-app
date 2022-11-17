import classes from "./SearchBar.module.scss";
import IconSearch from "../../static/icon-search.svg";
import { useLocation } from "react-router-dom";
import { Props } from "./types";

export default function SearchBar({ searchInput, setSearchInput }: Props) {

  const location = useLocation();
  let placeholder = "Search...";

  const placeholderRule = () => {
    if (location.pathname === "/movies") {
      placeholder = "Search for movies...";
    } else if (location.pathname === "/tvSeries") {
      placeholder = "Search for TV Series...";
      
    } else if (location.pathname === "/bookmarks"){
      placeholder = "Search for Bookmarked shows...";
    } else return placeholder;
  };
  placeholderRule();

  const inputSearchHandler = (e :React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  };

  return (
    <form className={classes["search-bar"]}>
      <img src={IconSearch} alt="IconSearch" />
      <input
        onChange={inputSearchHandler}
        type="search"
        placeholder={placeholder}
      />
    </form>
  );
}
