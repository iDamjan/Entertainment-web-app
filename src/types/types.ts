interface Trending  {
    small:string,
    large:string
}

interface Regular  {
    small:string,
    medium:string,
    large:string
}

interface Thumbnail {
    trending: Trending,
    regular: Regular
}


export interface Media {
    title:string,
    rating:string,
    year:number,
    category:string,
    isBookmarked:boolean,
    isTrending?:boolean,
    thumbnail: Thumbnail | string;
}
