type Thumbnail = {
    trending: {
        small:string,
        large:string
    },
    regular: {
        small:string,
        medium:string,
        large:string,
    }
}


export type Media = {
    title:string,
    rating:string,
    year:number,
    category:string,
    thumbnail: Thumbnail | string;
}