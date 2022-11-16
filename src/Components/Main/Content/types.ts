export type PropsType = {
  data: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        arge: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  };
};
