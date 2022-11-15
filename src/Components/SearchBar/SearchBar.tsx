import classes from "./SearchBar.module.scss";
import IconSearch from "../../static/icon-search.svg";

export default function SearchBar() {
  return (
    <form className={classes["search-bar"]}>
      <img src={IconSearch} alt="IconSearch" />
      <input type="search" placeholder="Search..." />
    </form>
  );
}
