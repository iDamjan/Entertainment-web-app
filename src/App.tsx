import Navbar from './Components/Navbar/Navbar';
import classes from './App.module.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className={classes.container}>
     <Navbar  />
     <SearchBar />
     <Main />
    </div>
  );
}

export default App;
