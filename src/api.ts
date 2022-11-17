import data from "./Data/data.json";
import { Media } from "./types/types";

export const getData = (): Media[] => data as Media[];
