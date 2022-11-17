import { createContext, useState } from "react";
// import {Media} from '../types/types'

// type ctxTypes = {
//     bookmarkedMedia: Media[],
//     setBookmarkedMedia: React.Dispatch<React.SetStateAction<string>>,
// }
export const ContextApi = createContext({
  bookmarkedMedia:[],
  setBookmarkedMedia: () => {},
  addBookmark: () => {}
});

const ContextProvider = ({ children }) => {
  const [bookmarkedMedia, setBookmarkedMedia] = useState([]);

  // FUNCTION FOR ADDING MEDIA TO BOOKMARKS

  const addBookmark = (bookmark) => {
    setBookmarkedMedia([...bookmarkedMedia, bookmark]);
  };

  return (
    <ContextApi.Provider
      value={{ bookmarkedMedia, setBookmarkedMedia, addBookmark }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
