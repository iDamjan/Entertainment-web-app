import data from "./Data/data.json";

export const Movies = data.filter((x) => x.category === "Movie");
export const TvSeries = data.filter((x) => x.category === "TV Series");
